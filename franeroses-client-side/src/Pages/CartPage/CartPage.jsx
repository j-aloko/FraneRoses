import "./CartPage.css";
import { useEffect, useState, useContext } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Link } from "react-router-dom";
import Footer from "./../../Components/Footer/Footer";
import { cartContext } from "../../Context-Api/Cart/Context";
import Cart from "../../Components/Cart/Cart";

function CartPage() {
  const [region, setRegion] = useState("Northern Region");
  const [rate, setRate] = useState();
  const [fetching, setFetching] = useState(false);
  const { cart } = useContext(cartContext);

  //autoScroll window to top when this component renders
  useEffect(() => {
    window.scrollTo({
      top: 50,
      left: 0,
      behavior: "smooth",
    });
  }, []);

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
    <>
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
                {cart?.map((c, index) => (
                  <Cart key={index} c={c} />
                ))}
                <div className="continue-Update">
                  <Link to="/products" className="links">
                    <button className="contShop-UpadteCart">
                      CONTINUE SHOPPING
                    </button>
                  </Link>
                  <button className="contShop-UpadteCart">UPDATE CART</button>
                </div>
              </div>
            </div>
            <div className="cartDownRight">
              <div className="cartRightOrderSummary">
                <h3 className="orderSummary">ORDER SUMMARY</h3>
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
              <Link to="/checkout" className="links">
                <button className="proceedToCheckout">
                  PROCEED TO CHECKOUT
                </button>
              </Link>
              <div className="cartRightShippingEstimate">
                <div className="cartShippingEstimateTitle">
                  <h3 className="cartShippingEstimate">
                    GET SHIPPING ESTIMATE
                  </h3>
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
      <Footer />
    </>
  );
}

export default CartPage;
