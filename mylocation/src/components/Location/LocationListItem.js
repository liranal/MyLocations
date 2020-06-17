import React from "react";
import { NavLink, Link } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { removeLocation } from "../../actions/locations";
import {
  ListItem,
  Button,
  ListItemSecondaryAction,
  ListItemText,
} from "@material-ui/core";
const LocationListItem = (props) => {
  const dispatch = useDispatch();
  return (
    <ListItem>
      <Link to={`Location/edit/${props.id}`}>
        <ListItemText
          primary={props.name}
          secondary={
            <ul className="list-unstyled">
              <li>address:{props.address} </li>
              <li>lat: {props.lat}</li>
              <li> lon :{props.lon}</li>
              <li>category : {props.category}</li>
            </ul>
          }
        ></ListItemText>
      </Link>

      <ListItemSecondaryAction>
        <Button
          onClick={(e) => {
            dispatch(removeLocation(props.id));
          }}
        >
          Remove
        </Button>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default connect()(LocationListItem);
