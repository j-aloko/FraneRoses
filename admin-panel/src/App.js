import "./App.css";
import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import Userspage from "./Pages/UsersPage/Userspage";
import SingleUserPage from "./Pages/Single User Page/SingleUserPage";
import NewUserPage from "./Pages/New User Page/NewUserPage";
import ProductsPage from "./Pages/ProductsPage/ProductsPage";
import SingleProductPage from "./Pages/SingleProductPage/SingleProductPage";
import NewProductPage from "./Pages/New Peoduct Page/NewProductPage";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/users">
            <Userspage />
          </Route>
          <Route path="/user">
            <SingleUserPage />
          </Route>
          <Route path="/newUser">
            <NewUserPage />
          </Route>
          <Route path="/products">
            <ProductsPage />
          </Route>
          <Route path="/product">
            <SingleProductPage />
          </Route>
          <Route path="/newProduct">
            <NewProductPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
