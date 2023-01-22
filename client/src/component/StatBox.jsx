import React from 'react'
import { useTheme } from "@mui/material";

const StatBox = ({ title, value, increase, icon, description }) => {

    const theme = useTheme();
    const text = theme.palette.color.text2
    const bg = theme.palette.color.background2

    return (
        <div className={`row-span-1 col-span-6 lg:col-span-2 flex flex-col justify-between px-4 py-5 rounded flex-grow`} style={{ backgroundColor: bg }}>
            <div className='flex justify-between items-start'>
                <h6 className='text-[0.85rem] lg:text-[0.95rem]' style={{ color: text }}>
                    {title}
                </h6>
                {icon}
            </div>
            <h3 className='font-semibold text-[1.1rem] lg:text-[1.2rem]' style={{ color: text }}>{value}</h3>
            <div className='flex justify-between items-start gap-2'>
                <h6 className='text-[0.85rem] lg:text-[0.95rem]' style={{ color: text }}>
                    <i>{increase}</i>
                </h6>
                <p className='text-[0.8rem] lg:text-[0.85rem]'>{description}</p>
            </div>
        </div>
    )
}

export default StatBox