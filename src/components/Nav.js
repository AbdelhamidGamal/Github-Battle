import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="navBar">
      <Link to="/">Home</Link>
      <Link to="/battle">Battle</Link>
      <Link to="/pouplar">Pouplar</Link>
      <Link to="/search">Search</Link>
    </div>
  );
}

export default Nav;
