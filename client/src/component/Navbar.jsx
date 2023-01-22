import React from 'react'
import { DarkMode, LightMode, Search, SettingsOutlined, ArrowDropDownOutlined } from "@mui/icons-material"
import { Menu as MenuIcon, Close } from '@mui/icons-material'
import { setMode } from '../state'
import { useDispatch } from 'react-redux'
import { Button, IconButton, useTheme, MenuItem, Menu } from '@mui/material'
import { useState } from 'react'
import profile from '../assets/profile.jpg'


const Navbar = ({ isSidebarOpen, setIsSidebarOpen, user }) => {

    const [anchorEl, setAnchorEl] = useState(null);
    const isOpen = Boolean(anchorEl);
    const handleClick = (e) => setAnchorEl(e.currentTarget);
    const handleClose = () => setAnchorEl(null);

    const dispatch = useDispatch();
    const theme = useTheme();

    const background = theme.palette.color.background
    const backgroundnav = theme.palette.color.backgroundnav
    const alt = theme.palette.color.alt

    return (
        <nav className={`flex justify-between items-center w-full sm:pl-1 sm:pr-4 overflow-x-hidden sticky top-0 z-30`} 
        style={{ background: backgroundnav }}>
            {/* LEFT  */}
            <div className={`flex justify-between py-3 sm:gap-1`}>
                { !isSidebarOpen ? (<div >
                    <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                        <MenuIcon />
                    </IconButton>
                </div>) :
                (<div>
                    <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                        <Close />
                    </IconButton>
                </div>)}
                <div className='flex items-center justify-between gap-1 sm:gap-3 px-[0.5rem] sm:px-[1.5rem] py-[10px] rounded-md' style={{ background: background }}>
                    <input id="search" className='w-full border-none outline-none' placeholder="Search..." style={{ background: background }}/>
                    <label htmlFor='search' className='cursor-pointer'> <Search /></label>
                </div>
            </div>
            {/* RIGHT  */}
            <div className='flex items-center sm:gap-3 '>
                <div>
                    <IconButton  onClick={()=> dispatch(setMode())}>
                        {theme.palette.mode === "dark" ? (
                        <DarkMode sx={{ color: alt, fontSize: "25px" }} />
                        ) : (
                        <LightMode sx={{ color: alt, fontSize: "25px" }} />
                        )}
                    </IconButton>
                </div>
                <div className='hidden sm:block'>
                    <IconButton>
                        <SettingsOutlined sx={{ fontSize: "25px" }}/>
                    </IconButton>
                </div>
                <div className='flex justify-between items-center'>
                    <Button 
                    onClick={handleClick}
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        textTransform:"none",
                        gap: "0.5rem",
                        width: "144px"
                    }}>
                        <img src={profile} alt="profile" className='h-[30px] w-[30px] sm:h-[36px] sm:w-[36px] rounded-full object-cover' />
                        <div style={{ color: alt }}>
                            <p className='font-bold text-left text-[0.8rem] sm:text-[0.85rem] sm:tracking-wider'>{user.name}</p>
                            <p className='font-normal text-left text-[0.7rem] sm:text-[0.75rem] sm:tracking-wider'><i>{user.occupation}</i></p>
                        </div>
                        <div className='flex items-center'>
                            <ArrowDropDownOutlined sx={{ color: alt, fontSize: "22px" }}/>
                        </div>
                    </Button>
                    {/* menu documentation from material Ui  */}
                    <Menu anchorEl={anchorEl} open={isOpen} onClose={handleClose} anchorOrigin={{ vertical: "bottom", horizontal: "center" }}>
                        <MenuItem onClick={handleClose}>Log Out</MenuItem>
                    </Menu>
                </div>
            </div>
        </nav>
    )
}

export default Navbar