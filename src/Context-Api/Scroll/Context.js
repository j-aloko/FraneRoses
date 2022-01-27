import { createContext } from "react";
import { useReducer } from "react";
import { scrollReducer } from "./Reducer";

const scrollInitialState = {
  scroll: false,
};

export const ScrollContext = createContext(scrollInitialState);

export const ScrollContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(scrollReducer, scrollInitialState);
  return (
    <ScrollContext.Provider value={{ scroll: state.scroll, dispatch }}>
      {children}
    </ScrollContext.Provider>
  );
};
