import "./CheckoutPage.css";
import Badge from "@mui/material/Badge";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function CheckoutPage() {
  //autoScroll window to top when this component renders
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="checkoutContainer">
      <div className="checkoutWrapper">
        <div className="checkoutLeft">
          <form action="" className="checkoutLeftContactInfo">
            <span className="contactinformation">Contact information</span>
            <input
              type="number"
              className="inputItem"
              placeholder="Phone Number"
            />
            <input type="email" className="inputItem" placeholder="Email" />
            <div className="checkBox">
              <input
                type="checkbox"
                id="newsLetter"
                name="newsLetter"
                value="subscribe"
              />
              <label htmlFor="newsLetter" className="newsLetter">
                Email me with news and offers
              </label>
            </div>
            <span className="deliveryInformation">Delivery address</span>
            <select className="selectionItems" placeholder="region">
              <option value="Northern Region" className="checkoutregions">
                Select Region
              </option>
              <option value="Northern Region" className="checkoutregions">
                Northern Region
              </option>
              <option value="Ashanti Region" className="checkoutregions">
                Ashanti Region
              </option>
              <option value="Western Region" className="checkoutregions">
                Western Region
              </option>
              <option value="Volta Region" className="checkoutregions">
                Volta Region
              </option>
              <option value="Eastern Region" className="checkoutregions">
                Eastern Region
              </option>
              <option value="Upper West Region" className="checkoutregions">
                Upper West Region
              </option>
              <option value="Upper East Region" className="checkoutregions">
                Upper East Region
              </option>
              <option value="Central Region" className="checkoutregions">
                Central Region
              </option>
              <option value="Greater Accra Region" className="checkoutregions">
                Greater Accra Region
              </option>
            </select>
            <div className="firstNameLastName">
              <input
                type="text"
                className="namefields"
                placeholder="First Name"
              />
              <input
                type="text"
                className="namefields"
                placeholder="Last Name"
              />
            </div>
            <input
              type="text"
              className="inputItem"
              placeholder="Apartment, suite etc.(optional)"
            />
            <input type="text" className="inputItem" placeholder="City" />
            <div className="checkBox">
              <input
                type="checkbox"
                id="saveInfo"
                name="saveInfo"
                value="saveInfo"
              />
              <label for="newsLetter" className="newsLetter">
                Save this information for next time
              </label>
            </div>
          </form>
          <Link to="/cart" className="links">
            <button className="returnToCart">RETURN TO CART</button>
          </Link>
        </div>
        <div className="checkoutRight">
          <div className="checkoutRightProductInfoWrapper">
            <div className="checkoutProductInfo">
              <div className="checkoutImgAndIcon">
                <div className="badgeIcon">
                  <Badge badgeContent={4} color="primary"></Badge>
                </div>
                <img
                  src="/assets/100g.jpg"
                  alt=""
                  className="checkoutProductImg"
                />
              </div>
              <div className="checkoutProductDetails">
                <span className="checkoutProductName">Kingsbite</span>
                <span className="checkoutProductSizeFlavour">
                  100g / oranco
                </span>
              </div>
            </div>
            <span className="checkoutProductAmt">GHS200.00</span>
          </div>
          <div className="checkoutRightProductInfoWrapper">
            <div className="checkoutProductInfo">
              <div className="checkoutImgAndIcon">
                <div className="badgeIcon">
                  <Badge badgeContent={4} color="primary"></Badge>
                </div>
                <img
                  src="/assets/100g.jpg"
                  alt=""
                  className="checkoutProductImg"
                />
              </div>
              <div className="checkoutProductDetails">
                <span className="checkoutProductName">Kingsbite</span>
                <span className="checkoutProductSizeFlavour">
                  100g / oranco
                </span>
              </div>
            </div>
            <span className="checkoutProductAmt">GHS200.00</span>
          </div>
          <div className="checkoutRightProductInfoWrapper">
            <div className="checkoutProductInfo">
              <div className="checkoutImgAndIcon">
                <div className="badgeIcon">
                  <Badge badgeContent={4} color="primary"></Badge>
                </div>
                <img
                  src="/assets/100g.jpg"
                  alt=""
                  className="checkoutProductImg"
                />
              </div>
              <div className="checkoutProductDetails">
                <span className="checkoutProductName">Kingsbite</span>
                <span className="checkoutProductSizeFlavour">
                  100g / oranco
                </span>
              </div>
            </div>
            <span className="checkoutProductAmt">GHS200.00</span>
          </div>
          <hr className="horizontalLine" />
          <div className="checkoutProductsSubtotal">
            <span className="checkoutProductsSubtotalTitle">Subtotal</span>
            <span className="checkoutProductSubtotalAmt">GHS200.00</span>
          </div>
          <div className="checkoutProductsDeliveryFee">
            <span className="checkoutProductsDeliveryFeeTitle">
              Delivery fee
            </span>
            <span className="checkoutProductDeliveryFeeAmt">GHS200.00</span>
          </div>
          <hr className="horizontalLine" />
          <div className="amountToBePaid">
            <span className="ToatalAmountTitle">TOTAL</span>
            <span className="TotalAmount">GHS400.00</span>
          </div>
          <div className="payButton">
            <button className="payNow">PURCHASE</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
