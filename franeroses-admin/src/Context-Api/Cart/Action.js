//GET CART
export const getCartStart = () => ({
  type: "GET_CART_START",
});

export const getCartSuccess = (cart) => ({
  type: "GET_CART_SUCCESS",
  payload: cart,
});

export const getCartFailure = () => ({
  type: "GET_CART_FAILURE",
});

//DELETE CART

export const deleteCartStart = () => ({
  type: "DELETE_CART_START",
});

export const deleteCartSuccess = (id) => ({
  type: "DELETE_CART_SUCCESS",
  payload: id,
});

export const deleteCartFailure = () => ({
  type: "DELETE_CART_FAILURE",
});

//CREATE CART

export const createCartStart = () => ({
  type: "CREATE_CART_START",
});

export const createCartSuccess = (cart) => ({
  type: "CREATE_CART_SUCCESS",
  payload: cart,
});

export const createCartFailure = () => ({
  type: "CREATE_CART_FAILURE",
});

//UPDATE CART

export const updateCartStart = () => ({
  type: "UPDATE_CART_START",
});

export const updateCartSuccess = (cart) => ({
  type: "UPDATE_CART_SUCCESS",
  payload: cart,
});

export const updateCartFailure = () => ({
  type: "UPDATE_CART_FAILURE",
});
