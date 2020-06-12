import React from "react";
import AddCategory from "./Category";
import { connect } from "react-redux";
import { addCategory } from "../../actions/category";
const AddCategoryPage = (props) => (
  <div>
    <h1>Add Category</h1>
    <AddCategory
      onSubmit={({ name }) => {
        props.dispatch(addCategory({ name }));
        props.history.push("/Category");
      }}
    />
  </div>
);
export default connect()(AddCategoryPage);
