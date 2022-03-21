export const productsReducer = (state, action) => {
  switch (action.type) {
    case "GET_PRODUCTS_START":
      return {
        products: [],
        getIsFetching: true,
        getError: false,
        getSuccess: false,
      };
    case "GET_PRODUCTS_SUCCESS":
      return {
        products: action.payload,
        getIsFetching: false,
        getError: false,
        getSuccess: true,
      };
    case "GET_PRODUCTS_FAILURE":
      return {
        products: [],
        getIsFetching: false,
        getError: true,
        getSuccess: false,
      };
    case "DELETE_PRODUCT_START":
      return {
        ...state,
        deleteIsFetching: true,
        deleteError: false,
        deleteSuccess: false,
      };

    case "DELETE_PRODUCT_SUCCESS":
      return {
        products: state.products.filter(
          (product) => product._id !== action.payload
        ),
        deleteIsFetching: false,
        deleteError: false,
        deleteSuccess: true,
      };
    case "DELETE_PRODUCT_FAILURE":
      return {
        ...state,
        deleteIsFetching: false,
        deleteError: true,
        deleteSuccess: false,
      };
    case "CREATE_PRODUCT_START":
      return {
        ...state,
        createIsFetching: true,
        createError: false,
        createSuccess: false,
      };
    case "CREATE_PRODUCT_SUCCESS":
      return {
        products: [...state.products, action.payload],
        createIsFetching: false,
        createError: false,
        createSuccess: true,
      };
    case "CREATE_PRODUCT_FAILURE":
      return {
        ...state,
        createIsFetching: false,
        createError: true,
        createSuccess: false,
      };

    case "UPDATE_PRODUCT_START":
      return {
        ...state,
        updateIsFetching: true,
        updateError: false,
        updateSuccess: false,
      };
    case "UPDATE_PRODUCT_SUCCESS":
      return {
        products: state.products.map((product) => {
          if (product._id === action.payload._id) {
            return action.payload;
          } else {
            return product;
          }
        }),
        updateIsFetching: false,
        updateError: false,
        updateSuccess: true,
      };
    case "UPDATE_PRODUCT_FAILURE":
      return {
        ...state,
        updateIsFetching: false,
        updateError: true,
        updateSuccess: false,
      };
    default:
      return { ...state };
  }
};
