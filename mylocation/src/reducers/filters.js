const filtersDefaultState = [
  {
    text: "",
  },
];
const filtersReducer = (state = filtersDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.text,
      };
    case "RESET_FILTER":
      return {
        ...state,
      };
    default:
      return state;
  }
};
export default filtersReducer;
