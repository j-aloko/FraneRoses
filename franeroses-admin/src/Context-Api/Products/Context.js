import { createContext, useReducer } from "react";
import { productsReducer } from "./Reducer";

const InitialState = {
  products: [],
  getIsFetching: false,
  getError: false,
  getSuccess: false,
  createIsFetching: false,
  createError: false,
  createSuccess: false,
  updateIsFetching: false,
  updateError: false,
  updateSuccess: false,
  deleteIsFetching: false,
  deleteError: false,
  deleteSuccess: false,
};

export const productsContext = createContext(InitialState);

export const ProductsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productsReducer, InitialState);
  return (
    <productsContext.Provider
      value={{
        products: state.products,
        getIsFetching: state.getIsFetching,
        getError: state.getError,
        getSuccess: state.getSuccess,
        createIsFetching: state.createIsFetching,
        createError: state.createError,
        createSuccess: state.createSuccess,
        updateIsFetching: state.updateIsFetching,
        updateError: state.updateError,
        updateSuccess: state.updateSuccess,
        deleteIsFetching: state.deleteIsFetching,
        deleteError: state.deleteError,
        deleteSuccess: state.deleteSuccess,
        dispatch,
      }}
    >
      {children}
    </productsContext.Provider>
  );
};
