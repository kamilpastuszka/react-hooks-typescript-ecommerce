import React, { useContext } from "react";
import { FaShoppingCart, FaStore } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Context } from "../context/context";

export default function Nav(props: any) {
  const { state } = useContext(Context);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light align-content-between">
        <div className="navbar-brand">ecommerce app</div>
        <div className="collapse navbar-collapse" id="navbarColor02" />
        <div className="pull-right align-items-center">
          <Link to="/">
            <span className="mr-3">
              {" "}
              store <FaStore />{" "}
            </span>
          </Link>

          <Link to="/Basket">
            <span>
              {" "}
              basket <FaShoppingCart />
              <span className="itemCount">{state.length}</span>
            </span>
          </Link>
        </div>
      </nav>
    </>
  );
}
