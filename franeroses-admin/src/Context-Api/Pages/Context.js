import { createContext, useReducer } from "react";
import { pageReducer } from "./Reducer";

const pageInitialState = {
  dashboard: false,
  users: false,
  products: false,
  orders: false,
};

export const PagesContext = createContext(pageInitialState);

export const PagesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(pageReducer, pageInitialState);
  return (
    <PagesContext.Provider
      value={{
        dashboard: state.dashboard,
        users: state.users,
        products: state.products,
        orders: state.orders,
        dispatch,
      }}
    >
      {children}
    </PagesContext.Provider>
  );
};
