import React from "react";
import { connect, useDispatch } from "react-redux";
import { setTextFilter } from "../../actions/filters";
import TextField from "@material-ui/core/TextField";

const CategoryListFilters = (props) => {
  const dispatch = useDispatch();
  return (
    <div className="barButtons">
      <TextField
        id="CategorySearch"
        label="Search Category"
        variant="filled"
        color="primary"
        onChange={(e) => {
          dispatch(setTextFilter(e.target.value));
        }}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};
export default connect(mapStateToProps)(CategoryListFilters);
