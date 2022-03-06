import React, { useContext } from "react";
import "./Cart.css";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import { cartContext } from "../../Context-Api/Cart/Context";
import { deleteCart } from "../../ApiCalls/Cart";

function Cart({ c }) {
  const { dispatch } = useContext(cartContext);

  //delete Cart Item

  const deleteCartItem = () => {
    deleteCart(dispatch, c?.productId);
  };

  return (
    <div className="cartProducts" key={c?.productId}>
      <div className="cartProductImg">
        <div className="removeCartProduct" onClick={deleteCartItem}>
          <CancelRoundedIcon />
        </div>
        <img src={c?.img[0]} alt="" className="cartImage" />
      </div>
      <div className="cartProductInfo">
        <h3 className="cartProductName">{c?.productName}</h3>
        <div className="cartProductCounter">
          <span className="numOfQtyTitle">Quantity:</span>
          <span className="cartProductCount">{c?.quantity}</span>
        </div>
        <div className="cartProductPrice">
          <span className="numOfPriceTitle">Price:</span>
          <span className="cartProductPriceAmt">GHS{c?.price}</span>
        </div>
        <span className="cartProductTotal">
          Total :
          <span className="cartProductTotalAmt">
            GHS
            {Math.round((c?.price * c?.quantity + Number.EPSILON) * 100) / 100}
          </span>
        </span>
      </div>
    </div>
  );
}

export default Cart;
