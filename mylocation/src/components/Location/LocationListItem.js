import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { removeLocation } from "../../actions/locations";
const LocationListItem = ({
  dispatch,
  id,
  name,
  address,
  lat,
  lon,
  category,
}) => (
  <div>
    <NavLink to={`Location/edit/${id}`}>
      <h3>name: {name}</h3>
    </NavLink>
    <p>
      address:{address} lat: {lat} lon :{lon}
    </p>
    <p>category : {category}</p>
    <span
      onClick={(e) => {
        dispatch(removeLocation({ id }));
      }}
    >
      X
    </span>
  </div>
);

export default connect()(LocationListItem);
