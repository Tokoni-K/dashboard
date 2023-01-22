import React from 'react'
import { useState } from 'react'
import { FormControl, MenuItem, InputLabel, Select } from '@mui/material'
import Header from '../component/Header';
import OverviewChart from '../component/OverviewChart';

const Overview = () => {
    const [view, setView] = useState("sales");

    return (
        <div className='my-4 mx-6 overflow-hidden'>
            <Header title="OVERVIEW" subtitle="Overview of general revenue and profit"  />
            <div className="h-[75vh]" >
                {/* DROPDOWN TO SWITCHBETWEEN SALES AND UNITS  */}
                <FormControl sx={{ mt: "1rem", width: "100px"}}>
                <InputLabel>View</InputLabel>
                <Select
                    value={view}
                    label="View"
                    onChange={(e) => setView(e.target.value)}
                >
                    <MenuItem value="sales">Sales</MenuItem>
                    <MenuItem value="units">Units</MenuItem>
                </Select>
                </FormControl>
                <OverviewChart view={view} />
            </div>
        </div>
    )
}

export default Overview