import React from "react";
import { FaTrashAlt } from "react-icons/fa";

export default function BasketItem({ name, price, removeProduct }) {
  return (
    <tr>
      <td>{name}</td>
      <td>{price}</td>
      <td>
        <span onClick={removeProduct}>
          <FaTrashAlt />
        </span>
      </td>
    </tr>
  );
}
