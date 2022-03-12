import { createContext, useReducer } from "react";
import { filterReducer } from "./Reducer";

const InitialState = {
  query: "",
};

export const filterContext = createContext(InitialState);

export const FilterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, InitialState);
  return (
    <filterContext.Provider
      value={{
        query: state.query,
        dispatch,
      }}
    >
      {children}
    </filterContext.Provider>
  );
};
