import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";

const Location = ({ location, editFlag = false, onSubmit }) => {
  const [name, setName] = useState(location ? location.name : "");
  const [address, setAddress] = useState(location ? location.address : "");
  const [lat, setLat] = useState(location ? location.lat : "");
  const [lon, setLon] = useState(location ? location.lon : "");
  const [category, setCategory] = useState(location ? location.category : "");
  const [error, setError] = useState();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!name || !address || !lat || !lon || !error || !category) {
      setError("Please fill all required fields");
    } else {
      setError("");
      onSubmit({
        name,
        address,
        lat,
        lon,
        category,
      });
    }
  };

  if (editFlag === false) {
    return (
      <form onSubmit={onSubmitHandler}>
        <TextField
          id="locationName"
          label="Location Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
          autoFocus
          required
        />
        <TextField
          id="address"
          label="Address"
          onChange={(e) => {
            setAddress(e.target.value);
          }}
          required
        />
        <TextField
          type="number"
          id="Latitude"
          label="Latitude"
          onChange={(e) => {
            setLat(e.target.value);
          }}
          required
        />
        <TextField
          type="number"
          id="Longitude"
          label="Longitude"
          onChange={(e) => {
            setLon(e.target.value);
          }}
          required
        />
        <TextField
          id="Category"
          label="Category"
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          required
        />
        <button>Add</button>
      </form>
    );
  } else {
    return (
      <form onSubmit={onSubmitHandler}>
        <TextField
          id="EditableLocation"
          label="Location Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
          autoFocus
          required
        />
        <TextField
          id="Address"
          label="Address"
          onChange={(e) => {
            setAddress(e.target.value);
          }}
          value={address}
          required
        />
        <TextField
          type="number"
          id="EditLat"
          label="Latitude"
          value={lat}
          onChange={(e) => {
            setLat(e.target.value);
          }}
          required
        />
        <TextField
          type="number"
          id="EditLongitude"
          label="Longitude"
          value={lon}
          onChange={(e) => {
            setLon(e.target.value);
          }}
          required
        />
        <button>Edit!</button>
      </form>
    );
  }
};
export default Location;
