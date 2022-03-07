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

//DELETE ALL CART
export const deleteAllCartStart = () => ({
  type: "DELETE_ALLCART_START",
});

//DELETE ITEM IN CART

export const deleteCartStart = () => ({
  type: "DELETE_CART_START",
});

export const deleteCartSuccess = (productId) => ({
  type: "DELETE_CART_SUCCESS",
  payload: productId,
});

export const deleteCartFailure = () => ({
  type: "DELETE_CART_FAILURE",
});
