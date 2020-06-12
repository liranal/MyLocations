/* eslint-disable no-unused-expressions */
import React from "react";
import { connect } from "react-redux";
import LocationListItem from "./LocationListItem";
import selectLocation from "../../selectors/locations";
const LocationList = (props) => (
  <div>
    <h1>Location List</h1>

    {props.locations.map((location) => {
      return <LocationListItem key={location.id} {...location} />;
    })}
  </div>
);

const mapStateToProps = (state) => {
  return {
    locations: selectLocation(state.locations, state.filters),
  };
};

export default connect(mapStateToProps)(LocationList);
