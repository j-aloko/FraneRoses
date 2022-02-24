import axiosInstance from "./../axios";
import {
  getProductsStart,
  getProductsSuccess,
  getProductsFailure,
  deleteProductStart,
  deleteProductSuccess,
  deleteProductFailure,
  createProductStart,
  createProductSuccess,
  createProductFailure,
  updateProductStart,
  updateProductSuccess,
  updateProductFailure,
} from "./../Context-Api/Products/Action";

//Create a new product

export const postProducts = async (dispatch, values) => {
  dispatch(createProductStart());
  try {
    const res = await axiosInstance.post("products", values);
    dispatch(createProductSuccess(res.data));
  } catch (error) {
    dispatch(createProductFailure());
  }
};

//get all Products

export const getProducts = async (dispatch, type, name) => {
  dispatch(getProductsStart());
  try {
    const res = await axiosInstance.get(`products?${type}=${name}`);
    dispatch(getProductsSuccess(res.data));
  } catch (error) {
    dispatch(getProductsFailure());
  }
};

//get single product
export const getProduct = async (dispatch, id) => {
  dispatch(getProductsStart());
  try {
    const res = await axiosInstance.get("products/" + id);
    dispatch(getProductsSuccess(res.data));
  } catch (error) {
    dispatch(getProductsFailure());
  }
};

//update Products

export const updateProducts = async (dispatch, id, values) => {
  dispatch(updateProductStart());
  try {
    const res = await axiosInstance.put("products/" + id, values);
    dispatch(updateProductSuccess(res.data));
  } catch (error) {
    dispatch(updateProductFailure());
  }
};

//delete product

export const deleteProduct = async (dispatch, id) => {
  dispatch(deleteProductStart());
  try {
    const res = await axiosInstance.delete("products/" + id);
    dispatch(deleteProductSuccess(res.data));
  } catch (error) {
    dispatch(deleteProductFailure());
  }
};
