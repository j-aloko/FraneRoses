import "./SingleProductPage.css";
import { useState, useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

function SingleProductPage() {
  const [count, setCount] = useState(1);
  //autoScroll window to top when this component renders
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const price = 60.89;

  return (
    <div className="singleProductContainer">
      <div className="singleProductWrapper">
        <div className="singleProductTop">
          <div className="singleProductTitles">
            <h1 className="singleProductName">Kingsbite 100g</h1>
            <h3 className="singleProductRou">
              Products / Dark Chocolates / Kingsbite 100g
            </h3>
          </div>
        </div>
        <div className="singleProductDown">
          <div className="singleProductDownLeft">
            <img
              src="/assets/50g.jpg"
              alt=""
              className="singleProductLeftImg"
            />
          </div>
          <div className="singleProductDownRight">
            <div className="singleProduct-name-isocert">
              <h1 className="singleProductRightTitle">Kingsbite 100g</h1>
              <img src="/assets/iso.png" alt="" className="isoCertification" />
            </div>
            <p className="singleProductDescription">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui...
            </p>
            <div className="singleProductLeftInfo">
              <div className="singleProductPriceWrapper">
                <h3 className="singleProductPriceTitle">Price:</h3>
                <span className="singleProductPrice">GHS{price}</span>
              </div>
              <h3 className="singleProductInStock">HURRY ONLY 4 IN STOCK</h3>
              <div className="singleProductSizeWrapper">
                <h3 className="singleProductSize">Size</h3>
                <div className="singleProductSizeOptions">
                  <select
                    name="kingsbite 100g"
                    id="kingsbite 100g"
                    className="singleProductSizeSelection"
                  >
                    <option value="100g">100g</option>
                    <option value="100g">50g</option>
                    <option value="100g">20g</option>
                  </select>
                </div>
              </div>
              <div className="singleProductFlavourWrapper">
                <h3 className="singleProductFlavour">Flavour</h3>
                <div className="singleProductFlavourOptions">
                  <select
                    name="kingsbite 100g"
                    id="kingsbite 100g"
                    className="singleProductFlavourSelection"
                  >
                    <option value="Milk">Milk</option>
                    <option value="Akuafo">Akuafo</option>
                    <option value="Oranco">Oranco</option>
                  </select>
                </div>
              </div>
              <div className="singleProductBrand">
                <h3 className="singleProductbrandTitle">Brand</h3>
                <span className="singleProductbrandName">Golden Tree</span>
              </div>
              <div className="singleProductAvailability">
                <h3 className="singleProductavailability">Availability</h3>
                <span className="singleProductnumberAvailable">4 in Stock</span>
              </div>
              <div className="singleProductQuantityContainer">
                <h3 className="singleProductquantityTitle">Quantity</h3>
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
                <h3 className="singleProductSubtotalTitle">Subtotal</h3>
                <span className="singleProductSubtotalAmount">
                  GHS{Math.round((price * count + Number.EPSILON) * 100) / 100}
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
  );
}

export default SingleProductPage;
