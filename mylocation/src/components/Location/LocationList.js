/* eslint-disable no-unused-expressions */
import React from "react";
import { connect, useSelector } from "react-redux";
import LocationListItem from "./LocationListItem";
import selectLocation from "../../selectors/locations";
import { List } from "@material-ui/core";
const LocationList = (props) => {
  const locations = useSelector((state) =>
    selectLocation(state.locations, state.filters)
  );

  return (
    <div>
      <h1>Location List</h1>
      <List>
        {locations.map((location) => {
          return <LocationListItem key={location.id} {...location} />;
        })}
      </List>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    locations: selectLocation(state.locations, state.filters),
  };
};

export default connect(mapStateToProps)(LocationList);
