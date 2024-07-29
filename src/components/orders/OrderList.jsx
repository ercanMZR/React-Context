import React, { useContext, useEffect, useState } from 'react'
import { axiosInstance } from '../api/axiosInstance'
import { IconButton } from '@mui/material'
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { FavoritesContext } from '../context/OrdersContext';

function OrderList() {
    const [orders, setorders] = useState([])
    const { favOperation, favorites } = useContext(FavoritesContext)
    useEffect(() => {
        loadData()

    }, [])
    const loadData = () => {
        axiosInstance.get("orders")
            .then(res => { setorders(res.data) })
    }
    const isFavorite = (id) => {
        let favItem = favorites.find(f => f.id === id)
        if(favItem)
            return true
        else
            return false 
}
const columns = [
    {
        field: "customerId",
        headerName: "Customer Id",
        flex: 0.3
    },
    {
        field: "orderDate",
        headerName: "Order Date",
        flex: 0.3
    },
    {
        field: "requiredDate",
        headerName: "Required Date",
        flex: 0.2
    },
    {
        field: "shippedDate",
        headerName: "Shipped Date",
        flex: 0.1
    },
    {
        field: "Add to Favorites",
        headerName: "Add to Favorites",
        flex: 0.1,
        renderCell: (item) => <IconButton onClick={() => favOperation(item.row)}>
            {
                isFavorite(item.row.id) ?
                    <StarIcon />
                    :
                    <StarBorderIcon />
            }
        </IconButton>
    }
]
return (
    <>
        <div style={{ height: 500 }}>
            {
                <DataGrid
                    rows={orders}
                    columns={columns}
                    slots={{ toolbar: GridToolbar }}
                />
            }

        </div>


    </>
)
}

export default OrderList