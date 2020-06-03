import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Nav />
      <div className="showCase">
        <h1>Github Battle: Battle your friends... and stuff.</h1>
        <Link className="btn" to="/battle">
          Battle
        </Link>
      </div>
    </div>
  );
}

export default Home;
