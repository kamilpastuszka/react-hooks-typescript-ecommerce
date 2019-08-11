import React, { useContext } from "react";
import { Context } from "../context/context";
import BasketItem from "./BasketItem";
import styled from "styled-components";

export default function Basket() {
  const { state, dispatch } = useContext(Context);

  const removeProduct = (item: { id: number; name: string; price: number }) => {
    dispatch({ type: "REMOVE_PRODUCT", payload: item });
  };

  const SelectedItems = state.map(item => (
    <BasketItem
      key={item.id}
      name={item.name}
      price={item.price}
      removeProduct={() => removeProduct(item)}
    />
  ));

  const BasketContent =
    state.length >= 1 ? (
      SelectedItems
    ) : (
      <EmptyBasket>your basket is empty </EmptyBasket>
    );

  return (
    <table className="table mt-5">
      <tbody>{BasketContent}</tbody>
    </table>
  );
}

const EmptyBasket = styled.div`
  font-size: 2em;
  text-align: center;
`;
