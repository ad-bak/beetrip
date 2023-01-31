const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());

let gameState = {
  setNumber: 1,
  player1Score: 0,
  player2Score: 0,
  setsWonByPlayer1: 0,
  setsWonByPlayer2: 0,
  gameWinner: "",
};

app.use(express.json());

app.get("/game", (req, res) => {
  res.json(gameState);
});

app.post("/game", (req, res) => {
  const {
    player,
    setNumber,
    player1Score,
    player2Score,
    setsWonByPlayer1,
    setsWonByPlayer2,
    gameWinner,
  } = req.body;

  if (player === 1) {
    gameState.player1Score = player1Score + 15;
    if (player1Score >= 40 && player1Score - player2Score >= 2) {
      gameState.setsWonByPlayer1 = setsWonByPlayer1 + 1;
      gameState.player1Score = 0;
      gameState.player2Score = 0;
      gameState.setNumber = setNumber + 1;
    }
  } else if (player === 2) {
    gameState.player2Score = player2Score + 15;
    if (player2Score >= 40 && player2Score - player1Score >= 2) {
      gameState.setsWonByPlayer2 = setsWonByPlayer2 + 1;
      gameState.player1Score = 0;
      gameState.player2Score = 0;
      gameState.setNumber = setNumber + 1;
    }
  }

  if (setNumber > 3) {
    if (setsWonByPlayer1 > setsWonByPlayer2) {
      gameState.gameWinner = "Player 1";
    } else if (setsWonByPlayer2 > setsWonByPlayer1) {
      gameState.gameWinner = "Player 2";
    } else {
      gameState.gameWinner = "Tie";
    }
  }

  res.json(gameState);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
