const defaultState = JSON.parse(localStorage.getItem("locations"));

const locationReducer = (state = defaultState, action) => {
  var arr = JSON.parse(localStorage.getItem("locations"));
  if (arr == null) {
    console.log("1 " + arr);
    arr = [];
    state = [];
  }

  switch (action.type) {
    case "ADD_LOCATION":
      arr.push(action.location);
      console.log("2 " + JSON.stringify(arr));
      localStorage.setItem("locations", JSON.stringify(arr));
      return [...state, action.location];
    case "REMOVE_LOCATION":
      arr = arr.filter(({ id }) => {
        return id !== action.id;
      });
      localStorage.setItem("locations", JSON.stringify(arr));
      return state.filter(({ id }) => {
        return id !== action.id;
      });
    case "EDIT_LOCATION":
      arr = arr.map((location) => {
        console.log("Check: " + JSON.stringify(location.id));
        console.log("Check: " + JSON.stringify(action));
        if (location.id === action.id) {
          return {
            ...location,
            ...action.updates,
          };
        } else {
          return location;
        }
      });
      localStorage.setItem("locations", JSON.stringify(arr));

      return state.map((location) => {
        if (location.id === action.id) {
          return {
            ...location,
            ...action.updates,
          };
        } else {
          return location;
        }
      });
    default:
      return state;
  }
};

export default locationReducer;
