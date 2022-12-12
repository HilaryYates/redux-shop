import { ActionTypes } from "../constants/action-types";

export const initialState = {
  products: [{ id: 1, title: "redux-project", category: "redux" }],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };

    default:
      return state;
  }
};
