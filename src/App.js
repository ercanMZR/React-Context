import { Route, Routes } from "react-router-dom";
import DashboardLayout from "./components/layout/DashboardLayout";
import Favorites from "./components/orders/Favorites";
import OrderList from "./components/orders/OrderList";


function App() {
  return <>
  
   <DashboardLayout>
      <Routes>
        <Route path="/" element={<OrderList />} />
        <Route path="/favorites" element={<Favorites />} />
         

      </Routes>
    </DashboardLayout>
  </>
}
export default App;
