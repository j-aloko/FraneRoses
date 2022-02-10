import { createContext, useReducer } from "react";
import { ordersReducer } from "./Reducer";

const InitialState = {
  orders: [],
  isFetching: false,
  error: false,
};

export const ordersContext = createContext(InitialState);

export const OrdersContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ordersReducer, InitialState);
  return (
    <ordersContext.Provider
      value={{
        orders: state.orders,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </ordersContext.Provider>
  );
};
