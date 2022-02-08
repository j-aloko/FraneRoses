export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        isFetching: true,
        success: false,
        error: false,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        isFetching: false,
        success: true,
        error: false,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        isFetching: false,
        success: false,
        error: true,
      };
    case "LOGOUT":
      return {
        user: null,
        isFetching: false,
        success: false,
        error: false,
      };
    default:
      return { ...state };
  }
};
