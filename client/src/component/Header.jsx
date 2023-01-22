import React from 'react'
import { useTheme } from '@mui/material'

const Header = ({ title, subtitle }) => {

    const theme = useTheme();

    return (
        <div>
            <h1 className='mb-[5px] font-bold text-2xl'>{title}</h1>
            <h5 className='mb-[5px]'>{subtitle}</h5>
        </div>
    )
}

export default Header