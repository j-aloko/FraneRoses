export const wishlistReducer = (state, action) => {
  switch (action.type) {
    case "GET_WISHLISTS_START":
      return {
        wishlist: [],
        isFetching: true,
        error: false,
      };
    case "GET_WISHLISTS_SUCCESS":
      return {
        wishlist: action.payload,
        isFetching: false,
        error: false,
      };
    case "GET_WISHLISTS_FAILURE":
      return {
        wishlist: [],
        isFetching: false,
        error: true,
      };
    case "DELETE_WISHLIST_START":
      return {
        ...state,
        isFetching: false,
        error: false,
      };

    case "DELETE_WISHLIST_SUCCESS":
      return {
        wishlist: state.wishlist.filter((w) => w._id !== action.payload),
        isFetching: false,
        error: false,
      };
    case "DELETE_WISHLIST_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case "CREATE_WISHLIST_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "CREATE_WISHLIST_SUCCESS":
      return {
        wishlist: [...state.wishlist, action.payload],
        isFetching: false,
        error: false,
      };
    case "CREATE_WISHLIST_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return { ...state };
  }
};
