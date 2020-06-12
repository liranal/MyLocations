import uuid from "uuid";

//ADD_LOCATION
export const addLocation = ({
  name = "",
  address = "",
  lat = "",
  lon = "",
  category = "",
  addedDate = 0,
} = {}) => ({
  type: "ADD_LOCATION",
  location: {
    id: uuid(),
    name,
    address,
    lat,
    lon,
    category,
    addedDate,
  },
});

//REMOVE_LOCATION
export const removeLocation = ({ id }) => ({
  type: "REMOVE_LOCATION",
  id,
});

//EDIT_LOCATION
export const editLocation = (id, updates) => ({
  type: "EDIT_LOCATION",
  id,
  updates,
});
