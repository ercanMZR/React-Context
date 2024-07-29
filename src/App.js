import { Route, Routes } from "react-router-dom";
import DashboardLayout from "./components/layout/DashboardLayout";
import Favorites from "./components/orders/Favorites";
import OrderList from "./components/orders/OrderList";
import AddProduct from "./components/pages/products/AddProduct";
import ProductList from "./components/pages/products/ProductList";
import Comments from "./components/pages/comments/Comments";
import CommentSwr from "./components/pages/comments/CommentSwr";


function App() {
  return <>
  
   <DashboardLayout>
      <Routes>
        <Route path="/" element={<OrderList />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/productlist" element={<ProductList />} />  
        <Route path="/comments" element={<Comments />} />  
        <Route path="/commentsSwr" element={<CommentSwr />} />  

      </Routes>
    </DashboardLayout>
  </>
}
export default App;
