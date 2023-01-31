import { useState } from "react";

const Game = () => {
  const [gameScore, setGameScore] = useState({
    player1: 0,
    player2: 0,
  });

  const handlePlayerScore = (player) => {
    setGameScore((prevState) => {
      const newScore = { ...prevState };
      newScore[player] += 1;
      return newScore;
    });
  };

  const getGameScore = () => {
    let score = "";
    switch (gameScore.player1) {
      case 0:
        score = "0";
        break;
      case 1:
        score = "15";
        break;
      case 2:
        score = "30";
        break;
      case 3:
        score = "40";
        break;
      default:
        if (gameScore.player1 > gameScore.player2) {
          score = "Advantage Player 1";
        } else {
          score = "Advantage Player 2";
        }
    }

    score += " - ";

    switch (gameScore.player2) {
      case 0:
        score += "0";
        break;
      case 1:
        score += "15";
        break;
      case 2:
        score += "30";
        break;
      case 3:
        score += "40";
        break;
    }

    return score;
  };

  return (
    <div>
      <h2>Current game score: {getGameScore()}</h2>
      <button onClick={() => handlePlayerScore("player1")}>
        Player 1 scores
      </button>
      <button onClick={() => handlePlayerScore("player2")}>
        Player 2 scores
      </button>
    </div>
  );
};

export default Game;
