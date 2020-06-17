import uuid from "uuid";

//ADD_LOCATION
export const addCategory = ({ name = "" } = {}) => ({
  type: "ADD_CATEGORY",
  category: {
    id: uuid(),
    name,
  },
});

//REMOVE_LOCATION
export const removeCategory = (id) => {
  return {
    type: "REMOVE_CATEGORY",
    id,
  };
};

//EDIT_LOCATION
export const editCategory = (id, updates) => ({
  type: "EDIT_CATEGORY",
  id,
  updates,
});
