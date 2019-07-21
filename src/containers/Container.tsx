import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "../components/Nav";
import Basket from "../components/Basket";
import Products from "../components/Products";
import data from "../data/data";

export default function Container() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={() => <Products data={data} />} />
        <Route path="/basket" component={Basket} />
      </Switch>
    </Router>
  );
}
