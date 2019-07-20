import React from "react";
import Nav from "./components/Nav";
import Products from "./components/Products";
import { AppProvider } from "./context/context";

function App() {
  return (
    <AppProvider>
      <div className="container">
        <Nav />
        <div className="row">
          <Products />
        </div>
      </div>
    </AppProvider>
  );
}

export default App;
