import React, { useContext, useEffect } from "react";
import "./Cart.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import { cartContext } from "../../Context-Api/Cart/Context";
import { deleteCart } from "../../ApiCalls/Cart";

function Cart({ c, quantity, setQuantity, total, setTotal, price, setPrice }) {
  const { dispatch } = useContext(cartContext);

  useEffect(() => {
    setQuantity(c?.quantity);
  }, [setQuantity, c?.quantity]);

  useEffect(() => {
    setTotal(c?.amount);
  }, [setTotal, c?.amount]);

  useEffect(() => {
    setPrice(c?.price);
  }, [setPrice, c?.price]);

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
              setTotal(total && total + (price && price * 1));
              setQuantity(quantity && quantity + 1);
            }}
          />
          <span className="cartProductCount">{quantity}</span>
          <RemoveIcon
            onClick={() => {
              total &&
                total > (price && price) &&
                setTotal(total && total - (price && price) * 1);
              quantity && quantity > 1 && setQuantity(quantity && quantity - 1);
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
