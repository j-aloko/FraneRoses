import "./App.css";
import React, { useContext, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
import Navbar from "./Components/Navbar/Navbar";
import { authContext } from "./Context-Api/Authentication/Context";
import { wishlistContext } from "./Context-Api/Wishlist/Context";
import { getWishList } from "./ApiCalls/Wishlist";
import { cartContext } from "./Context-Api/Cart/Context";
import SuccessPage from "./Pages/SuccessPage/SuccessPage";
import { productsContext } from "./Context-Api/Products/Context";
import { getAllProducts } from "./ApiCalls/Products";

function App() {
  const { user } = useContext(authContext);
  const { dispatch, wishlist } = useContext(wishlistContext);
  const { cart } = useContext(cartContext);
  const { dispatch: productDispatch } = useContext(productsContext);

  //fetch user's wishList when this appliaction mounts

  useEffect(() => {
    getWishList(dispatch, user?._id);
  }, [dispatch, user?._id]);

  //fetch all products
  useEffect(() => {
    getAllProducts(productDispatch);
  }, [productDispatch]);

  return (
    <BrowserRouter>
      <Navbar />
      <div className="App">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/product/:id" element={<SingleProductPage />} />
          <Route path="/products/:all" element={<ProductsPage />} />
          <Route
            path="/cart"
            element={cart?.length < 1 ? <Navigate to="/" /> : <CartPage />}
          />
          <Route
            path="/checkout"
            element={cart?.length > 0 ? <CheckoutPage /> : <Navigate to="/" />}
          />
          <Route
            path="/wishList"
            element={
              wishlist?.length < 1 ? <Navigate to="/" /> : <WishListPage />
            }
          />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route path="/reset" element={<ForgotPassword />} />
          <Route
            path="/5121d2r55956cfe2842ffa0s144cecd7dtea0658c5e6bf77479fd64025b5956cfe2842f"
            element={<ResetPassword />}
          />
          <Route
            path="/signup"
            element={user ? <Navigate to="/" /> : <Signup />}
          />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/deliveries" element={<DeliveriesRefund />} />
          <Route path="/order-success" element={<SuccessPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
