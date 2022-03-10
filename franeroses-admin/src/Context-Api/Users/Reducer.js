export const usersReducer = (state, action) => {
  switch (action.type) {
    case "GET_USERS_START":
      return {
        users: [],
        isFetching: true,
        error: false,
      };
    case "GET_USERS_SUCCESS":
      return {
        users: action.payload,
        isFetching: false,
        error: false,
      };
    case "GET_USERS_FAILURE":
      return {
        users: [],
        isFetching: false,
        error: true,
      };
    case "UPDATE_USERS_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "UPDATE_USERS_SUCCESS":
      return {
        users: state.users.map(
          (user) => user._id === action.payload._id && action.payload
        ),
        isFetching: false,
        error: false,
      };
    case "UPDATE_USERS_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case "DELETE_USER":
      return {
        users: state.users.filter((user) => user._id !== action.payload),
      };
    default:
      return {
        ...state,
      };
  }
};
