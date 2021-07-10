import { ADD_CATEGORIES } from "./Actions";
const initialState=[]

export const MainReducer = (state=initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_CATEGORIES: {
      return payload;
    }
    default: {
      return state;
    }
  }
};
