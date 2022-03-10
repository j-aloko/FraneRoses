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
  const [transaction, setTransaction] = useState([]);
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

  //get latest transaction
  useEffect(() => {
    const getTransaction = async () => {
      try {
        const res = await axiosInstance.get("transaction");
        setTransaction(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getTransaction();
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
                <Homepage sales={sales} cost={cost} transaction={transaction} />
              )
            }
          />
          <Route path="/admin-users" element={<Userspage />} />
          <Route path="/admin-products" element={<ProductsPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/new-product" element={<NewProduct />} />
          <Route path="/edit-user/:id" element={<EditUser />} />
          <Route path="/admin-orders" element={<OrderPage />} />
          <Route path="/order-detail/:id" element={<OrderDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
