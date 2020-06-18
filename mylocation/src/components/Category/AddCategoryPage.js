import React from "react";
import AddCategory from "./Category";
import { connect } from "react-redux";
import { addCategory } from "../../actions/category";
const AddCategoryPage = (props) => (
  <div>
    <h3>Add Category</h3>
    <AddCategory
      editFlag="false"
      onSubmit={({ name }) => {
        props.dispatch(addCategory({ name }));
        props.history.push("/Category");
      }}
    />
  </div>
);
export default AddCategoryPage;
