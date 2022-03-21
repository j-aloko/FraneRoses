import "./App.css";
import React, { useEffect, useContext } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import Userspage from "./Pages/UsersPage/Userspage";
import ProductsPage from "./Pages/ProductsPage/ProductsPage";
import AdminSidebar from "./Components/AdminSidebar/AdminSidebar";
import ProductPage from "./Pages/ProductPage/ProductPage";
import NewProduct from "./Pages/NewProduct/NewProduct";
import EditUser from "./Pages/EditUser/EditUser";
import OrderPage from "./Pages/OrderPage/OrderPage";
import OrderDetail from "./Pages/OrderDetail/OrderDetail";
import { authContext } from "./Context-Api/Authentication/Context";
import LoginPage from "./Pages/LoginPage/LoginPage";
import { ordersContext } from "./Context-Api/Order/Context";
import { getAllOrders } from "./ApiCalls/Order";
import { productsContext } from "./Context-Api/Products/Context";
import { getAllProducts } from "./ApiCalls/Products";
import { userContext } from "./Context-Api/Users/Context";
import { getUsers } from "./ApiCalls/Users";

function App() {
  const { user } = useContext(authContext);
  const { dispatch } = useContext(ordersContext);
  const { dispatch: productDispatch } = useContext(productsContext);
  const { dispatch: usersDispatch } = useContext(userContext);

  //fetch all orders if this component mounts
  useEffect(() => {
    getAllOrders(dispatch);
  }, [dispatch]);

  //fetch all products if this app mounts
  useEffect(() => {
    getAllProducts(productDispatch);
  }, [productDispatch]);

  useEffect(() => {
    getUsers(usersDispatch);
  }, [usersDispatch]);

  return (
    <BrowserRouter>
      {user?.isAdmin && <Navbar />}
      <div className="container">
        {user?.isAdmin && <AdminSidebar />}
        <Routes>
          <Route
            path="/login"
            element={!user?.isAdmin ? <LoginPage /> : <Navigate to="/" />}
          />
          <Route
            exact
            path="/"
            element={!user?.isAdmin ? <Navigate to="/login" /> : <Homepage />}
          />
          <Route
            path="/admin-users"
            element={!user?.isAdmin ? <Navigate to="/login" /> : <Userspage />}
          />
          <Route
            path="/admin-products"
            element={
              !user?.isAdmin ? <Navigate to="/login" /> : <ProductsPage />
            }
          />
          <Route
            path="/product/:id"
            element={
              !user?.isAdmin ? <Navigate to="/login" /> : <ProductPage />
            }
          />
          <Route
            path="/new-product"
            element={!user?.isAdmin ? <Navigate to="/login" /> : <NewProduct />}
          />
          <Route
            path="/edit-user/:id"
            element={!user?.isAdmin ? <Navigate to="/login" /> : <EditUser />}
          />
          <Route
            path="/admin-orders"
            element={!user?.isAdmin ? <Navigate to="/login" /> : <OrderPage />}
          />
          <Route
            path="/order-detail/:id"
            element={
              !user?.isAdmin ? <Navigate to="/login" /> : <OrderDetail />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
