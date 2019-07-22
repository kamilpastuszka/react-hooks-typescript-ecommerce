import React, { createContext, useReducer } from "react";
import productReducer from "./productReducer";

export const Context = createContext({
  state: [{ id: 0, name: "", price: 0 }],
  dispatch: ({ type: string, payload: any }) => {}
});

const initialState = [];

export const AppProvider = props => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>
      {props.children}
    </Context.Provider>
  );
};
