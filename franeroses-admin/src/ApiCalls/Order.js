import axiosInstance from "./../axios";
import {
  getOrdersStart,
  getOrdersSuccess,
  getOrdersFailure,
  deleteOrderStart,
  deleteOrderSuccess,
  deleteOrderFailure,
  createOrderStart,
  createOrderSuccess,
  createOrderFailure,
} from "./../Context-Api/Order/Action";

//Create a new order

export const createOrder = async (dispatch, values) => {
  dispatch(createOrderStart());
  try {
    const res = await axiosInstance.post("order", values);
    dispatch(createOrderSuccess(res.data));
  } catch (error) {
    dispatch(createOrderFailure());
  }
};

//get a single users order
export const getOrder = async (dispatch, id) => {
  dispatch(getOrdersStart());
  try {
    const res = await axiosInstance.get("order/find/" + id);
    dispatch(getOrdersSuccess(res.data));
  } catch (error) {
    dispatch(getOrdersFailure());
  }
};

//delete Order

export const deleteOrder = async (dispatch, id) => {
  dispatch(deleteOrderStart());
  try {
    const res = await axiosInstance.delete("order/" + id);
    dispatch(deleteOrderSuccess(res.data));
  } catch (error) {
    dispatch(deleteOrderFailure());
  }
};
