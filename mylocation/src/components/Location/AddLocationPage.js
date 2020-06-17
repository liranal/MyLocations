import React from "react";
import AddLocation from "./Locaition";
import { connect, useDispatch } from "react-redux";
import { addLocation } from "../../actions/locations";
import { addCategory } from "../../actions/category";
const AddLocationPage = (props) => {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Add Location</h1>
      <AddLocation
        editFlag="false"
        onSubmit={({ name, address, lat, lon, category }) => {
          dispatch(addLocation({ name, address, lat, lon, category }));
          dispatch(addCategory({ name: category }));
          props.history.push("/Location");
        }}
      />
    </div>
  );
};

export default AddLocationPage;
