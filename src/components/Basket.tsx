import React, { useContext } from "react";
import { Context } from "../context/context";

export default function Basket() {
  const { state } = useContext(Context);

  console.log("state", state);

  return <div>test</div>;
}
