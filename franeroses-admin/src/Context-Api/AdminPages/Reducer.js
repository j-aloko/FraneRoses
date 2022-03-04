export const adminReducer = (state, action) => {
  switch (action.type) {
    case "RENDER_ADMIN_HOMEPAGE":
      return {
        home: true,
        users: false,
        products: false,
        order: false,
      };
    case "RENDER_ADMIN_USERSPAGE":
      return {
        home: false,
        users: true,
        products: false,
        order: false,
      };
    case "RENDER_ADMIN_PRODUCTSPAGE":
      return {
        home: false,
        users: false,
        products: true,
        order: false,
      };
    case "RENDER_ADMIN_ORDERPAGE":
      return {
        home: false,
        users: false,
        products: false,
        order: true,
      };
    default:
      return { ...state };
  }
};
