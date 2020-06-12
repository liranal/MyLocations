const defaultState = JSON.parse(localStorage.getItem("categories"));

const categoryReducer = (state = defaultState, action) => {
  var arr = JSON.parse(localStorage.getItem("categories"));
  if (arr == null) {
    arr = [];
    state = [];
  }
  switch (action.type) {
    case "ADD_CATEGORY":
      arr.push(action.category);
      localStorage.setItem("categories", JSON.stringify(arr));
      return [...state, action.category];
    case "REMOVE_CATEGORY":
      arr = arr.filter(({ id }) => {
        return id !== action.id;
      });
      localStorage.setItem("categories", JSON.stringify(arr));
      return state.filter(({ id }) => {
        return id !== action.id;
      });
    case "EDIT_CATEGORY":
      arr = arr.map((category) => {
        if (category.id === action.id) {
          return {
            ...category,
            ...action.updates,
          };
        } else {
          return category;
        }
      });
      localStorage.setItem("categories", JSON.stringify(arr));

      return state.map((category) => {
        if (category.id === action.id) {
          return {
            ...category,
            ...action.updates,
          };
        } else {
          return category;
        }
      });
    default:
      return state;
  }
};

export default categoryReducer;
