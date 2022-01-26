export const pageReducer = (state, action) => {
  switch (action.type) {
    case "RENDER_HOME_PAGE":
      return {
        homePage: true,
        categories: false,
        chocolate: false,
        blog: false,
      };
    case "RENDER_CATEGORIES_PAGE":
      return {
        homePage: false,
        categories: true,
        chocolate: false,
        blog: false,
      };
    case "RENDER_CHOCOLATE_PAGE":
      return {
        homePage: false,
        categories: false,
        chocolate: true,
        blog: false,
      };
    case "RENDER_BLOG_PAGE":
      return {
        homePage: false,
        categories: false,
        chocolate: false,
        blog: true,
      };
    case "RENDER_ADMIN_PAGE":
      return {
        homePage: false,
        categories: false,
        chocolate: false,
        blog: false,
        admin: true,
      };
    default:
      return { ...state };
  }
};
