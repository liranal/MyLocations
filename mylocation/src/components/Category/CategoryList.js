import React from "react";
import { connect } from "react-redux";
import CategoryListItem from "./CategoryListItem";
import selectCategory from "../../selectors/category";

const CategoryList = (props) => (
  <div>
    <h1>Category List</h1>
    {props.categories.map((category) => {
      return <CategoryListItem key={category.id} {...category} />;
    })}
  </div>
);

const mapStateToProps = (state) => {
  return {
    categories: selectCategory(state.categories, state.filters),
  };
};

export default connect(mapStateToProps)(CategoryList);
