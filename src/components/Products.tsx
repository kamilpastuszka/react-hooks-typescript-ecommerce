import React, { useContext } from "react";
import Product from "./Product";
import { Context } from "../context/context";

export default function Products({ data }) {
  const { dispatch } = useContext(Context);

  const addProduct = item => {
    dispatch({ type: "ADD_PRODUCT", payload: item });
  };

  return (
    <div className="row">
      {data.map(item => {
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
