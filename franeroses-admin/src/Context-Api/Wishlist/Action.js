//GET WISHLISTS
export const getWishlistsStart = () => ({
  type: "GET_WISHLISTS_START",
});

export const getWishlistsSuccess = (wishlists) => ({
  type: "GET_WISHLISTS_SUCCESS",
  payload: wishlists,
});

export const getWishlistsFailure = () => ({
  type: "GET_WISHLISTS_FAILURE",
});

//DELETE WISHLIST

export const deleteWishlistStart = () => ({
  type: "DELETE_WISHLIST_START",
});

export const deleteWishlistSuccess = (id) => ({
  type: "DELETE_WISHLIST_SUCCESS",
  payload: id,
});

export const deleteWishlistFailure = () => ({
  type: "DELETE_WISHLIST_FAILURE",
});

//CREATE WISHLIST

export const createWishlistStart = () => ({
  type: "CREATE_WISHLIST_START",
});

export const createWishlistSuccess = (wishlist) => ({
  type: "CREATE_WISHLIST_SUCCESS",
  payload: wishlist,
});

export const createWishlistFailure = () => ({
  type: "CREATE_WISHLIST_FAILURE",
});
