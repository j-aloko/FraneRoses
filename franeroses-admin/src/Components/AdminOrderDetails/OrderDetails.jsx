import "./OrderDetails.css";
import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { ordersContext } from "./../../Context-Api/Order/Context";
import moment from "moment";
import { updateOrder } from "./../../ApiCalls/Order";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";

function OrderDetails() {
  const [customerOrder, setCustomerOrder] = useState();
  const [deliveryStatus, setDeliveryStatus] = useState("");
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [loading, setLoading] = useState(false);
  const { orders } = useContext(ordersContext);
  const navigate = useNavigate();

  useEffect(() => {
    setCustomerOrder(orders.find((o) => o._id === path));
  }, [orders, path]);

  const handleUpdateStatus = async (e) => {
    e.preventDefault();
    setLoading(true);
    const value = {
      delivery: deliveryStatus,
    };
    await updateOrder(path, value);
    setLoading(false);
    navigate("/orders");
  };

  return (
    <div className="orderDetailsWrapper">
      <div className="orderDetailsLeft">
        <h2 className="orderId">OrderId #{customerOrder?._id}</h2>
        <span className="orderDate">
          Placed {moment(customerOrder?.createdAt).fromNow()}
        </span>
        <table>
          <tbody>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Size</th>
              <th>Quantity</th>
              <th className="totalHeader">Total</th>
            </tr>
          </tbody>
          {customerOrder?.cart.map((product, index) => (
            <tbody key={index}>
              <tr>
                <td>{product?.productName}</td>
                <td>{product?.price}</td>
                <td>{product?.size}</td>
                <td>{product?.quantity}</td>
                <td className="amountHeader">{product?.amount}</td>
              </tr>
            </tbody>
          ))}
        </table>
        <div className="orderTotals">
          <div className="subtotalWrapper">
            <span className="subtotal">Subtotal</span>
            <span className="subtotalAmt">{customerOrder?.subtotal}</span>
          </div>
          <div className="deliveryWrapper">
            <span className="delivery">Delivery Fee</span>
            <span className="deliveryAmt">{customerOrder?.deliveryFee}</span>
          </div>
          <div className="orderTotalAmtWrapper">
            <span className="orderTotalAmt">Total</span>
            <span className="orderTotalAmtFigure">{customerOrder?.total}</span>
          </div>
        </div>
        {customerOrder?.instruction && (
          <>
            <h3 className="instructionFromCustomer">
              Instructions From {customerOrder?.userInfo?.firstName}{" "}
              {customerOrder?.userInfo?.lastName}
            </h3>
            <span>{customerOrder?.instruction}</span>
          </>
        )}
      </div>
      <div className="orderDetailsRight">
        <div className="orderBillingAddress">
          <h3 className="orderDetailsRightTitle">Billing Address</h3>
          <div className="orderPymtStatusWrapper">
            <h3 className="orderPymtStatus">Payment status:</h3>
            <h4 className="orderPymtResponse">{customerOrder?.status}</h4>
          </div>
          <span className="nameOnOrder">
            {customerOrder?.userInfo?.firstName}{" "}
            {customerOrder?.userInfo?.lastName}
          </span>
          <span className="orderApartmentSuite">
            {customerOrder?.userInfo?.city} {customerOrder?.userInfo?.apartment}
          </span>
          <span className="orderRegion">{customerOrder?.userInfo?.region}</span>
        </div>
        <div className="orderShippingAddress">
          <h2 className="deliveryDetailsRightTitle">Delivery Address</h2>
          <div className="deliveryPymtStatusWrapper">
            <select
              className="changeFulfillmentStatus"
              onChange={(e) => setDeliveryStatus(e.target.value)}
            >
              <option>Change Delivery Status</option>
              <option value="delivered">Delivered</option>
              <option value="Pending">Pending</option>
            </select>
            <button
              className="deliveryStatusUpdate"
              onClick={handleUpdateStatus}
            >
              {loading ? (
                <CircularProgress
                  size={15}
                  color="success"
                  style={{ backgroundColor: "transparent" }}
                />
              ) : (
                "Update"
              )}
            </button>
          </div>
          <span className="nameOnOrder">
            {customerOrder?.userInfo?.firstName}{" "}
            {customerOrder?.userInfo?.lastName}
          </span>
          <span className="orderApartmentSuite">
            {customerOrder?.userInfo?.city} {customerOrder?.userInfo?.apartment}
          </span>
          <span className="orderRegion">{customerOrder?.userInfo?.region}</span>
          <span className="deliveryPhoneNumber">
            {customerOrder?.userInfo?.phone}
          </span>
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;
