import React from 'react';
import { useTheme } from "@mui/material";
import { useGetUserPerformanceQuery } from '../state/api';
import { useSelector } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import Header from "../component/Header"
import CustomColumnMenu from '../component/CustomColumnMenu'
import CustomerCustomToolbar from '../component/CustomerCustomToolbar';

const Performance = () => {
    const theme = useTheme();
    const userId = useSelector((state) => state.global.userId);
    const { data, isLoading } = useGetUserPerformanceQuery(userId);
    
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
        <div className='my-4 mx-6 overflow-y-auto'>
            <Header title="PERFORMANCE" subtitle="Track your Affiliate Sales Performance Here" />
            <div className='h-[75vh] mt-4'>
                <DataGrid
                    loading={isLoading || !data}
                    getRowId={(row) => row._id}
                    rows={(data && data.sales) || []}
                    columns={columns}
                    components={{ ColumnMenu: CustomColumnMenu, Toolbar: CustomerCustomToolbar }}
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
        </div>
    )
}

export default Performance