import React from 'react'
import Header from "../component/Header";
import BreakdownChart from "../component/BreakdownChart";

const Breakdown = () => {
    return (
        <div className='my-4 mx-6 overflow-hidden'>
            <Header title="BREAKDOWN" subtitle="Breakdown of Sales By Category" />
            <div className=' h-[75vh]  overflow-y-auto'>
                <BreakdownChart />
            </div>
    
        </div>
    )
}

export default Breakdown