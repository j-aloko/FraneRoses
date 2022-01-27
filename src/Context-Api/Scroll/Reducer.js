export const scrollReducer = (state, action) => {
  switch (action.type) {
    case "SCROLL_START":
      return {
        scroll: true,
      };
    default:
      return { ...state };
  }
};
