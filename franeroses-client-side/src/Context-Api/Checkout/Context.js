import { createContext, useReducer } from "react";
import { checkoutReducer } from "./Reducer";

const InitialState = {
  checkout: [],
  isFetching: false,
  error: false,
};

export const checkoutContext = createContext(InitialState);

export const CheckoutContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(checkoutReducer, InitialState);
  return (
    <checkoutContext.Provider
      value={{
        checkout: state.checkout,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </checkoutContext.Provider>
  );
};
