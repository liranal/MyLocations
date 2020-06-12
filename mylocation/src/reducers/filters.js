const filtersDefaultState = [
  {
    text: "",
    sortBy: "", //addedDate,alphabetic,grouped by category
  },
];
const filtersReducer = (state = filtersDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.text,
      };
    case "ABC_SORT_FILTER":
      return {
        ...state,
        sortBy: action.sortBy,
      };
    case "GROUP_BY_FILTER":
      return {
        ...state,
        sortBy: action.sortBy,
      };
    case "DATE_SORT_FILTER":
      return {
        ...state,
        sortBy: action.sortBy,
      };
    case "RESET_FILTER":
      return {
        ...state,
        sortBy: action.sortBy,
      };
    default:
      return state;
  }
};
export default filtersReducer;
