import React from "react";
import { connect, useSelector } from "react-redux";
import CategoryListItem from "./CategoryListItem";
import selectCategory from "../../selectors/category";
import { List } from "@material-ui/core";

const CategoryList = (props) => {
  const categories = useSelector((state) => state.categories);
  return (
    <div>
      <h1>Category List</h1>
      <List>
        {categories.map((category) => {
          return <CategoryListItem key={category.id} {...category} />;
        })}
      </List>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    categories: selectCategory(state.categories, state.filters),
  };
};
export default connect(mapStateToProps)(CategoryList);
