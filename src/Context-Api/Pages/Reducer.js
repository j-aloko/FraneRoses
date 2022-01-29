export const pageReducer = (state, action) => {
  switch (action.type) {
    case "RENDER_HOME_PAGE":
      return {
        homePage: true,
        products: false,
        blog: false,
        admin: false,
      };
    case "RENDER_PRODUCTS_PAGE":
      return {
        homePage: false,
        products: true,
        blog: false,
        admin: false,
      };
    case "RENDER_BLOG_PAGE":
      return {
        homePage: false,
        products: false,
        blog: true,
        admin: false,
      };
    case "RENDER_ADMIN_PAGE":
      return {
        homePage: false,
        products: false,
        blog: false,
        admin: true,
      };
    case "RENDER_DISPLAY_NAME":
      return {
        homePage: false,
        products: false,
        blog: false,
        admin: false,
      };
    default:
      return { ...state };
  }
};
