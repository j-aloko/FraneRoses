//DELETE CHECKOUT

export const deleteCheckoutStart = () => ({
  type: "DELETE_CHECKOUT_START",
});

export const deleteCheckoutSuccess = (productId) => ({
  type: "DELETE_CHECKOUT_SUCCESS",
  payload: productId,
});

export const deleteCheckoutFailure = () => ({
  type: "DELETE_CHECKOUT_FAILURE",
});

//CREATE CHECKOUT

export const createCheckoutStart = () => ({
  type: "CREATE_CHECKOUT_START",
});

export const createCheckoutSuccess = (cart) => ({
  type: "CREATE_CHECKOUT_SUCCESS",
  payload: cart,
});

export const createCheckoutFailure = () => ({
  type: "CREATE_CHECKOUT_FAILURE",
});
