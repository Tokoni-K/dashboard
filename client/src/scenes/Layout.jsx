import React from 'react'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Sidebar from '../component/Sidebar'
import Navbar from '../component/Navbar'
import { useGetUserQuery } from '../state/api'

const Layout = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const userId = useSelector((state) => state.global.userId);
    const { data } = useGetUserQuery(userId)

    return (
        <div className='w-full h-[100%] flex overflow-x-hidden '>
            <Sidebar 
                user={data || {}}
                drawerWidth="250px"
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}
                />
            <div className='w-full'>
                <Navbar 
                    user={data || {}}
                    isSidebarOpen={isSidebarOpen}
                    setIsSidebarOpen={setIsSidebarOpen}
                />
                <Outlet />
            </div>
        </div>
    )
    }

export default Layout