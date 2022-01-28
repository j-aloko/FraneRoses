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
  renderCategoriesPage,
  renderChocolatePage,
  renderAdminPage,
} from "./../../Context-Api/Pages/Actions";
import { ScrollContext } from "./../../Context-Api/Scroll/Context";
import { Link } from "react-router-dom";

function Navbar() {
  const userIsAdmin = true;
  const { dispatch, homePage, categories, chocolate, blog, admin } =
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
      } else if (type === "categories") {
        dispatch(renderCategoriesPage());
      } else if (type === "chocolates") {
        dispatch(renderChocolatePage());
      } else if (type === "blog") {
        dispatch(renderBlogPage());
      } else {
        dispatch(renderAdminPage());
      }
    },
    [dispatch]
  );

  return (
    <div className={scroll ? "navbarContainer color" : "navbarContainer"}>
      <div className="navbarWrapper">
        <div className="navbarLeft">
          <h1 className="navbarLogo">Cocoa</h1>
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
            <div className="Category-dropdown">
              <Link to="/" className="links">
                <span
                  onClick={() => RenderPages("categories")}
                  className={
                    categories ? "navbarMenuCat color" : "navbarMenuCat"
                  }
                >
                  Categories
                </span>
              </Link>
              <div className="Category-dropdown-content">
                <div className="Category-dropdown-content-items">
                  Category items to be built soon
                </div>
              </div>
            </div>
          </div>
          <div className="navbarcenterMenuItems">
            <div className="Chocolate-dropdown">
              <Link to="/" className="links">
                <span
                  onClick={() => RenderPages("chocolates")}
                  className={
                    chocolate ? "navbarMenuChoc color" : "navbarMenuChoc"
                  }
                >
                  Chocolates
                </span>
              </Link>
              <div className="Chocolate-dropdown-content">
                <div className="Chocolate-dropdown-content-items">
                  Chocolate items to be built soon
                </div>
              </div>
            </div>
          </div>
          <div className="navbarcenterMenuItems">
            <span
              className={blog ? "navbarMenuBlog color" : "navbarMenuBlog"}
              onClick={() => RenderPages("blog")}
            >
              Blog
            </span>
          </div>
          {userIsAdmin && (
            <div className="navbarcenterMenuItems">
              <span
                onClick={() => RenderPages("admin")}
                className={admin ? "navbarMenuAdmin color" : "navbarMenuBlog"}
              >
                Admin
              </span>
            </div>
          )}
        </div>
        <div className="navbarRight">
          <div className="navbarIcon">
            <SearchOutlinedIcon />
          </div>
          <div className="navbarIcon">
            <FavoriteBorderOutlinedIcon />
          </div>
          <div className="navbarIcon">
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon />
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
