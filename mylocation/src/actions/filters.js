//SET_TEXT_FILTER
export const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text,
});

//GROUP BY FILTER
export const filterByGroup = () => ({
  type: "GROUP_BY_FILTER",
  sortBy: "Group",
});
//UNGROUP_BY_FILTER
export const filterByUngroup = () => ({
  type: "UNGROUP_BY_FILTER",
  sortBy: "Ungroup",
});

//ABC_SORT_FILTER
export const filterABC = () => ({
  type: "ABC_SORT_FILTER",
  sortBy: "Alphabetic",
});

//DATE_SORT_FILTER
export const filterByDate = () => ({
  type: "DATE_SORT_FILTER",
  sortBy: "AddedDate",
});
