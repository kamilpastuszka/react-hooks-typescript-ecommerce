import React, { useContext } from "react";
import Product from "./Product";
import { Context } from "../context/context";
import styled from "styled-components";

export default function Products(props) {
  const { dispatch } = useContext(Context);

  const addProduct = item => {
    dispatch({ type: "ADD_PRODUCT", payload: item });
  };

  return (
    <div className="row">
      {props.data.map(item => {
        return (
          <Product
            key={item.id}
            name={item.name}
            price={item.price}
            addProduct={() => addProduct(item)}
          />
        );
      })}
    </div>
  );
}

const Wrapper = styled.div`
  height: 100vh;
`;
