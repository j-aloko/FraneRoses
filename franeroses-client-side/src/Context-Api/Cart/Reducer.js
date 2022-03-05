export const cartReducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CART_START":
      return {
        ...state,
        isFetching: false,
        error: false,
      };

    case "DELETE_CART_SUCCESS":
      return {
        cart: state.cart.filter((c) => c.productId !== action.payload),
        isFetching: false,
        error: false,
      };
    case "DELETE_CART_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case "CREATE_CART_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "CREATE_CART_SUCCESS":
      return {
        cart: [...state.cart, action.payload],
        isFetching: false,
        error: false,
      };
    case "CREATE_CART_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return { ...state };
  }
};
