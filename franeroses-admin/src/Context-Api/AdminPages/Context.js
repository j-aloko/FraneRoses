import { createContext, useReducer } from "react";
import { adminReducer } from "./Reducer";

const AdminPageInitialState = {
  home: true,
  users: false,
  products: false,
  order: false,
};

export const adminPagesContext = createContext(AdminPageInitialState);

export const AdminPagesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(adminReducer, AdminPageInitialState);
  return (
    <adminPagesContext.Provider
      value={{
        home: state.home,
        users: state.users,
        products: state.products,
        order: state.order,
        dispatch,
      }}
    >
      {children}
    </adminPagesContext.Provider>
  );
};
