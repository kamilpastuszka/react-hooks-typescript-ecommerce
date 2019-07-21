import React from "react";
import Nav from "./components/Nav";
//import Products from "./components/Products";
import { AppProvider } from "./context/context";
import Container from "./containers/Container";

function App() {
  return (
    <AppProvider>
      <div className="container">
        <Container />
      </div>
    </AppProvider>
  );
}

export default App;
