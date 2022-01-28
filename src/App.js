import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleProductPage from "./Pages/SingleProductPage/SingleProductPage";
import ProductsPage from "./Components/ProductsPage/ProductsPage";
import HomePage from "./Pages/HomePage/HomePage";
import BlogPage from "./Pages/BlogPage/BlogPage";
import Admin from "./Pages/AdminPanel/Admin";
import CartPage from "./Pages/CartPage/CartPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="App">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/blog" element={<BlogPage />} />
          <Route exact path="/admin" element={<Admin />} />
          <Route path="/product" element={<SingleProductPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
