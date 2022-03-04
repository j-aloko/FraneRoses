import { createContext, useReducer, useEffect } from "react";
import { authReducer } from "./Reducer";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isFetching: false,
  success: false,
  error: false,
};

export const authContext = createContext(initialState);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);
  return (
    <authContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        success: state.success,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </authContext.Provider>
  );
};
