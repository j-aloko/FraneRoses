import React, { useCallback, useEffect } from "react";
import "./Navbar.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import Badge from "@mui/material/Badge";
import ArrowDropUpOutlinedIcon from "@mui/icons-material/ArrowDropUpOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import { useContext, useState } from "react";
import Popup from "./../Popup/Popup";
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

function Navbar() {
  const [showCat, setShowCat] = useState(false);
  const [showChocs, setShowChocs] = useState(false);
  const userIsAdmin = true;
  const { dispatch, homePage, categories, chocolate, blog, admin } =
    useContext(PagesContext);

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

  //Display Menu
  const displayPopUpMenu = useCallback(
    (type) => {
      if (type === 1) {
        setShowCat(!showCat);
      } else {
        setShowChocs(!showChocs);
      }
    },
    [showCat, showChocs]
  );

  return (
    <div className="navbarContainer">
      <div className="navbarWrapper">
        <div className="navbarLeft">
          <h1 className="navbarLogo">Cocoa</h1>
        </div>
        <div className="navbarCenter">
          <div
            className="navbarcenterMenuItems"
            onClick={() => RenderPages("home")}
          >
            <span
              className={homePage ? "navbarMenuHome color" : "navbarMenuHome"}
            >
              Home
            </span>
          </div>
          <div
            className="navbarcenterMenuItems"
            onClick={() => RenderPages("categories")}
          >
            <span
              className={categories ? "navbarMenuCat color" : "navbarMenuCat"}
            >
              Categories
            </span>
            {showCat ? (
              <ArrowDropUpOutlinedIcon onClick={() => displayPopUpMenu(1)} />
            ) : (
              <ArrowDropDownOutlinedIcon onClick={() => displayPopUpMenu(1)} />
            )}
          </div>
          <div
            className="navbarcenterMenuItems"
            onClick={() => RenderPages("chocolates")}
          >
            <span
              className={chocolate ? "navbarMenuChoc color" : "navbarMenuChoc"}
            >
              Chocolates
            </span>
            {showChocs ? (
              <ArrowDropUpOutlinedIcon onClick={() => displayPopUpMenu(2)} />
            ) : (
              <ArrowDropDownOutlinedIcon onClick={() => displayPopUpMenu(2)} />
            )}
          </div>
          <div
            className="navbarcenterMenuItems"
            onClick={() => RenderPages("blog")}
          >
            <span className={blog ? "navbarMenuBlog color" : "navbarMenuBlog"}>
              Blog
            </span>
          </div>
          {userIsAdmin && (
            <div
              className="navbarcenterMenuItems"
              onClick={() => RenderPages("admin")}
            >
              <span
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
      {showCat || showChocs ? (
        <Popup showCat={showCat} showChocs={showChocs} />
      ) : null}
    </div>
  );
}

export default React.memo(Navbar);
