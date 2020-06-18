import React from "react";
import { connect, useDispatch } from "react-redux";
import TextField from "@material-ui/core/TextField";

import { setTextFilter } from "../../actions/filters";
const LocationListFilters = (props) => {
  const dispatch = useDispatch();
  return (
    <div className="barButtons">
      <TextField
        id="LocationSearch"
        label="Search Location"
        variant="filled"
        color="primary"
        type="text"
        onChange={(e) => {
          dispatch(setTextFilter(e.target.value));
        }}
      />
    </div>
  );
};

/*const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};
export default connect(mapStateToProps)(LocationListFilters);
*/
export default LocationListFilters;
