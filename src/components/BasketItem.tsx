import React from "react";
import { FaTrashAlt } from "react-icons/fa";

export default function BasketItem(item: {
  name: string;
  price: number;
  removeProduct: any;
}) {
  return (
    <tr>
      <td>{item.name}</td>
      <td>{item.price}</td>
      <td>
        <span onClick={item.removeProduct}>
          <FaTrashAlt />
        </span>
      </td>
    </tr>
  );
}
