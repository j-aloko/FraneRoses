import React, { useCallback, useEffect } from "react";
import "./Navbar.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import Badge from "@mui/material/Badge";
import { useContext } from "react";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { PagesContext } from "./../../Context-Api/Pages/Context";
import {
  renderHomePage,
  renderBlogPage,
  renderProductsPage,
  renderAdminPage,
  renderDisplayNone,
} from "./../../Context-Api/Pages/Actions";
import { ScrollContext } from "./../../Context-Api/Scroll/Context";
import { Link } from "react-router-dom";

function Navbar() {
  const userIsAdmin = true;
  const { dispatch, homePage, products, blog, admin } =
    useContext(PagesContext);
  const { scroll } = useContext(ScrollContext);

  // Whenever this application renders, automatically render the homepage
  useEffect(() => {
    dispatch(renderHomePage());
  }, [dispatch]);

  //Render Pages as per Menu Items
  const RenderPages = useCallback(
    (type) => {
      if (type === "home") {
        dispatch(renderHomePage());
      } else if (type === "products") {
        dispatch(renderProductsPage());
      } else if (type === "blog") {
        dispatch(renderBlogPage());
      } else if (type === "admin") {
        dispatch(renderAdminPage());
      } else {
        dispatch(renderDisplayNone());
      }
    },
    [dispatch]
  );

  return (
    <div className={scroll ? "navbarContainer color" : "navbarContainer"}>
      <div className="navbarWrapper">
        <div className="navbarLeft">
          <h1 className="navbarLogo">FraneRoses</h1>
        </div>
        <div className="navbarCenter">
          <div
            className="navbarcenterMenuItems"
            onClick={() => RenderPages("home")}
          >
            <Link to="/" className="links">
              <span
                className={homePage ? "navbarMenuHome color" : "navbarMenuHome"}
              >
                Home
              </span>
            </Link>
          </div>
          <div className="navbarcenterMenuItems">
            <div className="Chocolate-dropdown">
              <Link to="/products" className="links">
                <span
                  onClick={() => RenderPages("products")}
                  className={
                    products ? "navbarMenuChoc color" : "navbarMenuChoc"
                  }
                >
                  Products
                </span>
              </Link>
              <div
                className="Chocolate-dropdown-content"
                onClick={() => RenderPages("products")}
              >
                <div className="Chocolate-dropdown-content-items">
                  <img
                    src="/assets/navbar1.jpg"
                    alt=""
                    className="dropDownImg"
                  />
                  <div className="dropDown">
                    <Link to="/products" className="links">
                      <h5 className="dropDownTitle">CHOCOLATE BARS</h5>
                    </Link>
                    <ul className="dropDownItems">
                      <Link to="/product" className="links">
                        <li className="dropDownLineItem">Kingsbite</li>
                      </Link>
                      <Link to="/product" className="links">
                        <li className="dropDownLineItem">TQ Premium Dark</li>
                      </Link>
                      <Link to="/product" className="links">
                        <li className="dropDownLineItem">Akuafo Bar</li>
                      </Link>
                      <Link to="/product" className="links">
                        <li className="dropDownLineItem">Oranco</li>
                      </Link>
                    </ul>
                  </div>
                  <div className="dropDown">
                    <Link to="/products" className="links">
                      <h5 className="dropDownTitle">CHOCOLATE DRAGEE</h5>
                    </Link>
                    <ul className="dropDownItems">
                      <Link to="/product" className="links">
                        <li className="dropDownLineItem">Pebbles</li>
                      </Link>
                      <Link to="/product" className="links">
                        <li className="dropDownLineItem">Nutty Chocs</li>
                      </Link>
                    </ul>
                  </div>
                  <div className="dropDown">
                    <Link to="/products" className="links">
                      <h5 className="dropDownTitle">DRINKING CHOCOLATE</h5>
                    </Link>
                    <ul className="dropDownItems">
                      <Link to="/product" className="links">
                        <li className="dropDownLineItem">Alltime</li>
                      </Link>
                      <Link to="/product" className="links">
                        <li className="dropDownLineItem">Royale</li>
                      </Link>
                    </ul>
                  </div>
                  <div className="dropDown">
                    <Link to="/products" className="links">
                      <h5 className="dropDownTitle">CHOCO SPREAD / BUTTER</h5>
                    </Link>
                    <ul className="dropDownItems">
                      <Link to="/product" className="links">
                        <li className="dropDownLineItem">Chocolate Spread</li>
                      </Link>
                      <Link to="/product" className="links">
                        <li className="dropDownLineItem">Cocoa Butter</li>
                      </Link>
                    </ul>
                  </div>
                  <img
                    src="/assets/navbar2.jpg"
                    alt=""
                    className="dropDownImg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="navbarcenterMenuItems">
            <Link to="/blog" className="links">
              <span
                className={blog ? "navbarMenuBlog color" : "navbarMenuBlog"}
                onClick={() => RenderPages("blog")}
              >
                Blog
              </span>
            </Link>
          </div>
          {userIsAdmin && (
            <div className="navbarcenterMenuItems">
              <Link to="/admin" className="links">
                <span
                  onClick={() => RenderPages("admin")}
                  className={admin ? "navbarMenuAdmin color" : "navbarMenuBlog"}
                >
                  Admin
                </span>
              </Link>
            </div>
          )}
        </div>
        <div className="navbarRight" onClick={() => RenderPages("default")}>
          <div className="navbarIcon">
            <SearchOutlinedIcon />
          </div>
          <div className="navbarIcon">
            <FavoriteBorderOutlinedIcon />
          </div>
          <div className="navbarIcon">
            <Badge badgeContent={4} color="primary">
              <Link to="/cart" className="links">
                <ShoppingCartOutlinedIcon />
              </Link>
            </Badge>
          </div>
          <div className="dropdown">
            <div className="navbarIcon">
              <MenuOutlinedIcon />
            </div>
            <div className="dropdown-content">
              <div className="dropdown-content-items">
                <LoginOutlinedIcon />
                <span className="Login">Login</span>
              </div>
              <div className="dropdown-content-items">
                <PersonOutlineOutlinedIcon />
                <span className="createAccount">Create Account</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Navbar);
