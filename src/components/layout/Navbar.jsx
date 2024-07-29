import { AppBar, Stack } from '@mui/material'
import { Typography } from '@mui/material'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FavoritesContext } from '../context/OrdersContext.jsx'

function Navbar() {

  const { favorites } = useContext(FavoritesContext)

  return <>
    <AppBar position="static">
      <Stack direction="row" justifyContent="space-evenly" sx={{ padding: "1%" }}>
        <Link style={{ color: "white", textDecoration: "none" }} to="/"><Typography variant="h5">Orders</Typography></Link>
        <Link style={{ color: "white", textDecoration: "none" }} to="/favorites"><Typography variant="h5">Favorites <span style={{color:"red"}}>({favorites.length})</span></Typography></Link>
        {/* <Link style={{ color: "white", textDecoration: "none" }} to="/addproduct"><Typography variant="h5">Add Product</Typography></Link>
        <Link style={{ color: "white", textDecoration: "none" }} to="/productlist"><Typography variant="h5">Product List</Typography></Link>
        <Link style={{ color: "white", textDecoration: "none" }} to="/comments"><Typography variant="h5">Comments</Typography></Link>
        <Link style={{ color: "white", textDecoration: "none" }} to="/commentsSWR"><Typography variant="h5">CommentsSWR</Typography></Link>      */}
      </Stack>
    </AppBar>
  </>
}

export default Navbar