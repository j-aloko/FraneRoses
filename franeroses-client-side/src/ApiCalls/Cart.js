import {
  deleteCartStart,
  deleteCartSuccess,
  deleteCartFailure,
  createCartStart,
  createCartSuccess,
  createCartFailure,
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

//delete cart

export const deleteCart = async (dispatch, productId) => {
  dispatch(deleteCartStart());
  try {
    dispatch(deleteCartSuccess(productId));
  } catch (error) {
    dispatch(deleteCartFailure());
  }
};
