import React from "react";
import styled from "styled-components";

export default function Product({ name, price, addProduct }) {
  return (
    <div className="col-sm-12 col-md-5 mt-5 justify-content-around">
      <div className="card">
        <CardBody className="card-body py-5">
          <CardBodyConent>{name}</CardBodyConent>
        </CardBody>
        <CardFooter className="card-footer d-flex justify-content-around">
          {price}
          <div>
            <button className="btn btn-primary" onClick={addProduct}>
              add
            </button>
          </div>
        </CardFooter>
      </div>
    </div>
  );
}

const CardBodyConent = styled.div`
  text-align: center;
  font-size: 1.5em;
`;

const CardBody = styled.div`
  background-color: aliceblue;
`;

const CardFooter = styled.div`
  font-size: 1.25em;
`;
