import React, { useState } from "react";
import SelectUser from "./SelectUser";
import Nav from "./Nav";
import Winner from "./Winner";

function Battle() {
  const [playerOne, setPlayerOne] = useState({});
  const [playerTwo, setPlayerTwo] = useState({});
  const [winner, setWinner] = useState("");

  const startBattle = () => {
    const playerOneScore =
      playerOne.public_repos + playerOne.public_gists + playerOne.followers;
    const playerTwoScore =
      playerTwo.public_repos + playerTwo.public_gists + playerTwo.followers;
    if (playerOneScore > playerTwoScore) {
      setWinner(playerOne.login);
    } else {
      setWinner(playerTwo.login);
    }
  };

  if (winner) {
    return (
      <>
        <Nav />
        <Winner
          winner={winner === playerOne.login ? playerOne : playerTwo}
          loser={winner === playerOne.login ? playerTwo : playerOne}
        />
      </>
    );
  }

  return (
    <>
      <Nav />
      <div className="centerItemsInDiv">
        <div className="selectPlayers">
          <SelectUser setPlayer={setPlayerOne} />
          <SelectUser setPlayer={setPlayerTwo} />
        </div>
        {playerOne.login && playerTwo.login && (
          <button className="btn" onClick={startBattle}>
            Battle!
          </button>
        )}
      </div>
    </>
  );
}

export default Battle;
