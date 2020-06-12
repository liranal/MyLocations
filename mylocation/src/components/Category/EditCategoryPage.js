import React from "react";
import { connect } from "react-redux";
import Category from "./Category";
import { removeCategory, editCategory } from "../../actions/category";

const EditCategoryPage = (props) => {
  const onSubmit = (category) => {
    console.log(category);
    props.editCategory(props.category.id, category);
    props.history.push("/Category");
  };
  const onRemove = () => {
    props.removeCategory({ id: props.category.id });
    props.history.push("/Category");
  };

  return (
    <div>
      <h1>Edit Category</h1>
      <div>
        <Category category={props.category} onSubmit={onSubmit} editFlag />
        <button onClick={onRemove}>Remove</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  category: state.categories.find(
    (category) => category.id === props.match.params.id
  ),
});

const mapDispatchToProps = (dispatch, props) => ({
  editCategory: (id, category) => dispatch(editCategory(id, category)),
  removeCategory: (data) => dispatch(removeCategory(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditCategoryPage);
