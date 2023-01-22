import React from 'react'
import { useGetAdminsQuery } from '../state/api'
import { DataGrid } from "@mui/x-data-grid"
import { useTheme } from '@mui/material'
import Header from "../component/Header"
import CustomerCustomToolbar from '../component/CustomerCustomToolbar'
import CustomColumnMenu from '../component/CustomColumnMenu'

const Admin = () => {

    const theme = useTheme();
    const { data, isLoading } = useGetAdminsQuery();

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
            <Header title="ADMINS" subtitle="Managing admins and list of admins" />
            <div className='h-[75vh] mt-4'>
                <DataGrid
                    loading={isLoading || !data}
                    getRowId={(row) => row._id}
                    rows={data || []}
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

export default Admin