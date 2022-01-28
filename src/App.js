import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Body from "./Pages/Body/Body";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleProductPage from "./Pages/SingleProductPage/SingleProductPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Body />} />
        </Routes>
        <Routes>
          <Route path="/product" element={<SingleProductPage />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
