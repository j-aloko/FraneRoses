import "./CheckoutPage.css";
import Badge from "@mui/material/Badge";
import { useEffect, useContext, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { cartContext } from "./../../Context-Api/Cart/Context";
import { ordersContext } from "./../../Context-Api/Order/Context";
import { PaystackConsumer } from "react-paystack";
import { authContext } from "./../../Context-Api/Authentication/Context";
import { createOrder } from "./../../ApiCalls/Order";
import CircularProgress from "@mui/material/CircularProgress";

function CheckoutPage() {
  const { cart } = useContext(cartContext);
  const [deliveryFee, setDeliveryFee] = useState();
  const [userInfo, setUserInfo] = useState({});
  const { dispatch } = useContext(ordersContext);
  const { user } = useContext(authContext);
  const [loading, setLoading] = useState(false);
  const [loadingCashOnDelivery, setLoadingCashOnDelivery] = useState(false);
  const [redirecting, setRedirecting] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [saveUser, setSaveUser] = useState(false);
  const [savedUser, setSavedUser] = useState();

  useEffect(() => {
    setSavedUser(JSON.parse(localStorage.getItem("franeRosesSavedUser")));
  }, []);

  const email = useRef();
  const phone = useRef();
  const region = useRef();
  const firstName = useRef();
  const lastName = useRef();
  const apartment = useRef();
  const city = useRef();
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
    email: email.current?.value || savedUser?.email,
    amount: (subtotal + deliveryFee) * 100,
    currency: "GHS",
    publicKey: process.env.REACT_APP_PAYSTACK_KEY,
  };

  // if payment is successful
  const handleSuccess = async (reference) => {
    const values = {
      userId: user?._id,
      cart,
      userInfo: savedUser || userInfo,
      email: email.current?.value || savedUser?.email,
      subtotal,
      total: subtotal + deliveryFee,
      deliveryFee,
      status: "Paid",
      instruction,
    };
    setRedirecting(true);
    await createOrder(dispatch, values);
    setRedirecting(false);
    navigate("/order-success", {
      state: {
        email: email.current?.value || savedUser?.email,
        amount: subtotal + deliveryFee,
      },
    });
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

  const handleCashOnDelivery = async (e) => {
    e.preventDefault();
    const mailformat =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!email.current?.value) {
      alert("Email field is required");
    } else if (!email.current?.value.match(mailformat)) {
      alert("Invalid email address");
    } else if (!phone.current?.value) {
      alert("Phone field is required");
    } else if (!region.current?.value) {
      alert("Region field is required");
    } else if (!firstName.current?.value) {
      alert("First Name field is required");
    } else if (!lastName.current?.value) {
      alert("Last Name field is required");
    } else if (!apartment.current?.value) {
      alert("Neighborhood field is required");
    } else if (!city.current?.value) {
      alert("City field is required");
    } else {
      setLoadingCashOnDelivery(true);
      const values = {
        userId: user?._id,
        cart,
        userInfo: savedUser || userInfo,
        email: email.current?.value || savedUser?.email,
        subtotal,
        total: subtotal + deliveryFee,
        deliveryFee,
        status: "Cash on delivery",
        instruction,
      };
      await createOrder(dispatch, values);
      setLoadingCashOnDelivery(false);
      navigate("/order-success", {
        state: {
          email: email.current?.value || savedUser?.email,
          amount: subtotal + deliveryFee,
        },
      });
    }
  };

  //saving Info for next time
  const handleSaveInfo = () => {
    if (!savedUser) {
      setSaveUser(true);
      localStorage.setItem("franeRosesSavedUser", JSON.stringify(userInfo));
    } else {
      setSaveUser(false);
      localStorage.removeItem("franeRosesSavedUser");
      setSavedUser();
    }
  };

  return (
    <>
      <div className="checkoutContainer">
        <div className="checkoutWrapper">
          <div className="checkoutLeft">
            <form action="" className="checkoutLeftContactInfo">
              <span className="contactinformation">Contact information</span>
              <input
                type="text"
                className="inputItemx"
                placeholder="Phone Number"
                name="phone"
                id="phone"
                defaultValue={savedUser?.phone}
                onChange={handleInputs}
                ref={phone}
              />
              <input
                type="email"
                className="inputItemx"
                placeholder="Email"
                name="email"
                id="email"
                defaultValue={savedUser?.email}
                ref={email}
                onChange={handleInputs}
              />
              <div className="checkBox">
                <input type="checkbox" id="newsLetter" name="newsLetter" />
                <label htmlFor="newsLetter" className="newsLetter">
                  Email me with news and offers
                </label>
              </div>
              <span className="deliveryInformation">Delivery information</span>
              <select
                className="selectionItems"
                placeholder="region"
                name="region"
                id="region"
                onChange={handleInputs}
                ref={region}
              >
                {savedUser ? (
                  <option
                    className="checkoutregions"
                    selected="selected"
                    defaultValue={savedUser?.region}
                  >
                    {savedUser?.region}
                  </option>
                ) : (
                  <option className="checkoutregions">Select Region </option>
                )}
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
                  defaultValue={savedUser?.firstName}
                  onChange={handleInputs}
                  ref={firstName}
                />
                <input
                  type="text"
                  className="namefields"
                  placeholder="Last Name"
                  name="lastName"
                  defaultValue={savedUser?.lastName}
                  id="lastName"
                  onChange={handleInputs}
                  ref={lastName}
                />
              </div>
              <input
                type="text"
                className="inputItemx"
                placeholder="Neighborhood or Street"
                name="apartment"
                id="apartment"
                defaultValue={savedUser?.apartment}
                onChange={handleInputs}
                ref={apartment}
              />
              <input
                type="text"
                className="inputItemx"
                placeholder="City"
                name="city"
                id="city"
                defaultValue={savedUser?.city}
                onChange={handleInputs}
                ref={city}
              />
              <div className="checkBox">
                <input
                  checked={saveUser || savedUser ? true : false}
                  type="checkbox"
                  id="saveInfo"
                  name="saveInfo"
                  onChange={handleSaveInfo}
                />
                <label htmlFor="newsLetter" className="newsLetter">
                  Save this information for next time
                </label>
              </div>
            </form>
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
                    className="payNow"
                    onClick={async (e) => {
                      e.preventDefault();
                      const mailformat =
                        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
                      if (!email.current?.value) {
                        alert("Email field is required");
                      } else if (!email.current?.value.match(mailformat)) {
                        alert("Invalid email address");
                      } else if (!phone.current?.value) {
                        alert("Phone field is required");
                      } else if (!region.current?.value) {
                        alert("Region field is required");
                      } else if (!firstName.current?.value) {
                        alert("First Name field is required");
                      } else if (!lastName.current?.value) {
                        alert("Last Name field is required");
                      } else if (!apartment.current?.value) {
                        alert("Neighborhood field is required");
                      } else if (!city.current?.value) {
                        alert("City field is required");
                      } else {
                        setLoading(true);
                        await initializePayment(handleSuccess, handleClose);
                        setLoading(false);
                      }
                    }}
                  >
                    {loading ? (
                      <CircularProgress color="success" size={20} />
                    ) : (
                      "PAY NOW"
                    )}
                  </button>
                )}
              </PaystackConsumer>
            </div>
            <h3 className="orOption">OR</h3>
            <div
              className="cashOnDeliveryButton"
              onClick={handleCashOnDelivery}
            >
              <button className="cashButton">
                {loadingCashOnDelivery ? (
                  <CircularProgress color="success" size={15} />
                ) : (
                  "CASH ON DELIVERY"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      {redirecting && (
        <div className="redirecting">
          <CircularProgress color="success" />
        </div>
      )}
    </>
  );
}

export default CheckoutPage;
