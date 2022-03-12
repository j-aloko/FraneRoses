import "./App.css";
import React, { useEffect, useState, useContext } from "react";
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
import axiosInstance from "./axios";
import { authContext } from "./Context-Api/Authentication/Context";
import LoginPage from "./Pages/LoginPage/LoginPage";

function App() {
  const [sales, setSales] = useState([]);
  const [cost, setCost] = useState([]);
  const { user } = useContext(authContext);

  //get monthly sales
  useEffect(() => {
    const getIncome = async () => {
      try {
        const res = await axiosInstance.get("order/income");
        setSales(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getIncome();
  }, []);

  //get monthly cost
  useEffect(() => {
    const getCost = async () => {
      try {
        const res = await axiosInstance.get("products/cost");
        setCost(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCost();
  }, []);

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
            element={
              !user?.isAdmin ? (
                <Navigate to="/login" />
              ) : (
                <Homepage sales={sales} cost={cost} />
              )
            }
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
