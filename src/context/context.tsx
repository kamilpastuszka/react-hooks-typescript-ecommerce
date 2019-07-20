import React, { createContext, useReducer } from "react";
import productReducer from "./productReducer";

export const Context = createContext([{}, () => {}]);

const initialState = {
  total: 0,
  itemCount: 0
};

export const AppProvider = props => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  return (
    <Context.Provider value={[state, dispatch]}>
      {props.children}
    </Context.Provider>
  );
};
