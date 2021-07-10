export const ADD_CATEGORIES = "ADD_CATEGORIES";

export const createAddCategories = (catArr) => ({
  type: ADD_CATEGORIES,
  payload: catArr,
});
