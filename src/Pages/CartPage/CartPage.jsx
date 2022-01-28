import "./CartPage.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import CircularProgress from "@mui/material/CircularProgress";

function CartPage() {
  const [quantity, setQuantity] = useState(4);
  const [total, setTotal] = useState(240);
  const price = 60;
  const [region, setRegion] = useState("Northern Region");
  const [rate, setRate] = useState();
  const [fetching, setFetching] = useState(false);

  //Calculate Delivery Rate
  const calculateDeliveryRate = (e) => {
    e.preventDefault();
    setFetching(true);
    if (
      region === "Northern Region" ||
      region === "Upper West Region" ||
      region === "Upper East Region"
    ) {
      setRate(120);
    } else if (
      region === "Ashanti Region" ||
      region === "Western Region" ||
      region === "Volta Region" ||
      region === "Central Region"
    ) {
      setRate(100);
    } else if (region === "Greater Accra Region") {
      setRate(35);
    } else if (region === "Eastern Region") {
      setRate(65);
    }
    setFetching(false);
  };

  return (
    <div className="cartContainer">
      <div className="cartWrapper">
        <div className="cartTop">
          <div className="cartTopInfos">
            <h1 className="cartInfoTitle">Your Shopping Cart</h1>
            <h4 className="cartInfoSubTitle">Home / Your Shopping Cart</h4>
          </div>
        </div>
        <div className="cartDown">
          <div className="cartDownLeft">
            <div className="cartLeftTitleCover">
              <h3 className="cartLeftTitle">PRODUCTS</h3>
            </div>
            <div className="cartProductItems">
              <div className="cartProducts">
                <div className="cartProductImg">
                  <div className="removeCartProduct">
                    <CancelRoundedIcon />
                  </div>
                  <img src="/assets/100g.jpg" alt="" className="cartImage" />
                </div>
                <div className="cartProductInfo">
                  <span className="cartProductName">Kingsbite</span>
                  <span className="cartProductSizeFlavour">
                    100g / Kingsbite
                  </span>
                  <div className="cartProductCounter">
                    <AddIcon
                      onClick={() => {
                        setTotal(total + price * 1);
                        setQuantity(quantity + 1);
                      }}
                    />
                    <span className="cartProductCount">{quantity}</span>
                    <RemoveIcon
                      onClick={() => {
                        total > price && setTotal(total - price * 1);
                        quantity > 1 && setQuantity(quantity - 1);
                      }}
                    />
                  </div>
                  <h3 className="cartProductTotal">
                    Total :
                    <span className="cartProductTotalAmt">
                      GHS{Math.round((total + Number.EPSILON) * 100) / 100}
                    </span>
                  </h3>
                </div>
              </div>
              <div className="continue-Update">
                <button className="contShop-UpadteCart">
                  CONTINUE SHOPPING
                </button>
                <button className="contShop-UpadteCart">UPDATE CART</button>
              </div>
            </div>
          </div>
          <div className="cartDownRight">
            <div className="cartRightOrderSummary">
              <h3 className="orderSummary">ORDER SUMMARY</h3>
            </div>
            <div className="cartRightSubtotal">
              <h3 className="cartRightSubtotalTit">Subtotal:</h3>
              <span className="cartRightSubTotalAmt">GHS240.00</span>
            </div>
            <p className="specialInstructions">
              Special instructions for seller <span>(optional)</span>
            </p>
            <textarea
              className="checkoutInstructions"
              autoFocus={true}
            ></textarea>
            <p className="noteTobuyer">
              Delivery fee and discount will be calculated at Checkout
            </p>
            <button className="proceedToCheckout">PROCEED TO CHECKOUT</button>
            <div className="cartRightShippingEstimate">
              <div className="cartShippingEstimateTitle">
                <h3 className="cartShippingEstimate">GET SHIPPING ESTIMATE</h3>
              </div>
              <label htmlFor="region">Select Region</label>
              <select
                name="region"
                id="region"
                className="regionSelection"
                onChange={(e) => setRegion(e.target.value)}
              >
                <option value="Northern Region" className="regions">
                  Northern Region
                </option>
                <option value="Ashanti Region" className="regions">
                  Ashanti Region
                </option>
                <option value="Western Region" className="regions">
                  Western Region
                </option>
                <option value="Volta Region" className="regions">
                  Volta Region
                </option>
                <option value="Eastern Region" className="regions">
                  Eastern Region
                </option>
                <option value="Upper West Region" className="regions">
                  Upper West Region
                </option>
                <option value="Upper East Region" className="regions">
                  Upper East Region
                </option>
                <option value="Central Region" className="regions">
                  Central Region
                </option>
                <option value="Greater Accra Region" className="regions">
                  Greater Accra Region
                </option>
              </select>
              <button
                className="calculateShipping"
                onClick={calculateDeliveryRate}
              >
                {fetching ? (
                  <CircularProgress color="success" />
                ) : (
                  " CALCULATE SHIPPING"
                )}
              </button>
              {region && rate && (
                <span className="deliveryResult">
                  Standard delivery rate is <b>GHS{rate}</b>
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
