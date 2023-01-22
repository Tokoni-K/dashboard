import React from 'react'
import { Divider, IconButton, useTheme } from '@mui/material';
import { SettingsOutlined, ChevronLeft, ChevronRightOutlined, HomeOutlined, ShoppingCartOutlined, Groups2Outlined, ReceiptLongOutlined, PublicOutlined, TodayOutlined, CalendarMonthOutlined, AdminPanelSettingsOutlined, TrendingUpOutlined, PieChartOutlined, PointOfSaleOutlined } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import profile from '../assets/profile.jpg'



const navItems = [
    {
        text: "Dashboard",
        icon: <HomeOutlined />
    },
    {
        text: "Client Facing",
        icon: null
    },
    {
        text: "Products",
        icon: <ShoppingCartOutlined />
    },
    {
        text: "Customers",
        icon: <Groups2Outlined />
    },
    {
        text: "Transactions",
        icon: <ReceiptLongOutlined />
    },
    {
        text: "Geography",
        icon: <PublicOutlined />
    },
    {
        text: "Sales",
        icon: null
    },
    {
        text: "Overview",
        icon: <PointOfSaleOutlined />
    },
    {
        text: "Daily",
        icon: <TodayOutlined />
    },
    {
        text: "Monthly",
        icon: <CalendarMonthOutlined />
    },
    {
        text: "Breakdown",
        icon: <PieChartOutlined />
    },
    {
        text: "Management",
        icon: null
    },
    {
        text: "Admin",
        icon: <AdminPanelSettingsOutlined />
    },
    {
        text: "Performance",
        icon: <TrendingUpOutlined />
    },
]

const Sidebar = ({ drawerWidth, isSidebarOpen, setIsSidebarOpen, user }) => {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const [active, setActive] = useState("");

    const theme = useTheme();
    const background2 = theme.palette.color.background2
    const text = theme.palette.color.text
    const text2 = theme.palette.color.text2

    useEffect(() => {
        setActive(pathname.substring(1));
    }, [pathname])

    return (
        <section className='fixed top-0 left-0 sm:relative z-50'>
            <div className={`pb-2 ${!isSidebarOpen ? "ml-[-250px]" : drawerWidth} transition-[margin] duration-200 sm:duration-500 transition-transform`} style={{ width: drawerWidth, background: background2 }}>
                <div className='w-full '>
                        <div className='pt-4 pb-3 '>
                            <div className='flex items-center justify-between mb-2'>
                                <div className='flex items-center gap-2 pl-8 '>
                                    <h4 className='font-bold'>
                                        THE BUSINESS
                                    </h4>
                                </div>
                                <div className='block sm:hidden'>
                                    <IconButton>
                                        <SettingsOutlined sx={{ fontSize: "20px" }}/>
                                    </IconButton>
                                </div>
                                <div className='sm:hidden pr-1'>
                                    <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                                        <ChevronLeft sx={{ fontSize: "20px" }}/>
                                    </IconButton>
                                </div>
                            </div>
                            <div >
                                <div className='w-full'>
                                    {navItems.map((navItem) => (
                                        !navItem.icon ?
                                            (
                                            <div className='mt-4 mr-0 mb-1 ml-2 pl-6' key={navItem.text}>
                                                <p>{navItem.text}</p>
                                            </div>
                                            ) : (
                                            <div className={`flex items-center gap-8 py-[6px] pl-10 text-base cursor-pointer hover:opacity-60 whitespace-pre transition-[opacity] duration-100 sm:duration-300 `} key={navItem.text}
                                            onClick={() =>{
                                                    navigate(`/${navItem.text.toLowerCase()}`)
                                                    setActive(navItem.text.toLowerCase())
                                            }}
                                            style={{
                                                backgroundColor: active === navItem.text.toLowerCase() ? "#FFBA70" : "transparent",
                                                color: active === navItem.text.toLowerCase() ? text : text2
                                            }}>
                                                <p id='sidebarIcon' >{navItem.icon}</p>
                                                <p >{navItem.text}</p>
                                                {active === navItem.text.toLowerCase() &&(
                                                    <ChevronRightOutlined sx={{ ml: "auto", mr:"8px" }}/>
                                                )}
                                            </div>
                                        )
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=''>
                        <Divider />
                        <div className={`flex justify-between items-center normal-case gap-4 mt-4 mr-8 mb-0 ml-8`}>
                            <img src={profile} alt="profile" className='h-[38px] w-[38px] rounded-full object-cover' />
                            <p className='font-bold text-left text-[0.9rem]'>{user.name}</p>
                            <p className='font-normal text-left text-[0.8rem] '><i>{user.occupation}</i></p>
                        </div>

                    </div>
            </div>
        </section>
    )
}

export default Sidebar