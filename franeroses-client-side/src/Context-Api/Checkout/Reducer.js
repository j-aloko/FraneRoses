export const checkoutReducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CHECKOUT_START":
      return {
        ...state,
        isFetching: false,
        error: false,
      };

    case "DELETE_CHECKOUT_SUCCESS":
      return {
        checkout: state.checkout.filter((c) => c.productId !== action.payload),
        isFetching: false,
        error: false,
      };
    case "DELETE_CHECKOUT_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case "CREATE_CHECKOUT_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "CREATE_CHECKOUT_SUCCESS":
      return {
        checkout: [...state.checkout, action.payload],
        isFetching: false,
        error: false,
      };
    case "CREATE_CHECKOUT_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return { ...state };
  }
};
