import {
  deleteCheckoutStart,
  deleteCheckoutSuccess,
  deleteCheckoutFailure,
  createCheckoutStart,
  createCheckoutSuccess,
  createCheckoutFailure,
} from "./../Context-Api/Checkout/Action";

//Create a new cart

export const createCheckout = async (dispatch, values) => {
  dispatch(createCheckoutStart());
  try {
    dispatch(createCheckoutSuccess(values));
  } catch (error) {
    dispatch(createCheckoutFailure());
  }
};

//delete cart

export const deleteCheckout = async (dispatch, productId) => {
  dispatch(deleteCheckoutStart());
  try {
    dispatch(deleteCheckoutSuccess(productId));
  } catch (error) {
    dispatch(deleteCheckoutFailure());
  }
};
