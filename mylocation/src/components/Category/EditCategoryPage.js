import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import Category from "./Category";
import { removeCategory, editCategory } from "../../actions/category";
import { Button } from "@material-ui/core";

const EditCategoryPage = (props) => {
  const dispatch = useDispatch();
  const category = useSelector((state) => {
    console.log(state);
    return state.categories.find((category) => {
      return category.id == props.match.params.id;
    });
  });

  const onSubmit = (category) => {
    dispatch(editCategory(category.id, category));
    props.history.push("/Category");
  };
  const onRemove = () => {
    dispatch(removeCategory(category.id));
    props.history.push("/Category");
  };
  console.log(category);
  return (
    <div>
      <h1>Edit Category</h1>
      <div>
        <Category category={category} onSubmit={onSubmit} editFlag="true" />
        <Button onClick={onRemove}>Remove</Button>
      </div>
    </div>
  );
};

/*const mapStateToProps = (state, props) => ({
  category: state.categories.find(
    (category) => category.id === props.match.params.id
  ),
});

const mapDispatchToProps = (dispatch, props) => ({
  editCategory: (id, category) => dispatch(editCategory(id, category)),
  removeCategory: (data) => dispatch(removeCategory(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditCategoryPage);*/
export default EditCategoryPage;
