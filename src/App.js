import React from "react";
import Nav from "./components/Nav";
import Products from "./components/Products";

function App() {
  return (
    <div className="container">
      <Nav />
      <div className="row">
        <Products />
      </div>
    </div>
  );
}

export default App;
