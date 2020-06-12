/* 
 Find string inside the locations list that includes the text we passed.
 */
const getVisibalLocations = (locations, { text = "" }) => {
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
      //Sorting alphabeltically the locations
      if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return -1;
      }
      if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1;
      }
      return 0;
    });
};
export default getVisibalLocations;
