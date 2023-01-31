import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [gameState, setGameState] = useState({
    setNumber: 1,
    player1Score: 0,
    player2Score: 0,
    setsWonByPlayer1: 0,
    setsWonByPlayer2: 0,
    gameWinner: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:3000/game");
      setGameState(result.data);
    };
    fetchData();
  }, []);

  const updateScore = async (player) => {
    const result = await axios.post("http://localhost:3000/game", {
      player,
      ...gameState,
    });
    setGameState(result.data);
  };

  return (
    <div>
      <h1>Tennis Game</h1>
      <div>
        Set Number: {gameState.setNumber}
        <br />
        Player 1: {gameState.player1Score}
        <br />
        Player 2: {gameState.player2Score}
        <br />
        Sets Won by Player 1: {gameState.setsWonByPlayer1}
        <br />
        Sets Won by Player 2: {gameState.setsWonByPlayer2}
        <br />
        <br />
        <button onClick={() => updateScore(1)}>Player 1 scores</button>
        <button onClick={() => updateScore(2)}>Player 2 scores</button>
      </div>
      Game Winner: {gameState.gameWinner}
    </div>
  );
};

export default App;
