interface IState {
  id: number;
  name: string;
  price: number;
}

type Action =
  | { type: "ADD_PRODUCT"; payload: IState[] }
  | { type: "REMOVE_PRODUCT"; payload: any };

const productReducer = (state: IState[], action: Action) => {
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
