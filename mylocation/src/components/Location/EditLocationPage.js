import React from "react";
import { connect } from "react-redux";
import Location from "./Locaition";
import { removeLocation, editLocation } from "../../actions/locations";
import { Button } from "@material-ui/core";
const EditLocationPage = (props) => {
  const onSubmit = (location) => {
    console.log(location);
    props.editLocation(props.location.id, location);
    props.history.push("/Location");
  };
  const onRemove = () => {
    props.removeLocation({ id: props.location.id });
    props.history.push("/Location");
  };

  return (
    <div>
      <h1>Edit Location</h1>
      <div>
        <Location {...props.location} onSubmit={onSubmit} editFlag="true" />
        <Button onClick={onRemove}>Remove </Button>
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  location: state.locations.find(
    (location) => location.id === props.match.params.id
  ),
});

const mapDispatchToProps = (dispatch, props) => ({
  editLocation: (id, location) => dispatch(editLocation(id, location)),
  removeLocation: (data) => dispatch(removeLocation(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditLocationPage);
