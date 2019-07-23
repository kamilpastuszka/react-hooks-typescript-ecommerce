export interface IState {
  id: number;
  name: string;
  price: number;
}

export type Action =
  | { type: "ADD_PRODUCT"; payload: IState }
  | { type: "REMOVE_PRODUCT"; payload: any };
