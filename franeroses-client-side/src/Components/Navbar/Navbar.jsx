import React, { useCallback, useContext, useState, useEffect } from "react";
import "./Navbar.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import Badge from "@mui/material/Badge";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { PagesContext } from "./../../Context-Api/Pages/Context";
import { renderDisplayNone } from "./../../Context-Api/Pages/Actions";
import { Link, useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { authContext } from "./../../Context-Api/Authentication/Context";
import { logoutNow } from "../../Context-Api/Authentication/Action";
import { cartContext } from "./../../Context-Api/Cart/Context";
import { wishlistContext } from "./../../Context-Api/Wishlist/Context";
import axiosInstance from "./../../axios";
import { useMediaQuery } from "react-responsive";

function Navbar() {
  const [inputField, setInputField] = useState(false);

  const [wishListEmpty, setWishListEmpty] = useState(false);

  const [cartEmpty, setCartEmpty] = useState(false);

  const [displayResult, setDisplayResult] = useState(false);

  const [query, setQuery] = useState("");

  const [items, setItems] = useState([]);

  const [color, setColor] = useState(false);

  const [stopDropDownHover, setStopDropDownHover] = useState(false);

  const { dispatch, homePage, products } = useContext(PagesContext);

  const { user, dispatch: userDispatch } = useContext(authContext);

  const { cart } = useContext(cartContext);

  const { wishlist } = useContext(wishlistContext);

  const navigate = useNavigate();

  const ismaxWidth500 = useMediaQuery({ query: "(max-width: 500px)" });

  //Render Pages as per Menu Items
  const RenderPages = useCallback(
    (type) => {
      if (type === "default") {
        dispatch(renderDisplayNone());
      }
    },
    [dispatch]
  );

  //change navbar color when Y axis is >= 80px
  const changeColor = () => {
    if (window.scrollY >= 80) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  const naviagteToWishList = () => {
    if (wishlist?.length > 0) {
      navigate("/wishList");
    }
  };

  const handleWishListMessage = () => {
    if (wishlist?.length <= 0) {
      setWishListEmpty(!wishListEmpty);
    }
  };

  const closeWishListMessage = () => {
    if (wishlist?.length <= 0) {
      setWishListEmpty(!wishListEmpty);
    }
  };

  const naviagteToCart = () => {
    if (cart?.length > 0) {
      navigate("/cart");
    }
  };

  const handleCartMessage = () => {
    if (cart?.length <= 0) {
      setCartEmpty(!cartEmpty);
    }
  };

  const closeCartMessage = () => {
    if (cart?.length <= 0) {
      setCartEmpty(!cartEmpty);
    }
  };

  //handle Logout

  const handleLogout = () => {
    userDispatch(logoutNow());
    navigate("/login");
  };

  // handle search query

  //fetch all products when this component mounts

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const res = await axiosInstance.get("products");
        setItems(
          res.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        );
      } catch (error) {
        console.log(error);
      }
    };
    getAllProducts();
  }, []);

  const handleSearchQuery = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    if (query?.length > 0) {
      setDisplayResult(true);
    } else {
      setDisplayResult(false);
    }
  }, [query?.length]);

  return (
    <div
      className={
        homePage
          ? `${color ? "navbarContainer color" : "navbarContainer change"}`
          : "navbarContainer"
      }
    >
      <div className="navbarWrapper">
        <div className="navbarLeft">
          <Link to="/" className="links">
            <h1 className="navbarLogoTitle">FraneRoses</h1>
          </Link>
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
              <Link to="/products/all" className="links">
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
                    <Link to="/products/Chocolate-Bars " className="links">
                      <h4 className="dropDownTitle">Chocolate Bars</h4>
                    </Link>
                    <ul className="dropDownItems">
                      <Link to="/products/Kingsbite" className="links">
                        <li className="dropDownLineItem">Kingsbite</li>
                      </Link>
                      <Link to="/products/TQ Premium Dark" className="links">
                        <li className="dropDownLineItem">TQ Premium Dark</li>
                      </Link>
                      <Link to="/products/Akuafo" className="links">
                        <li className="dropDownLineItem">Akuafo Bar</li>
                      </Link>
                      <Link to="/products/Oranco" className="links">
                        <li className="dropDownLineItem">Oranco</li>
                      </Link>
                    </ul>
                  </div>
                  <div className="dropDown">
                    <Link to="/products/Chocolate-Dragee" className="links">
                      <h4 className="dropDownTitle">Chocolate Dragee</h4>
                    </Link>
                    <ul className="dropDownItems">
                      <Link to="/products/Pebbles" className="links">
                        <li className="dropDownLineItem">Pebbles</li>
                      </Link>
                      <Link to="/products/Nutty Chocs" className="links">
                        <li className="dropDownLineItem">Nutty Chocs</li>
                      </Link>
                    </ul>
                  </div>
                  <div className="dropDown">
                    <Link to="/products/Drinking-Chocolate" className="links">
                      <h4 className="dropDownTitle">Drinking Chocolate</h4>
                    </Link>
                    <ul className="dropDownItems">
                      <Link to="/products/Alltime" className="links">
                        <li className="dropDownLineItem">Alltime</li>
                      </Link>
                      <Link to="/products/Royale" className="links">
                        <li className="dropDownLineItem">Royale</li>
                      </Link>
                    </ul>
                  </div>
                  <div className="dropDown">
                    <Link to="/products/Choco-Spread-Butter" className="links">
                      <h4 className="dropDownTitle">Choco Spread / Butter</h4>
                    </Link>
                    <ul className="dropDownItems">
                      <Link to="/products/Chocolate Spread" className="links">
                        <li className="dropDownLineItem">Chocolate Spread</li>
                      </Link>
                      <Link to="/products/Butter" className="links">
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
          {/*<div className="navbarcenterMenuItems">
            <Link to="/blog" className="links">
              <span
                className={blog ? "navbarMenuBlog color" : "navbarMenuBlog"}
              >
                Blog
              </span>
            </Link>
          </div>*/}
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
                      onChange={handleSearchQuery}
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
                          <span className="searchKeyWord">{query}</span>{" "}
                          revealed the following:
                        </span>
                        <Link to="/products/all" className="links">
                          <div
                            className="seeProductsOption"
                            onClick={() => {
                              setInputField(false);
                              setDisplayResult(false);
                            }}
                          >
                            <span className="seeProducts">
                              See all products
                            </span>
                            <hr className="underline" />
                            <br />
                          </div>
                        </Link>
                      </div>
                      {items
                        ?.filter((item) =>
                          item?.title
                            .toLowerCase()
                            .includes(query.toLowerCase())
                        )
                        .map((item) => (
                          <Link
                            to={`/product/${item?._id}`}
                            className="links"
                            key={item?._id}
                          >
                            <div
                              className="productResults"
                              onClick={() => {
                                setInputField(false);
                                setDisplayResult(false);
                              }}
                            >
                              <img
                                src={item?.img && item?.img[0]}
                                alt=""
                                className="productResultImg"
                              />
                              <span className="productResultName">
                                {item?.title}
                              </span>
                            </div>
                          </Link>
                        ))}
                    </div>
                  </div>
                )}
              </div>
            )}
            <div
              className="searchOutlinedIcon"
              onClick={() => setInputField(true)}
            >
              {ismaxWidth500 ? (
                <SearchOutlinedIcon
                  style={{ fontSize: 20, marginTop: "5px" }}
                />
              ) : (
                <SearchOutlinedIcon />
              )}
            </div>
          </div>
          {user && (
            <div className="wishListIconWrapper">
              <div
                className="navbarIcon"
                onClick={naviagteToWishList}
                onMouseEnter={handleWishListMessage}
                onMouseLeave={closeWishListMessage}
              >
                <Badge badgeContent={wishlist?.length} color="primary">
                  {ismaxWidth500 ? (
                    <FavoriteBorderOutlinedIcon style={{ fontSize: 20 }} />
                  ) : (
                    <FavoriteBorderOutlinedIcon />
                  )}
                </Badge>
              </div>
              {wishListEmpty && (
                <div className="wishlistEmptyMessage">
                  <span className="noItemsMessage">
                    You have no items in your wishlist
                  </span>
                </div>
              )}
            </div>
          )}
          <div className="cartIconWrapper">
            <div
              className="navbarIcon"
              onClick={naviagteToCart}
              onMouseEnter={handleCartMessage}
              onMouseLeave={closeCartMessage}
            >
              <Badge badgeContent={cart?.length} color="primary">
                {ismaxWidth500 ? (
                  <ShoppingCartOutlinedIcon style={{ fontSize: 20 }} />
                ) : (
                  <ShoppingCartOutlinedIcon />
                )}
              </Badge>
            </div>
            {cartEmpty && (
              <div className="cartEmptyMessage">
                <span className="noItemsMessage">
                  You have no items in your cart
                </span>
              </div>
            )}
          </div>
          {user ? (
            <span className="logout" onClick={handleLogout}>
              Logout
            </span>
          ) : (
            <div className={ismaxWidth500 ? "dropdown minScreen" : "dropdown"}>
              <div
                className="navbarIcon"
                onClick={() => setStopDropDownHover(!stopDropDownHover)}
              >
                {ismaxWidth500 ? (
                  <MenuOutlinedIcon
                    style={{ fontSize: 20, marginTop: "5px" }}
                  />
                ) : (
                  <MenuOutlinedIcon />
                )}
              </div>
              <div
                className={
                  stopDropDownHover
                    ? "dropdown-content minScreen"
                    : "dropdown-content"
                }
                onClick={() => setStopDropDownHover(!stopDropDownHover)}
              >
                <div className="dropdown-content-items">
                  {stopDropDownHover ? (
                    <LoginOutlinedIcon style={{ fontSize: 20 }} />
                  ) : (
                    <LoginOutlinedIcon />
                  )}
                  <Link to="/login" className="links">
                    <span className="Login">Login</span>
                  </Link>
                </div>
                <div className="dropdown-content-items">
                  {ismaxWidth500 ? (
                    <PersonOutlineOutlinedIcon style={{ fontSize: 20 }} />
                  ) : (
                    <PersonOutlineOutlinedIcon />
                  )}
                  <Link to="/signup" className="links">
                    <span className="createAccount">Create Account</span>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default React.memo(Navbar);
