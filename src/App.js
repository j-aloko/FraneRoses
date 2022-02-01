import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleProductPage from "./Pages/SingleProductPage/SingleProductPage";
import ProductsPage from "./Components/ProductsPage/ProductsPage";
import HomePage from "./Pages/HomePage/HomePage";
import BlogPage from "./Pages/BlogPage/BlogPage";
import CartPage from "./Pages/CartPage/CartPage";
import CheckoutPage from "./Pages/CheckoutPage/CheckoutPage";
import WishListPage from "./Pages/WishListPage/WishListPage";
import Login from "./Pages/LoginPage/Login";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import ResetPassword from "./Pages/ResetPassword/ResetPassword";
import Signup from "./Pages/SignUpPage/Signup";
import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy";
import TermsOfService from "./Pages/TermsOfService/TermsOfService";
import DeliveriesRefund from "./Pages/Deliveries&Refund/Deliveries&Refund";
import CircularProgress from "@mui/material/CircularProgress";

const LazyAdmin = React.lazy(() => import("./Pages/AdminPanel/Admin"));

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route
            path="/admin"
            element={
              <React.Suspense
                fallback={
                  <div className="fallback">
                    <CircularProgress color="secondary" />
                  </div>
                }
              >
                <LazyAdmin />
              </React.Suspense>
            }
          />
          <Route path="/product" element={<SingleProductPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/wishList" element={<WishListPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reset" element={<ForgotPassword />} />
          <Route
            path="/5121d2r56bf77479fd64025b777a95956cfe2842ffa0s144cecd7dtea0658c5e"
            element={<ResetPassword />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/deliveries" element={<DeliveriesRefund />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
