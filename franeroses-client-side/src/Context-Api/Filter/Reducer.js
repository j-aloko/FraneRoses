export const filterReducer = (state, action) => {
  switch (action.type) {
    case "FILTER_NOW":
      return {
        query: action.payload,
      };

    default:
      return { ...state };
  }
};
