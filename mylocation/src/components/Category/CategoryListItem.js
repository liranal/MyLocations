import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { removeCategory } from "../../actions/category";
const CategoryListItem = ({ dispatch, id, name }) => (
  <div>
    <NavLink to={`Category/edit/${id}`}>
      <h3>{name}</h3>
    </NavLink>
    <span
      onClick={(e) => {
        dispatch(removeCategory({ id }));
      }}
    >
      X
    </span>
  </div>
);

export default connect()(CategoryListItem);
