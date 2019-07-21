import React, { createContext, useReducer } from "react";
import productReducer from "./productReducer";

interface ctx {
  state: {};
  dispatch: void;
}

export const Context = React.createContext({
  state: {},
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
