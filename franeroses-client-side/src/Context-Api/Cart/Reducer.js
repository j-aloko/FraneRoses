export const cartReducer = (state, action) => {
  switch (action.type) {
    case "GET_CART_START":
      return {
        cart: [],
        isFetching: true,
        error: false,
      };
    case "GET_CART_SUCCESS":
      return {
        cart: action.payload,
        isFetching: false,
        error: false,
      };
    case "GET_CART_FAILURE":
      return {
        cart: [],
        isFetching: false,
        error: true,
      };
    case "DELETE_CART_START":
      return {
        ...state,
        isFetching: false,
        error: false,
      };

    case "DELETE_CART_SUCCESS":
      return {
        cart: state.cart.filter((c) => c._id !== action.payload),
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

    case "UPDATE_CART_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "UPDATE_CART_SUCCESS":
      return {
        cart: state.cart.map(
          (c) => clearInterval._id === action.payload._id && action.payload
        ),
        isFetching: false,
        error: false,
      };
    case "UPDATE_CART_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return { ...state };
  }
};
