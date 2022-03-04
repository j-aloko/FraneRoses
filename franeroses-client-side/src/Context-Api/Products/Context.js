import { createContext, useReducer } from "react";
import { productsReducer } from "./Reducer";

const InitialState = {
  products: [],
  isFetching: false,
  error: false,
  success: false,
};

export const productsContext = createContext(InitialState);

export const ProductsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productsReducer, InitialState);
  return (
    <productsContext.Provider
      value={{
        products: state.products,
        isFetching: state.isFetching,
        error: state.error,
        success: state.success,
        dispatch,
      }}
    >
      {children}
    </productsContext.Provider>
  );
};
