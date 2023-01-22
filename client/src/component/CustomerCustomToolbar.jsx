import React from 'react'
import {
    GridToolbarDensitySelector,
    GridToolbarContainer,
    GridToolbarColumnsButton,
} from "@mui/x-data-grid";

const CustomerCustomToolbar = () => {
    return (
        <GridToolbarContainer>
        <div className="flex justify-start items-center w-full">
            <div className="flex gap-3 items-center py-4">
                <GridToolbarColumnsButton />
                <GridToolbarDensitySelector />
            </div>
        </div>
        </GridToolbarContainer>
    )
}

export default CustomerCustomToolbar