import React from "react";
import UserInfo from "./UserInfo";

function Winner({ winner, loser }) {
  return (
    <div className="winnerPage">
      <div>
        <h2>Winner</h2>
        <UserInfo user={winner} />
      </div>
      <div>
        <h2>Loser</h2>
        <UserInfo user={loser} />
      </div>
    </div>
  );
}

export default Winner;
