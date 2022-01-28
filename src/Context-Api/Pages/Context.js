import { createContext, useReducer } from "react";
import { pageReducer } from "./Reducer";

const pageInitialState = {
  homePage: false,
  products: false,
  blog: false,
  admin: false,
};

export const PagesContext = createContext(pageInitialState);

export const PagesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(pageReducer, pageInitialState);
  return (
    <PagesContext.Provider
      value={{
        homePage: state.homePage,
        products: state.products,
        blog: state.blog,
        admin: state.admin,
        dispatch,
      }}
    >
      {children}
    </PagesContext.Provider>
  );
};
