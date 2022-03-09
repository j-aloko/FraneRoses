import "./App.css";
import React, { useContext, useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import Userspage from "./Pages/UsersPage/Userspage";
import ProductsPage from "./Pages/ProductsPage/ProductsPage";
import AdminSidebar from "./Components/AdminSidebar/AdminSidebar";
import ProductPage from "./Pages/ProductPage/ProductPage";
import NewProduct from "./Pages/NewProduct/NewProduct";
import EditUser from "./Pages/EditUser/EditUser";
import OrderPage from "./Pages/OrderPage/OrderPage";
import OrderDetail from "./Pages/OrderDetail/OrderDetail";
import { productsContext } from "./Context-Api/Products/Context";
import { getAllProducts } from "./ApiCalls/Products";
import { ordersContext } from "./Context-Api/Order/Context";
import { getAllOrders } from "./ApiCalls/Order";

function App() {
  const { dispatch } = useContext(productsContext);

  const { dispatch: ordersDispatch } = useContext(ordersContext);

  //fetch all products if this app mounts
  useEffect(() => {
    getAllProducts(dispatch);
  }, [dispatch]);

  //fetch all orders if this app mounts
  useEffect(() => {
    getAllOrders(ordersDispatch);
  }, [ordersDispatch]);

  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <AdminSidebar />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/users" element={<Userspage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/new-product" element={<NewProduct />} />
          <Route path="/edit-user/:id" element={<EditUser />} />
          <Route path="/orders" element={<OrderPage />} />
          <Route path="/order-detail/:id" element={<OrderDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
