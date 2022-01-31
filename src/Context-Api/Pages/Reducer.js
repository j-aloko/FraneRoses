export const pageReducer = (state, action) => {
  switch (action.type) {
    case "RENDER_HOME_PAGE":
      return {
        homePage: true,
        products: false,
        blog: false,
        admin: false,
        delivery: false,
        privacy: false,
        terms: false,
      };
    case "RENDER_PRODUCTS_PAGE":
      return {
        homePage: false,
        products: true,
        blog: false,
        admin: false,
        delivery: false,
        privacy: false,
        terms: false,
      };
    case "RENDER_BLOG_PAGE":
      return {
        homePage: false,
        products: false,
        blog: true,
        admin: false,
        delivery: false,
        privacy: false,
        terms: false,
      };
    case "RENDER_DELIVERY_PAGE":
      return {
        homePage: false,
        products: false,
        blog: false,
        admin: false,
        delivery: true,
        privacy: false,
        terms: false,
      };
    case "RENDER_PRIVACY_PAGE":
      return {
        homePage: false,
        products: false,
        blog: false,
        admin: false,
        delivery: false,
        privacy: true,
        terms: false,
      };
    case "RENDER_TERMS_PAGE":
      return {
        homePage: false,
        products: false,
        blog: false,
        admin: false,
        delivery: false,
        privacy: false,
        terms: true,
      };
    case "RENDER_DISPLAY_NAME":
      return {
        homePage: false,
        products: false,
        blog: false,
        admin: false,
        delivery: false,
        privacy: false,
        terms: false,
      };

    default:
      return { ...state };
  }
};
