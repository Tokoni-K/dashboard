import React from 'react'
import { DownloadOutlined, Email, PointOfSale, PersonAdd, Traffic } from "@mui/icons-material";
import { Button, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useGetDashboardQuery } from '../state/api';
import Header from '../component/Header';
import StatBox from '../component/StatBox';
import OverviewChart from '../component/OverviewChart';
import BreakdownChart from '../component/BreakdownChart';

const Dashboard = () => {
    const theme = useTheme();
    const text = theme.palette.color.text2
    const bg = theme.palette.color.background2
    const { data, isLoading } = useGetDashboardQuery();

    const columns = [
        {
        field: "_id",
        headerName: "ID",
        flex: 1,
        },
        {
        field: "userId",
        headerName: "User ID",
        flex: 1,
        },
        {
        field: "createdAt",
        headerName: "CreatedAt",
        flex: 1,
        },
        {
        field: "products",
        headerName: "# of Products",
        flex: 0.5,
        sortable: false,
        renderCell: (params) => params.value.length,
        },
        {
        field: "cost",
        headerName: "Cost",
        flex: 1,
        renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
        },
    ];
    return (
        <div className='my-4 mx-6'>
            <div className="flex justify-between items-center">
                <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
                <Button
                    sx={{
                        fontSize: "14px",
                        fontWeight: "bold",
                        padding: "10px 20px",
                        color: theme.palette.color.text2,
                        transition: "background 0.2s ease-in-out",
                        "&:hover": {
                            backgroundColor: theme.palette.color.alt2,
                        },
                    }}>
                        <DownloadOutlined sx={{ mr: "10px" }} />
                        Download Report
                </Button>
            </div>
            <div className='mt-5 grid grid-cols-12 gap-[13px]' style={{ gridAutoRows: "150px"}}>
                <StatBox 
                    title="Total Customers"
                    value={data && data.totalCustomers}
                    increase="+14%"
                    description="Since last month"
                    icon={
                        <Email sx={{ color: theme.palette.color.text2, fontSize: "25px"}} />
                    }
                />
                <StatBox 
                    title="Sales Today"
                    value={data && data.todayStats.totalSales}
                    increase="+21%"
                    description="Since last month"
                    icon={
                        <PointOfSale sx={{ color: theme.palette.color.text2, fontSize: "25px"}} />
                    }
                />
                <div className='row-span-2 col-span-12 lg:col-span-8 rounded p-2' style={{ backgroundColor: bg }}>
                    <OverviewChart isDashboard={true} view="sales"/>
                </div>
                <StatBox 
                    title="Monthly Sales"
                    value={data && data.thisMonthStats.totalSales}
                    increase="+5%"
                    description="Since last month"
                    icon={
                        <PersonAdd sx={{ color: theme.palette.color.text2, fontSize: "25px"}} />
                    }
                />
                <StatBox 
                    title="Yearly Sales"
                    value={data && data.yearlySalesTotal}
                    increase="+43%"
                    description="Since last month"
                    icon={
                        <Traffic sx={{ color: theme.palette.color.text2, fontSize: "25px"}} />
                    }
                />

                {/* ROW 2  */}
                <div className='col-span-12 lg:col-span-8 row-span-2'>
                    <DataGrid
                    loading={isLoading || !data}
                    getRowId={(row) => row._id}
                    rows={(data && data.transactions) || []}
                    columns={columns}
                    sx={{
                        "& .MuiDataGrid-columnHeaders": {
                            backgroundColor: theme.palette.color.background2,
                            color: theme.palette.color.text2,
                            fontWeight: 700
                        },
                        "& .MuiDataGrid-columnHeaderTitle": {
                            color: theme.palette.color.text2,
                            fontWeight: 700
                        },
                        "& .MuiDataGrid-virtualScroller": {
                            backgroundColor: theme.palette.color.background2,
                        },
                        "& .MuiDataGrid-footerContainer": {
                            backgroundColor: theme.palette.color.background2,
                            color: theme.palette.color.text2,
                            borderTop: "none",
                        },
                        "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                            color: `${theme.palette.color.text2} !important`,
                        },
                    }}
                    />
                </div>
                <div className='col-span-12 lg:col-span-4 row-span-2 rounded p-2' style={{ backgroundColor: bg }}>
                    <h6 className='text-[0.85rem] lg:text-[0.95rem]' style={{ color: text }}>
                        Sales by Category
                    </h6>
                    <BreakdownChart isDashboard={true}/>
                </div>
            </div>
        </div>
    )
}

export default Dashboard