export const productsReducer = (state, action) => {
  switch (action.type) {
    case "GET_PRODUCTS_START":
      return {
        products: [],
        isFetching: true,
        error: false,
        success: false,
      };
    case "GET_PRODUCTS_SUCCESS":
      return {
        products: action.payload,
        isFetching: false,
        error: false,
        success: true,
      };
    case "GET_PRODUCTS_FAILURE":
      return {
        products: [],
        isFetching: false,
        error: true,
        success: false,
      };
    case "DELETE_PRODUCT_START":
      return {
        ...state,
        isFetching: false,
        error: false,
        success: false,
      };

    case "DELETE_PRODUCT_SUCCESS":
      return {
        products: state.products.filter(
          (product) => product._id !== action.payload
        ),
        isFetching: false,
        error: false,
        success: true,
      };
    case "DELETE_PRODUCT_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
        success: false,
      };
    case "CREATE_PRODUCT_START":
      return {
        ...state,
        isFetching: true,
        error: false,
        success: false,
      };
    case "CREATE_PRODUCT_SUCCESS":
      return {
        products: [...state.products, action.payload],
        isFetching: false,
        error: false,
        success: true,
      };
    case "CREATE_PRODUCT_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
        success: false,
      };

    case "UPDATE_PRODUCT_START":
      return {
        ...state,
        isFetching: true,
        error: false,
        success: false,
      };
    case "UPDATE_PRODUCT_SUCCESS":
      return {
        products: state.products.map(
          (product) => product._id === action.payload._id && action.payload
        ),
        isFetching: false,
        error: false,
        success: true,
      };
    case "UPDATE_PRODUCT_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
        success: false,
      };
    default:
      return { ...state };
  }
};
