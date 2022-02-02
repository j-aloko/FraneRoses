import React, { useCallback } from "react";
import "./Navbar.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import Badge from "@mui/material/Badge";
import { useContext, useState } from "react";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { PagesContext } from "./../../Context-Api/Pages/Context";
import { renderDisplayNone } from "./../../Context-Api/Pages/Actions";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

function Navbar() {
  const [inputField, setInputField] = useState(false);
  const [displayResult, setDisplayResult] = useState(false);
  const userIsAdmin = true;
  const { dispatch, homePage, products, blog, admin } =
    useContext(PagesContext);

  //Render Pages as per Menu Items
  const RenderPages = useCallback(
    (type) => {
      if (type === "default") {
        dispatch(renderDisplayNone());
      }
    },
    [dispatch]
  );

  return (
    <div className="navbarContainer">
      <div className="navbarWrapper">
        <div className="navbarLeft">
          <h1 className="navbarLogo">FraneRoses</h1>
        </div>
        <div className="navbarCenter">
          <div className="navbarcenterMenuItems">
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
                  className={
                    products ? "navbarMenuChoc color" : "navbarMenuChoc"
                  }
                >
                  Products
                </span>
              </Link>
              <div className="Chocolate-dropdown-content">
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
              >
                Blog
              </span>
            </Link>
          </div>
          {userIsAdmin && (
            <div className="navbarcenterMenuItems">
              <Link to="/admin/:id" className="links">
                <span
                  className={admin ? "navbarMenuAdmin color" : "navbarMenuBlog"}
                >
                  Admin
                </span>
              </Link>
            </div>
          )}
        </div>
        <div className="navbarRight" onClick={() => RenderPages("default")}>
          <div className="navbarSearchIcon">
            {inputField && (
              <div className="searchBar">
                <div className="searchBarWrapper">
                  <div className="closeIconWrapper">
                    <span></span>
                    <div
                      className="closeSearchBarIcon"
                      onClick={() => {
                        setInputField(false);
                        setDisplayResult(false);
                      }}
                    >
                      <CloseIcon />
                    </div>
                  </div>
                  <div className="searchInput">
                    <input
                      type="text"
                      className="searchInputField"
                      placeholder="Search"
                      onChange={() => setDisplayResult(true)}
                    />
                    <div className="searchIconBackground">
                      <SearchOutlinedIcon
                        style={{ marginTop: "2px", marginLeft: "2px" }}
                      />
                    </div>
                  </div>
                </div>
                {displayResult && (
                  <div className="searchResult">
                    <div className="searchResultWrapper">
                      <div className="seeAllProducts">
                        <span className="yourSearchFor">
                          Your search for{" "}
                          <span className="searchKeyWord">Chocolate</span>{" "}
                          revealed the following:
                        </span>
                        <div className="seeProductsOption">
                          <span className="seeProducts">See all products</span>
                          <hr className="underline" />
                          <br />
                        </div>
                      </div>
                      <div className="productResults">
                        <img
                          src="/assets/50g.jpg"
                          alt=""
                          className="productResultImg"
                        />
                        <span className="productResultName">Kingsbite</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
            <div
              className="searchOutlinedIcon"
              onClick={() => setInputField(true)}
            >
              <SearchOutlinedIcon />
            </div>
          </div>
          <div className="navbarIcon">
            <Badge badgeContent={4} color="primary">
              <Link to="/wishList" className="links">
                <FavoriteBorderOutlinedIcon />
              </Link>
            </Badge>
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
                <Link to="/login" className="links">
                  <span className="Login">Login</span>
                </Link>
              </div>
              <div className="dropdown-content-items">
                <PersonOutlineOutlinedIcon />
                <Link to="/signup" className="links">
                  <span className="createAccount">Create Account</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Navbar);
