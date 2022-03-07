import React, { useState, useEffect, useContext, useRef } from "react";
import "./SuccessPage.css";
import { useLocation } from "react-router-dom";
import { ordersContext } from "./../../Context-Api/Order/Context";
import html2pdf from "html2pdf-jspdf2";
import CircularProgress from "@mui/material/CircularProgress";

function SuccessPage() {
  const [customerOrder, setCustomerOrder] = useState({});
  const { orders } = useContext(ordersContext);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const email = location?.state;
  const htmlContent = useRef();

  useEffect(() => {
    setCustomerOrder(orders.find((o) => o?.email === email));
  }, [orders, email]);

  //Downloading a copy of this receipt

  const downloadReceipt = async (e) => {
    e.preventDefault();
    setLoading(true);
    await html2pdf()
      .from(htmlContent.current)
      .save(
        "Franeroses Order-receipt-" +
          new Date().getFullYear() +
          "-" +
          (new Date().getMonth() + 1) +
          "-" +
          new Date().getDate()
      );
    setLoading(false);
  };

  return (
    <>
      <div className="orderDetailsWrapper" ref={htmlContent}>
        <div className="orderDetailsLeft">
          <h1>Franeroses Ventures </h1>
          <h2>Order Receipt</h2>
          <h4 className="orderId">ID: #{customerOrder?._id}</h4>
          <span className="orderDate">
            Placed on{" "}
            {customerOrder?.createdAt &&
              new Date().getFullYear() +
                "-" +
                (new Date().getMonth() + 1) +
                "-" +
                new Date().getDate()}
          </span>
          <table>
            <tbody>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Size</th>
                <th>Quantity</th>
                <th className="amountHeader">Total</th>
              </tr>
            </tbody>
            {customerOrder?.cart?.map((product, index) => (
              <tbody key={index}>
                <tr>
                  <td>{product?.productName}</td>
                  <td>{product?.price}</td>
                  <td>{product?.size}</td>
                  <td>{product?.quantity}</td>
                  <td className="amountColumn">{product?.amount}</td>
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
              <span className="orderTotalAmtFigure">
                {customerOrder?.total}
              </span>
            </div>
          </div>
          {customerOrder?.instruction && (
            <>
              <h3 className="instructionFromCustomer">Instructions:</h3>
              <span>{customerOrder?.instruction}</span>
            </>
          )}
        </div>
        <div className="orderDetailsRight">
          <div className="orderBillingAddress">
            <h2 className="orderDetailsRightTitle">Delivery Information</h2>
            <div className="orderPymtStatusWrapper">
              <h3 className="orderPymtStatus">Payment status:</h3>
              <h4 className="orderPymtResponse">{customerOrder?.status}</h4>
            </div>
            <span className="nameOnOrder">
              {customerOrder?.userInfo?.firstName}{" "}
              {customerOrder?.userInfo?.lastName}
            </span>
            <span className="deliveryEmail">
              {customerOrder?.userInfo?.email}
            </span>
            <span className="deliveryPhone">
              {customerOrder?.userInfo?.phone}
            </span>
            <span className="orderApartmentSuite">
              {customerOrder?.userInfo?.city}{" "}
              {customerOrder?.userInfo?.apartment}
            </span>
            <span className="orderRegion">
              {customerOrder?.userInfo?.region}
            </span>
          </div>
          <div className="deliveryTime">
            <h2 className="estimatedDelivery">Estimated Delivery Time</h2>
            <span className="deliveryDays">Between 2-3 business days</span>
          </div>
        </div>
      </div>
      <div className="downloadOrderReceipt">
        <h3 className="downloadDesc">Download a copy of this receipt</h3>
        <button className="downloadReceipt" onClick={downloadReceipt}>
          {loading ? <CircularProgress color="secondary" /> : "Download"}
        </button>
      </div>
    </>
  );
}

export default SuccessPage;
