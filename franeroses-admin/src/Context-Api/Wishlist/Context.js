import { createContext, useReducer } from "react";
import { wishlistReducer } from "./Reducer";

const InitialState = {
  wishlist: [],
  isFetching: false,
  error: false,
};

export const wishlistContext = createContext(InitialState);

export const WishlistContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(wishlistReducer, InitialState);
  return (
    <wishlistContext.Provider
      value={{
        wishlist: state.wishlist,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </wishlistContext.Provider>
  );
};
