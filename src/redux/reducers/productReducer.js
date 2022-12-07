import { ActionTypes } from "../constants/action-types";

export const initialState = {
  products: [{ id: 1, title: "redux-project", category: "redux" }],
};

export const productReducer = (state, action) => {
  switch ((action.type, { type, payload })) {
    case ActionTypes.SET_PRODUCTS:
      return state;

    default:
      return state;
  }
};
