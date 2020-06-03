import React from "react";
import Home from "./components/Home";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Battle from "./components/Battle";
import Search from "./components/Search";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path="/battle" component={Battle} />
      <Route path="/search" component={Search} />
    </BrowserRouter>
  );
}

export default App;
