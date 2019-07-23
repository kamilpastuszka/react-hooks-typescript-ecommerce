import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "../components/Nav";
import Basket from "../components/Basket";
import Products from "../components/Products";
import data from "../data/data";
import { IState } from "../interfaces/interfaces";

export default function Container() {
  const [items, setItems] = useState<IState[]>([]);

  const fetchData = () => {
    setItems(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={() => <Products data={items} />} />
        <Route path="/basket" component={Basket} />
      </Switch>
    </Router>
  );
}
