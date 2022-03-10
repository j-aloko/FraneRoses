import "./SingleProductPage.css";
import React from "react";
import { useState, useEffect, useContext } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { PagesContext } from "./../../Context-Api/Pages/Context";
import { renderProductsPage } from "./../../Context-Api/Pages/Actions";
import Footer from "./../../Components/Footer/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import { productsContext } from "./../../Context-Api/Products/Context";
import { createCart } from "../../ApiCalls/Cart";
import { cartContext } from "../../Context-Api/Cart/Context";
import { wishlistContext } from "../../Context-Api/Wishlist/Context";
import { createWishList } from "../../ApiCalls/Wishlist";
import { authContext } from "./../../Context-Api/Authentication/Context";
import { useMediaQuery } from "react-responsive";

function SingleProductPage() {
  const { dispatch } = useContext(PagesContext);
  const [product, setProduct] = useState({});
  const [count, setCount] = useState(1);
  const [productImg, setProductImg] = useState("");
  const { products } = useContext(productsContext);
  const { dispatch: cartDispatch } = useContext(cartContext);
  const { dispatch: wishlistDispatch } = useContext(wishlistContext);
  const { user } = useContext(authContext);

  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const navigate = useNavigate();

  const ismaxWidth500 = useMediaQuery({ query: "(max-width: 500px)" });

  //autoScroll window to top when this component renders
  useEffect(() => {
    window.scrollTo({
      top: 100,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  // Whenever this Component renders activate the SingleProductsPage
  useEffect(() => {
    dispatch(renderProductsPage());
  }, [dispatch]);

  //get specific product per its Id

  useEffect(() => {
    setProduct(products?.find((p) => p._id === path));
  }, [products, path]);

  useEffect(() => {
    if (product?.img) {
      setProductImg(product?.img[0]);
    }
  }, [product?.img]);

  //Add Items to cart

  const addItemsToCart = async () => {
    const values = {
      productId: product?._id,
      productName: product?.title,
      quantity: count,
      size: product?.size,
      img: product?.img,
      price: product?.price,
      amount: Math.round((product?.price * count + Number.EPSILON) * 100) / 100,
    };
    await createCart(cartDispatch, values);
  };

  const addItemsToWishlist = async () => {
    const values = {
      userId: user?._id,
      productId: product?._id,
      productName: product?.title,
      quantity: count,
      size: product?.size,
      img: product?.img,
      price: product?.price,
      amount: Math.round((product?.price * count + Number.EPSILON) * 100) / 100,
    };

    await createWishList(wishlistDispatch, values);
  };

  //buy now functionality

  const buyNow = async () => {
    const values = {
      productId: product?._id,
      productName: product?.title,
      quantity: count,
      size: product?.size,
      img: product?.img,
      price: product?.price,
      amount: Math.round((product?.price * count + Number.EPSILON) * 100) / 100,
    };
    await createCart(cartDispatch, values);
    navigate("/checkout");
  };

  return (
    <>
      <div className="singleProductContainer">
        <div className="singleProductWrapper">
          <div className="singleProductTop">
            <div className="singleProductTitles">
              <h1 className="singleProductName">{product?.title}</h1>
              <h2 className="singleProductRou">
                {product?.category} / {product?.title}
              </h2>
            </div>
          </div>
          <div className="singleProductDown">
            <div className="singleProductDownLeft">
              <img src={productImg} alt="" className="singleProductLeftImg" />
              <div className="singleProductLeftImgsArray">
                {product?.img?.map((i, index) => (
                  <img
                    src={i}
                    alt=""
                    className="arrayImg"
                    key={index}
                    onClick={() => setProductImg(i)}
                  />
                ))}
              </div>
            </div>
            <div className="singleProductDownRight">
              <div className="singleProduct-name-isocert">
                {ismaxWidth500 ? (
                  <h3 className="singleProductRightTitle">{product?.title}</h3>
                ) : (
                  <h1 className="singleProductRightTitle">{product?.title}</h1>
                )}
                <img
                  src="/assets/iso.png"
                  alt=""
                  className="isoCertification"
                />
              </div>
              <p className="singleProductDescription">{product?.desc}</p>
              <div className="singleProductLeftInfo">
                <div className="singleProductPriceWrapper">
                  <h4 className="singleProductPriceTitle">Price:</h4>
                  <span className="singleProductPrice">
                    GHS{product?.price}
                  </span>
                </div>
                <h4 className="singleProductInStock">
                  HURRY ONLY {product?.qty} IN STOCK
                </h4>
                <div className="singleProductSizeWrapper">
                  <h4 className="singleProductSize">Size</h4>
                  <div className="singleProductSizeOptions">
                    <span>{product?.size}</span>
                  </div>
                </div>
                <div className="singleProductBrand">
                  <h4 className="singleProductbrandTitle">Brand</h4>
                  <span className="singleProductbrandName">
                    {product?.brand}
                  </span>
                </div>
                <div className="singleProductAvailability">
                  <h4 className="singleProductavailability">Availability</h4>
                  <span className="singleProductnumberAvailable">
                    {product?.qty >= 1
                      ? `${product?.qty} In stock`
                      : "Out of stock"}
                  </span>
                </div>
                <div className="singleProductQuantityContainer">
                  <h4 className="singleProductquantityTitle">Quantity</h4>
                  <div className="singleProductquantityWrapper">
                    <RemoveIcon
                      onClick={() => {
                        count > 1 && setCount(count - 1);
                      }}
                    />
                    <span className="singleProductquantity">{count}</span>
                    <AddIcon onClick={() => setCount(count + 1)} />
                  </div>
                </div>
                <div className="singleProductSubtotal">
                  <h4 className="singleProductSubtotalTitle">Subtotal</h4>
                  <span className="singleProductSubtotalAmount">
                    GHS
                    {Math.round(
                      (product?.price * count + Number.EPSILON) * 100
                    ) / 100}
                  </span>
                </div>
                <div className="singleProduct-AddToCart-WishList">
                  <div
                    className="singleProductAddToCart"
                    onClick={addItemsToCart}
                  >
                    {ismaxWidth500 ? (
                      <AddShoppingCartIcon style={{ fontSize: 15 }} />
                    ) : (
                      <AddShoppingCartIcon />
                    )}

                    <span className="AddToCart">ADD TO CART </span>
                  </div>
                  {user ? (
                    <div
                      className="singleProductAddToWishList"
                      onClick={addItemsToWishlist}
                    >
                      {ismaxWidth500 ? (
                        <FavoriteBorderIcon style={{ fontSize: 15 }} />
                      ) : (
                        <FavoriteBorderIcon />
                      )}
                      <span className="addToWishList">ADD TO WISHLIST</span>
                    </div>
                  ) : (
                    <div className="buySingleProductNow" onClick={buyNow}>
                      <button
                        className={
                          !user ? "buySingleProduct noUser" : "buySingleProduct"
                        }
                      >
                        BUY NOW
                      </button>
                    </div>
                  )}
                </div>
                {user && (
                  <div className="buySingleProductNow" onClick={buyNow}>
                    <button className="buySingleProduct">BUY NOW</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default React.memo(SingleProductPage);
