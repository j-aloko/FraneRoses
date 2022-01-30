import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleProductPage from "./Pages/SingleProductPage/SingleProductPage";
import ProductsPage from "./Components/ProductsPage/ProductsPage";
import HomePage from "./Pages/HomePage/HomePage";
import BlogPage from "./Pages/BlogPage/BlogPage";
import Admin from "./Pages/AdminPanel/Admin";
import CartPage from "./Pages/CartPage/CartPage";
import CheckoutPage from "./Pages/CheckoutPage/CheckoutPage";
import WishListPage from "./Pages/WishListPage/WishListPage";
import Login from "./Pages/LoginPage/Login";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import ResetPassword from "./Pages/ResetPassword/ResetPassword";
import Signup from "./Pages/SignUpPage/Signup";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/blog" element={<BlogPage />} />
          <Route exact path="/admin" element={<Admin />} />
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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
