import React from "react";
import { FaShoppingCart, FaStore } from "react-icons/fa";

export default function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light align-content-between">
        <div className="navbar-brand">ecommerce app</div>
        <div className="collapse navbar-collapse" id="navbarColor02" />
        <div className="pull-right align-items-center">
          <span className="mr-3">
            {" "}
            store <FaStore />{" "}
          </span>
          <span>
            {" "}
            basket <FaShoppingCart />{" "}
          </span>
        </div>
      </nav>
    </>
  );
}
