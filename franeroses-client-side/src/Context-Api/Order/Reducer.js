export const ordersReducer = (state, action) => {
  switch (action.type) {
    case "GET_ORDERS_START":
      return {
        orders: [],
        isFetching: true,
        error: false,
      };
    case "GET_ORDERS_SUCCESS":
      return {
        orders: action.payload,
        isFetching: false,
        error: false,
      };
    case "GET_ORDERS_FAILURE":
      return {
        orders: [],
        isFetching: false,
        error: true,
      };
    case "DELETE_ORDER_START":
      return {
        ...state,
        isFetching: false,
        error: false,
      };

    case "DELETE_ORDER_SUCCESS":
      return {
        orders: state.orders.filter((order) => order._id !== action.payload),
        isFetching: false,
        error: false,
      };
    case "DELETE_ORDER_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case "CREATE_ORDER_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "CREATE_ORDER_SUCCESS":
      return {
        orders: [...state.orders, action.payload],
        isFetching: false,
        error: false,
      };
    case "CREATE_ORDER_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };

    case "UPDATE_ORDER_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "UPDATE_ORDER_SUCCESS":
      return {
        orders: state.orders.map(
          (order) => order._id === action.payload._id && action.payload
        ),
        isFetching: false,
        error: false,
      };
    case "UPDATE_ORDER_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return { ...state };
  }
};
