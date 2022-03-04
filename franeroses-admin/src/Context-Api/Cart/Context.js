import { createContext, useReducer } from "react";
import { cartReducer } from "./Reducer";

const InitialState = {
  cart: [],
  isFetching: false,
  error: false,
};

export const cartContext = createContext(InitialState);

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, InitialState);
  return (
    <cartContext.Provider
      value={{
        cart: state.cart,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};
