import React from "react";
import Product from "./Product";
import data from "../data";

export default function Products() {
  return (
    <>
      {data.map(item => {
        return <Product key={item.id} name={item.name} price={item.price} />;
      })}
    </>
  );
}
