/* 
   Find string inside the categories list that includes the text we passed.
*/
const getVisibalCategory = (categories, { text = "" }) => {
  return categories
    .filter((category) => {
      if (category.name) {
        const textMatch = category.name
          .toLowerCase()
          .includes(text.toLowerCase());
        return textMatch;
      }
      return "";
    })
    .sort((a, b) => {
      //Sorting alphabeltically the Categories
      if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return -1;
      }
      if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1;
      }
      return 0;
    });
};
export default getVisibalCategory;
