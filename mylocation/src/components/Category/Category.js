import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Button, FormControl } from "@material-ui/core";

const Category = (props) => {
  const [name, setName] = useState(props.category ? props.category.name : "");
  const [error, setError] = useState("");
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!name) {
      setError("Please fill all required fields");
    } else {
      setError("");
      props.onSubmit({
        name,
      });
    }
  };
  if (props.editFlag == "true") {
    return (
      <FormControl>
        <TextField
          id="EditableCategoryName"
          label="Category Name"
          required
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
        />
        <Button onClick={onSubmitHandler}>Edit!</Button>
        <p value={error} />
      </FormControl>
    );
  } else {
    return (
      <FormControl>
        <TextField
          id="NotEditableCategoryName"
          label="Category Name"
          required
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <Button onClick={onSubmitHandler}>Add</Button>
        <p value={error} />
      </FormControl>
    );
  }
};
export default Category;
