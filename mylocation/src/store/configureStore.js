import { createStore, combineReducers } from "redux";
import locationReducer from "../reducers/locations";
import filtersReducer from "../reducers/filters";
import categoryReducer from "../reducers/category";

/* Create Reducers, combine them and store them */
export default () => {
  const store = createStore(
    combineReducers({
      locations: locationReducer,
      categories: categoryReducer,
      filters: filtersReducer,
    })
  );
  return store;
};
