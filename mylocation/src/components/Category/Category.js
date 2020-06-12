import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";

const Category = ({ category, editFlag = false, onSubmit }) => {
  const [name, setName] = useState(category ? category.name : "");
  const [error, setError] = useState("");
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!name) {
      setError("Please fill all required fields");
    } else {
      setError("");
      onSubmit({
        name,
      });
    }
  };
  if (editFlag) {
    return (
      <form onSubmit={onSubmitHandler}>
        <TextField
          id="EditableCategoryName"
          label="Category Name"
          required
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
        />
        <button>Edit!</button>
        <p value={error} />
      </form>
    );
  } else {
    return (
      <form onSubmit={onSubmitHandler}>
        <TextField
          id="NotEditableCategoryName"
          label="Category Name"
          required
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button>Add -></button>
        <p value={error} />
      </form>
    );
  }
};
export default Category;
