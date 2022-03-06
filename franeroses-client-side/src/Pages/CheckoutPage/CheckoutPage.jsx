import "./CheckoutPage.css";
import Badge from "@mui/material/Badge";
import { useEffect, useContext, useState, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Footer from "./../../Components/Footer/Footer";
import { cartContext } from "./../../Context-Api/Cart/Context";
import { ordersContext } from "./../../Context-Api/Order/Context";
import { PaystackConsumer } from "react-paystack";
import { authContext } from "./../../Context-Api/Authentication/Context";
import { createOrder } from "./../../ApiCalls/Order";

function CheckoutPage() {
  const { cart } = useContext(cartContext);
  const [deliveryFee, setDeliveryFee] = useState();
  const [userInfo, setUserInfo] = useState([]);
  const { orders, dispatch } = useContext(ordersContext);
  const { user } = useContext(authContext);
  const location = useLocation();

  const region = useRef();
  const email = useRef();
  const instruction = location?.state;

  //autoScroll window to top when this component renders
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  //Get subTotal

  let initialValue = 0;
  const subtotal = cart?.reduce(
    (previousValue, currentValue) => previousValue + currentValue?.amount,
    initialValue
  );

  //Get Delivery Fee

  useEffect(() => {
    if (
      region.current?.value === "Northern Region" ||
      region.current?.value === "Upper West Region" ||
      region.current?.value === "Upper East Region"
    ) {
      setDeliveryFee(120);
    } else if (
      region.current?.value === "Ashanti Region" ||
      region.current?.value === "Western Region" ||
      region.current?.value === "Volta Region" ||
      region.current?.value === "Central Region"
    ) {
      setDeliveryFee(100);
    } else if (region.current?.value === "Greater Accra Region") {
      setDeliveryFee(35);
    } else if (region.current?.value === "Eastern Region") {
      setDeliveryFee(65);
    }
  }, [region.current?.value]);

  const handleInputs = (e) => {
    const value = e.target.value;
    setUserInfo((prev) => ({ ...prev, [e.target.name]: value }));
  };

  //paystack configuration

  const config = {
    reference: "" + Math.floor(Math.random() * 1000000000 + 1),
    email: email.current?.value,
    amount: (subtotal + deliveryFee) * 100,
    currency: "GHS",
    publicKey: process.env.REACT_APP_PAYSTACK_KEY,
  };

  // if payment is successful
  const handleSuccess = async (reference) => {
    const values = {
      userId: user?._id,
      cart,
      userInfo,
      deliveryFee,
      instruction,
    };
    await createOrder(dispatch, values);
    console.log(reference);
  };

  // if payment tab is closed
  const handleClose = () => {
    console.log("closed");
  };

  const componentProps = {
    ...config,
    text: "Paystack Button Implementation",
    onSuccess: (reference) => handleSuccess(reference),
    onClose: handleClose,
  };

  console.log(orders);

  return (
    <>
      <div className="checkoutContainer">
        <form className="checkoutWrapper">
          <div className="checkoutLeft">
            <div action="" className="checkoutLeftContactInfo">
              <span className="contactinformation">Contact information</span>
              <input
                type="text"
                className="inputItem"
                placeholder="Phone Number"
                name="phone"
                id="phone"
                required
                onChange={handleInputs}
              />
              <input
                type="email"
                className="inputItem"
                placeholder="Email"
                name="email"
                id="email"
                required
                ref={email}
                onChange={handleInputs}
              />
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
              <select
                className="selectionItems"
                placeholder="region"
                required
                name="region"
                id="region"
                onChange={handleInputs}
                ref={region}
              >
                <option className="checkoutregions">Select Region</option>
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
                <option
                  value="Greater Accra Region"
                  className="checkoutregions"
                >
                  Greater Accra Region
                </option>
              </select>
              <div className="firstNameLastName">
                <input
                  type="text"
                  className="namefields"
                  placeholder="First Name"
                  name="firstName"
                  id="firstName"
                  onChange={handleInputs}
                  required
                />
                <input
                  type="text"
                  className="namefields"
                  placeholder="Last Name"
                  name="lastName"
                  id="lastName"
                  onChange={handleInputs}
                  required
                />
              </div>
              <input
                type="text"
                className="inputItem"
                placeholder="Apartment, suite etc"
                name="apartment"
                id="apartment"
                onChange={handleInputs}
                required
              />
              <input
                type="text"
                className="inputItem"
                placeholder="City"
                name="city"
                id="city"
                required
                onChange={handleInputs}
              />
              <div className="checkBox">
                <input
                  type="checkbox"
                  id="saveInfo"
                  name="saveInfo"
                  value="saveInfo"
                />
                <label htmlFor="newsLetter" className="newsLetter">
                  Save this information for next time
                </label>
              </div>
            </div>
            <Link to="/cart" className="links">
              <button className="returnToCart">RETURN TO CART</button>
            </Link>
          </div>
          <div className="checkoutRight">
            {cart?.map((c, index) => (
              <div className="checkoutRightProductInfoWrapper" key={index}>
                <div className="checkoutProductInfo">
                  <div className="checkoutImgAndIcon">
                    <div className="badgeIcon">
                      <Badge badgeContent={c?.quantity} color="primary"></Badge>
                    </div>
                    <img
                      src={c?.img && c?.img[0]}
                      alt=""
                      className="checkoutProductImg"
                    />
                  </div>
                  <div className="checkoutProductDetails">
                    <span className="checkoutProductName">
                      {c?.productName}
                    </span>
                  </div>
                </div>
                <span className="checkoutProductAmt">GHS{c?.amount}</span>
              </div>
            ))}
            <hr className="horizontalLine" />
            <div className="checkoutProductsSubtotal">
              <span className="checkoutProductsSubtotalTitle">Subtotal</span>
              <span className="checkoutProductSubtotalAmt">
                GHS{subtotal && subtotal}
              </span>
            </div>
            <div className="checkoutProductsDeliveryFee">
              <span className="checkoutProductsDeliveryFeeTitle">
                Delivery fee
              </span>
              <span className="checkoutProductDeliveryFeeAmt">
                {(deliveryFee && `GHS${deliveryFee}`) || "pending..."}
              </span>
            </div>
            <hr className="horizontalLine" />
            <div className="amountToBePaid">
              <span className="ToatalAmountTitle">TOTAL</span>
              <span className="TotalAmount">
                GHS{subtotal + (deliveryFee && deliveryFee) || subtotal}
              </span>
            </div>
            <div className="payButton">
              <PaystackConsumer {...componentProps}>
                {({ initializePayment }) => (
                  <button
                    type="submit"
                    className="payNow"
                    onClick={(e) => {
                      e.preventDefault();
                      initializePayment(handleSuccess, handleClose);
                    }}
                  >
                    PURCHASE
                  </button>
                )}
              </PaystackConsumer>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default CheckoutPage;
