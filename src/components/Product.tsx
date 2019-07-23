import React from "react";
import styled from "styled-components";

export default function Product({ name, price, addProduct }) {
  return (
    <div className="col-sm-12 col-md-5 mt-5 justify-content-around">
      <div className="card">
        <div className="card-body py-5">{name}</div>
        <div className="card-footer d-flex justify-content-around">
          <div>{price} </div>
          <div>
            <button className="btn btn-primary" onClick={addProduct}>
              add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
