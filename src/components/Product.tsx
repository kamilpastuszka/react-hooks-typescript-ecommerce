import React from "react";
import { string, number } from "prop-types";

export default function Product(props) {
  return (
    <div className="col-sm-12 col-md-5  mt-5">
      <div className="card">
        <div className="card-body">{props.name}</div>
        <div className="card-footer">{props.price} </div>
        <button className="btn btn-primary">add</button>
      </div>
    </div>
  );
}
