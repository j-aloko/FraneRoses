import React, { useState, useContext } from "react";
import "./Cart.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import { cartContext } from "../../Context-Api/Cart/Context";
import { deleteCart } from "../../ApiCalls/Cart";

function Cart({ c }) {
  const [quantity, setQuantity] = useState(c?.quantity);
  const [total, setTotal] = useState(c?.amount);
  const price = c?.price;
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
        <span className="cartProductName">{c?.productName}</span>
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
  );
}

export default Cart;
