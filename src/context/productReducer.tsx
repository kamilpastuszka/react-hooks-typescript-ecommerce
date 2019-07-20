interface IState {
  total: number;
  itemCount: number;
}

type Action =
  | { type: "addPrice"; amount: number }
  | { type: "deductPrice"; amount: number };

const productReducer = (state: IState, action: Action) => {
  switch (action.type) {
    case "addPrice":
      return {
        total: state.total + action.amount,
        itemCount: state.itemCount++
      };
    case "deductPrice":
      return {
        total: state.total - action.amount,
        itemCount: state.itemCount--
      };
    default:
      throw new Error();
  }
};

export default productReducer;
