/* Get Locations data and present them by the sort option that have been chose */
const getVisibalLocations = (locations, { text = "", sortBy }) => {
  return locations
    .filter((location) => {
      if (location.name) {
        const textMatch = location.name
          .toLowerCase()
          .includes(text.toLowerCase());
        return textMatch;
      }
      return "";
    })
    .sort((a, b) => {
      if (sortBy === "Alphabetic") {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return -1;
        }
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return 1;
        }
        return 0;
      } else if (sortBy === "Group") {
        if (a.category.toLowerCase() < b.category.toLowerCase()) {
          return -1;
        }
        if (a.category.toLowerCase() > b.category.toLowerCase()) {
          return 1;
        }
        return 0;
      }
      return 0;
    });
};
export default getVisibalLocations;
