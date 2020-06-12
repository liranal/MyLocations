/* Get categories data and present them by the sort option that have been chose */
const getVisibalCategory = (categories, { text = "", sortBy }) => {
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
      if (sortBy === "Alphabetic") {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return -1;
        }
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return 1;
        }
        return 0;
      } else if (sortBy === "group") {
        if (a.category.toLowerCase() < b.category.toLowerCase()) {
          return -1;
        }
        if (a.category.toLowerCase() > b.category.toLowerCase()) {
          return 1;
        }
        return 0;
      } else if (sortBy === "ungroup") {
        if (a.addedDate < b.addedDate) {
          return -1;
        }
        if (a.addedDate > b.addedDate) {
          return 1;
        }
        return 0;
      }
      return 0;
    });
};
export default getVisibalCategory;
