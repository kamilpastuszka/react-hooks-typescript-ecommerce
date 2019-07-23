import { IState, Action } from "../interfaces/interfaces";

const productReducer = (state: Array<IState>, action: Action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return state.concat({ ...action.payload });
    case "REMOVE_PRODUCT":
      return state.filter(product => product.id !== action.payload.id);
    default:
      return state;
  }
};

export default productReducer;
