import React from "react";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";

import {
  setTextFilter,
  filterABC,
  filterByGroup,
  filterByUngroup,
} from "../../actions/filters";
const LocationListFilters = (props) => (
  <div className="barButtons">
    <TextField
      id="LocationSearch"
      label="Search Location"
      variant="filled"
      color="primary"
      type="text"
      onChange={(e) => {
        props.dispatch(setTextFilter(e.target.value));
      }}
    />
  </div>
);

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};
export default connect(mapStateToProps)(LocationListFilters);
