import { createContext, useReducer } from "react";
import { usersReducer } from "./Reducer";

const initialState = {
  users: [],
  isFetching: false,
  error: false,
};

export const userContext = createContext(initialState);

export const UsersContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(usersReducer, initialState);

  return (
    <userContext.Provider
      value={{
        users: state.users,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </userContext.Provider>
  );
};
