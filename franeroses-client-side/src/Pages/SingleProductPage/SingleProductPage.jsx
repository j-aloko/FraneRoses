import "./SingleProductPage.css";
import React from "react";
import { useState, useEffect, useContext, useCallback } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { PagesContext } from "./../../Context-Api/Pages/Context";
import { renderProductsPage } from "./../../Context-Api/Pages/Actions";
import Footer from "./../../Components/Footer/Footer";
import { demoProducts } from "./../../Data";

function SingleProductPage() {
  const { dispatch } = useContext(PagesContext);

  const [count, setCount] = useState(1);
  const [productImg, setProductImg] = useState("/assets/100g.jpg");
  const [productVariant, setProductVariant] = useState(
    demoProducts?.variant[0]
  );
  const [sizeProductInfo, setProductInfo] = useState();

  //autoScroll window to top when this component renders
  useEffect(() => {
    window.scrollTo({
      top: 50,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  // Whenever this Component renders activate the SingleProductsPage
  useEffect(() => {
    dispatch(renderProductsPage());
  }, [dispatch]);

  // on Initial Render, set the product variant to the first index

  useEffect(() => {
    if (productVariant !== null) {
      setProductInfo(productVariant?.productInfo);
    }
  }, [productVariant]);

  const handleVariantChanges = useCallback((e) => {
    const key = e.target.value;
    const result = demoProducts.variant?.filter((v) => v.name === key);
    setProductVariant(result[0]);
  }, []);

  const handleSizeChanges = useCallback((e) => {}, []);

  return (
    <>
      <div className="singleProductContainer">
        <div className="singleProductWrapper">
          <div className="singleProductTop">
            <div className="singleProductTitles">
              <h1 className="singleProductName">{demoProducts?.title}</h1>
              <h3 className="singleProductRou">
                Products / Dark Chocolates / {demoProducts?.title}
              </h3>
            </div>
          </div>
          <div className="singleProductDown">
            <div className="singleProductDownLeft">
              <img src={productImg} alt="" className="singleProductLeftImg" />
              <div className="singleProductLeftImgsArray">
                <img
                  src="/assets/100g.jpg"
                  alt=""
                  className="arrayImg"
                  onClick={() => setProductImg("/assets/100g.jpg")}
                />
                <img
                  src="/assets/50g.jpg"
                  alt=""
                  className="arrayImg"
                  onClick={() => setProductImg("/assets/50g.jpg")}
                />
                <img
                  src="/assets/20g.jpg"
                  alt=""
                  className="arrayImg"
                  onClick={() => setProductImg("/assets/20g.jpg")}
                />
              </div>
            </div>
            <div className="singleProductDownRight">
              <div className="singleProduct-name-isocert">
                <h1 className="singleProductRightTitle">
                  {demoProducts?.title}
                </h1>
                <img
                  src="/assets/iso.png"
                  alt=""
                  className="isoCertification"
                />
              </div>
              <p className="singleProductDescription">{demoProducts?.desc}</p>
              <div className="singleProductLeftInfo">
                <div className="singleProductPriceWrapper">
                  <h4 className="singleProductPriceTitle">Price:</h4>
                  <span className="singleProductPrice">
                    GHS{sizeProductInfo?.price}
                  </span>
                </div>
                <h4 className="singleProductInStock">
                  HURRY ONLY {sizeProductInfo?.quantity} IN STOCK
                </h4>
                <div className="singleProductSizeWrapper">
                  <h4 className="singleProductSize">Variant</h4>
                  <div className="singleProductSizeOptions">
                    <select
                      className="singleProductSizeSelection"
                      onChange={handleVariantChanges}
                    >
                      <option hidden disabled value="">
                        choose variant
                      </option>
                      <>
                        {demoProducts?.sizes.map((s) => (
                          <option key={s}>{s}</option>
                        ))}
                      </>
                    </select>
                  </div>
                </div>
                <div className="singleProductSizeWrapper">
                  <h4 className="singleProductSize">Size</h4>
                  <div className="singleProductSizeOptions">
                    <select
                      className="singleProductSizeSelection"
                      onChange={handleSizeChanges}
                    >
                      <option hidden disabled value="">
                        choose size
                      </option>
                      <>
                        {demoProducts?.volumes.map((v) => (
                          <option key={v}>{v}</option>
                        ))}
                      </>
                    </select>
                  </div>
                </div>
                <div className="singleProductBrand">
                  <h4 className="singleProductbrandTitle">Brand</h4>
                  <span className="singleProductbrandName">Golden Tree</span>
                </div>
                <div className="singleProductAvailability">
                  <h4 className="singleProductavailability">Availability</h4>
                  <span className="singleProductnumberAvailable">
                    {sizeProductInfo?.quantity} in Stock
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
                      (sizeProductInfo?.price * count + Number.EPSILON) * 100
                    ) / 100}
                  </span>
                </div>
                <div className="singleProduct-AddToCart-WishList">
                  <div className="singleProductAddToCart">
                    <AddShoppingCartIcon />
                    <span className="AddToCart">ADD TO CART </span>
                  </div>
                  <div className="singleProductAddToWishList">
                    <FavoriteBorderIcon />
                    <span className="addToWishList">ADD TO WISH LIST</span>
                  </div>
                </div>
                <div className="buySingleProductNow">
                  <button className="buySingleProduct">BUY NOW</button>
                </div>
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
