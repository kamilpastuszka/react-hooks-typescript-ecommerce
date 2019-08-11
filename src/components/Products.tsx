import React, { useContext } from "react";
import Product from "./Product";
import { Context } from "../context/context";

export default function Products({ data }) {
  const { dispatch } = useContext(Context);

  const addProduct = (item: { id: number; name: string; price: number }) => {
    dispatch({ type: "ADD_PRODUCT", payload: item });
  };

  return (
    <div className="row d-flex justify-content-around">
      {data.map((item: { id: any; name: any; price: any }) => {
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
