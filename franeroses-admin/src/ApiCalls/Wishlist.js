import axiosInstance from "./../axios";
import {
  getWishlistsStart,
  getWishlistsSuccess,
  getWishlistsFailure,
  deleteWishlistStart,
  deleteWishlistSuccess,
  deleteWishlistFailure,
  createWishlistStart,
  createWishlistSuccess,
  createWishlistFailure,
} from "./../Context-Api/Wishlist/Action";

//Create a new Wishlist

export const createWishList = async (dispatch, values) => {
  dispatch(createWishlistStart());
  try {
    const res = await axiosInstance.post("wishlist", values);
    dispatch(createWishlistSuccess(res.data));
  } catch (error) {
    dispatch(createWishlistFailure());
  }
};

//get a single users Wishlist
export const getWishList = async (dispatch, id) => {
  dispatch(getWishlistsStart());
  try {
    const res = await axiosInstance.get("wishlist/find/" + id);
    dispatch(getWishlistsSuccess(res.data));
  } catch (error) {
    dispatch(getWishlistsFailure());
  }
};

//delete Wishlist

export const deleteWishList = async (dispatch, id) => {
  dispatch(deleteWishlistStart());
  try {
    const res = await axiosInstance.delete("wishlist/" + id);
    dispatch(deleteWishlistSuccess(res.data));
  } catch (error) {
    dispatch(deleteWishlistFailure());
  }
};
