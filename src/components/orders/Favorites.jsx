import React, { useContext } from 'react'
import { FavoritesContext } from '../../context/OrdersContext'
import { Button } from '@mui/material'

function Favorites() {

    const { favorites, favOperation, clearFavorites } = useContext(FavoritesContext)

    return <>
        <h1>Favorites {favorites.length}</h1>
        <hr />
        <Button onClick={clearFavorites} >Clear All</Button>
        <hr />
        <ul>
            {
                favorites.map(item => <li style={{margin:10}} key={item.id}>
                    {item.customerId} {item.requiredDate}
                    <Button onClick={() => favOperation(item)} size="small" style={{marginLeft:5}} variant="contained" color="error">Delete</Button>
                </li>
                )
            }
        </ul>


    </>
}

export default Favorites