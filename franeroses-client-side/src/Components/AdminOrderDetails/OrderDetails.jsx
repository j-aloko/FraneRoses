import "./OrderDetails.css";
import React, { useState, useEffect } from "react";
import { order } from "../../Data";
import { useLocation } from "react-router-dom";

function OrderDetails() {
  const [customerOrder, setCustomerOrder] = useState();
  const location = useLocation();
  const path = parseInt(location.pathname.split("/")[2]);

  useEffect(() => {
    setCustomerOrder(order.find((o) => o.id === path));
  }, [path]);

  return (
    <div className="orderDetailsWrapper">
      <div className="orderDetailsLeft">
        <h1 className="orderId">Order #122336</h1>
        <span className="orderDate">Placed on feb 4,2022 9:00AM</span>
        <table>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Size</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
          {customerOrder?.products.map((product, index) => (
            <tr key={index}>
              <td>{product.productName}</td>
              <td>{product.price}</td>
              <td>{product.size}</td>
              <td>{product.quantity}</td>
              <td>{product.amount}</td>
            </tr>
          ))}
        </table>
        <div className="orderTotals">
          <div className="subtotalWrapper">
            <span className="subtotal">Subtotal</span>
            <span className="subtotalAmt">{customerOrder?.subtotal}</span>
          </div>
          <div className="deliveryWrapper">
            <span className="delivery">Delivery Fee</span>
            <span className="deliveryAmt">{customerOrder?.delivery}</span>
          </div>
          <div className="orderTotalAmtWrapper">
            <span className="orderTotalAmt">Total</span>
            <span className="orderTotalAmtFigure">{customerOrder?.total}</span>
          </div>
        </div>
        {customerOrder?.instruction && (
          <>
            <h3 className="instructionFromCustomer">
              Instructions From {customerOrder.fullName}
            </h3>
            <span>{customerOrder?.instruction}</span>
          </>
        )}
      </div>
      <div className="orderDetailsRight">
        <div className="orderBillingAddress">
          <h1 className="orderDetailsRightTitle">Billing Address</h1>
          <div className="orderPymtStatusWrapper">
            <h3 className="orderPymtStatus">Payment status:</h3>
            <h4 className="orderPymtResponse">Paid</h4>
          </div>
          <span className="nameOnOrder">{customerOrder?.fullName}</span>
          <span className="orderApartmentSuite">
            {customerOrder?.city} {customerOrder?.apartmentSuite}
          </span>
          <span className="orderRegion">{customerOrder?.region}</span>
        </div>
        <div className="orderShippingAddress">
          <h1 className="deliveryDetailsRightTitle">Delivery Address</h1>
          <div className="deliveryPymtStatusWrapper">
            <select className="changeFulfillmentStatus">
              <option>Change Fulfillment Status</option>
              <option value="Fulfilled">Fulfilled</option>
              <option value="Pending">Pending</option>
            </select>
            <button className="deliveryStatusUpdate">Update</button>
          </div>
          <span className="nameOnOrder">{customerOrder?.fullName}</span>
          <span className="orderApartmentSuite">
            {customerOrder?.city} {customerOrder?.apartmentSuite}
          </span>
          <span className="orderRegion">{customerOrder?.region}</span>
          <span className="deliveryPhoneNumber">{customerOrder?.phone}</span>
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;
