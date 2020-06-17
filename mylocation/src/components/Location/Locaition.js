import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Button, FormControl } from "@material-ui/core";

const Location = (props) => {
  const [name, setName] = useState(props.name ? props.name : "");
  const [address, setAddress] = useState(props.address ? props.address : "");
  const [lat, setLat] = useState(props.lat ? props.lat : "");
  const [lon, setLon] = useState(props.lon ? props.lon : "");
  const [category, setCategory] = useState(
    props.category ? props.category : ""
  );
  const [error, setError] = useState();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!name || !address || !lat || !lon || !error || !category) {
      setError("Please fill all required fields");
    } else {
      setError("");
      console.log("Submit");
      props.onSubmit({
        name,
        address,
        lat,
        lon,
        category,
      });
    }
  };
  console.log(props.editFlag);
  if (props.editFlag == "false") {
    return (
      <FormControl>
        <TextField
          id="locationName"
          label="Location Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          autoFocus
          required
        />
        <TextField
          id="address"
          label="Address"
          value={address}
          onChange={(e) => {
            setAddress(e.target.value);
          }}
          required
        />
        <TextField
          type="number"
          id="Latitude"
          label="Latitude"
          value={lat}
          onChange={(e) => {
            setLat(e.target.value);
          }}
          required
        />
        <TextField
          type="number"
          id="Longitude"
          label="Longitude"
          value={lon}
          onChange={(e) => {
            setLon(e.target.value);
          }}
          required
        />
        <TextField
          id="Category"
          label="Category"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          required
        />
        <Button onClick={onSubmitHandler}>Add</Button>
      </FormControl>
    );
  } else {
    return (
      <FormControl>
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
        <Button onClick={onSubmitHandler}>Edit!</Button>
      </FormControl>
    );
  }
};
export default Location;
