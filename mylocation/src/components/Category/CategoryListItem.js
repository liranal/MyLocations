import React from "react";
import { NavLink, Link } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { removeCategory } from "../../actions/category";
import {
  Button,
  List,
  ListItem,
  TextField,
  ListItemSecondaryAction,
  ListItemText,
} from "@material-ui/core";
const CategoryListItem = (props) => {
  console.log(props);
  const dispatch = useDispatch();
  return (
    <div>
      <ListItem button>
        <Link to={`Category/edit/${props.id}`}>
          <ListItemText primary={props.name}></ListItemText>
        </Link>
        <ListItemSecondaryAction>
          <Button
            onClick={(e) => {
              dispatch(removeCategory(props.id));
            }}
          >
            Remove
          </Button>
        </ListItemSecondaryAction>
      </ListItem>
    </div>
  );
};

export default connect()(CategoryListItem);
