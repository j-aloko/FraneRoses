//GET ORDERS
export const getOrdersStart = () => ({
  type: "GET_ORDERS_START",
});

export const getOrdersSuccess = (orders) => ({
  type: "GET_ORDERS_SUCCESS",
  payload: orders,
});

export const getOrdersFailure = () => ({
  type: "GET_ORDERS_FAILURE",
});

//DELETE ORDER

export const deleteOrderStart = () => ({
  type: "DELETE_ORDER_START",
});

export const deleteOrderSuccess = (id) => ({
  type: "DELETE_ORDER_SUCCESS",
  payload: id,
});

export const deleteOrderFailure = () => ({
  type: "DELETE_ORDER_FAILURE",
});

//CREATE ORDER

export const createOrderStart = () => ({
  type: "CREATE_ORDER_START",
});

export const createOrderSuccess = (order) => ({
  type: "CREATE_ORDER_SUCCESS",
  payload: order,
});

export const createOrderFailure = () => ({
  type: "CREATE_ORDER_FAILURE",
});

//UPDATE ORDER

export const updateOrderStart = () => ({
  type: "UPDATE_ORDER_START",
});

export const updateOrderSuccess = (order) => ({
  type: "UPDATE_ORDER_SUCCESS",
  payload: order,
});

export const updateOrderFailure = () => ({
  type: "UPDATE_ORDER_FAILURE",
});
