import React from 'react'
import { Box, useTheme } from '@mui/material'
import Header from '../component/Header'
import { useGetCustomersQuery } from '../state/api'
import { DataGrid } from "@mui/x-data-grid"
import CustomerCustomToolbar from '../component/CustomerCustomToolbar'

const Customers = () => {
    const theme = useTheme();
    const { data, isLoading } = useGetCustomersQuery();

    const columns = [
        {
        field: "_id",
        headerName: "ID",
        flex: 1,
        },
        {
        field: "name",
        headerName: "Name",
        flex: 0.5,
        },
        {
        field: "email",
        headerName: "Email",
        flex: 1,
        },
        {
        field: "phoneNumber",
        headerName: "Phone Number",
        flex: 0.5,
        renderCell: (params) => {
        return params.value.replace(/^(\d{3})(\d{3})(\d{4})/, "($1)$2-$3");
        },
        },
        {
        field: "country",
        headerName: "Country",
        flex: 0.4,
        },
        {
        field: "occupation",
        headerName: "Occupation",
        flex: 1,
        },
        {
        field: "role",
        headerName: "Role",
        flex: 0.5,
        },
    ];

    return (
        <div className='my-4 mx-6 overflow-y-auto'>
            <Header title="CUSTOMERS" subtitle="List of Customers"/>
            <div className='h-[75vh] mt-4'>
                <DataGrid
                    rows={data || []}
                    columns={columns}
                    getRowId={(row) => row._id}
                    loading={isLoading || !data}
                    components={{ Toolbar: CustomerCustomToolbar }}
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

export default Customers