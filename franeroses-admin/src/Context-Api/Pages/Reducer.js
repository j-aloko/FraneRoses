export const pageReducer = (state, action) => {
  switch (action.type) {
    case "RENDER_DASHBOARD":
      return {
        dashboard: true,
        users: false,
        products: false,
        orders: false,
      };
    case "RENDER_USERS_PAGE":
      return {
        dashboard: false,
        users: true,
        products: false,
        orders: false,
      };
    case "RENDER_PRODUCTS_PAGE":
      return {
        dashboard: false,
        users: false,
        products: true,
        orders: false,
      };
    case "RENDER_ORDERS_PAGE":
      return {
        dashboard: false,
        users: false,
        products: false,
        orders: true,
      };
    default:
      return { ...state };
  }
};
