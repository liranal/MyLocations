import React from "react";
import AddLocation from "./Locaition";
import { connect } from "react-redux";
import { addLocation } from "../../actions/locations";
import { addCategory } from "../../actions/category";
const AddLocationPage = (props) => (
  <div>
    <h1>Add Location</h1>
    <AddLocation
      onSubmit={({ name, address, lat, lon, category }) => {
        props.dispatch(addLocation({ name, address, lat, lon, category }));
        props.dispatch(addCategory({ name: category }));
        props.history.push("/Location");
      }}
    />
  </div>
);

export default connect()(AddLocationPage);
