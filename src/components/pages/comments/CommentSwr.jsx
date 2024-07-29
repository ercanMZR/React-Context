import { Box, Button, CircularProgress } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import React from 'react'
import useSWR from 'swr';




const fetcher = url => axios.get(url).then(res => res.data);

function CommentSwr() {

    const { data, error, isLoading, mutate } = useSWR('https://jsonplaceholder.typicode.com/comments', fetcher);

    const refresh = () => {
        mutate();
    };

    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            flex: 0.15
        },
        {
            field: 'name',
            headerName: 'Name',
            flex: 0.25
        },
        {
            field: 'email',
            headerName: 'Email',
            flex: 0.25
        },
        {
            field: 'body',
            headerName: 'Body',
            flex: 0.35
        }
    ];

    if (isLoading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <CircularProgress />
            </Box>
        );
    }

    if (error) {
        return <div>Hata oluştu: {error.message}</div>;
    }

    return (
        <>
            <Button onClick={refresh}>Refresh</Button>
            <hr />
            <div style={{ height: 400 }}>
                <DataGrid rows={data} columns={columns} />
            </div>
        </>
    );
}



export default CommentSwr