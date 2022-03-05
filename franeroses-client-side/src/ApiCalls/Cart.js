import axiosInstance from "./../axios";
import {
  getCartStart,
  getCartSuccess,
  getCartFailure,
  deleteCartStart,
  deleteCartSuccess,
  deleteCartFailure,
  createCartStart,
  createCartSuccess,
  createCartFailure,
  updateCartStart,
  updateCartSuccess,
  updateCartFailure,
} from "./../Context-Api/Cart/Action";

//Create a new cart

export const createCart = async (dispatch, values) => {
  dispatch(createCartStart());
  try {
    dispatch(createCartSuccess(values));
  } catch (error) {
    dispatch(createCartFailure());
  }
};

//get all cart

export const getCarts = async (dispatch) => {
  dispatch(getCartStart());
  try {
    const res = await axiosInstance.get("cart");
    dispatch(getCartSuccess(res.data));
  } catch (error) {
    dispatch(getCartFailure());
  }
};

//get a single users cart
export const getCart = async (dispatch, id) => {
  dispatch(getCartStart());
  try {
    const res = await axiosInstance.get("cart/find/" + id);
    dispatch(getCartSuccess(res.data));
  } catch (error) {
    dispatch(getCartFailure());
  }
};

//update cart

export const updateCart = async (dispatch, id, values) => {
  dispatch(updateCartStart());
  try {
    const res = await axiosInstance.put("cart/" + id, values);
    dispatch(updateCartSuccess(res.data));
  } catch (error) {
    dispatch(updateCartFailure());
  }
};

//delete cart

export const deleteCart = async (dispatch, id) => {
  dispatch(deleteCartStart());
  try {
    const res = await axiosInstance.delete("cart/" + id);
    dispatch(deleteCartSuccess(res.data));
  } catch (error) {
    dispatch(deleteCartFailure());
  }
};
