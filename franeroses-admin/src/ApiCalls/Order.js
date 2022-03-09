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
  updateOrderStart,
  updateOrderSuccess,
  updateOrderFailure,
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

//get all orders
export const getAllOrders = async (dispatch) => {
  dispatch(getOrdersStart());
  try {
    const res = await axiosInstance.get("order");
    dispatch(
      getOrdersSuccess(
        res.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      )
    );
  } catch (error) {
    dispatch(getOrdersFailure());
  }
};

//Update Order

export const updateOrder = async (dispatch, id, value) => {
  dispatch(updateOrderStart());
  try {
    const res = await axiosInstance.put("order/" + id, value);
    dispatch(updateOrderSuccess(res.data));
  } catch (error) {
    dispatch(updateOrderFailure());
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
