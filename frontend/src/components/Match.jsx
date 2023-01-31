const Match = () => {
  const [matchScore, setMatchScore] = useState({
    player1: 0,
    player2: 0,
  });

  const handlePlayerScore = (player) => {
    setMatchScore((prevState) => {
      const newScore = { ...prevState };
      newScore[player] += 1;
      return newScore;
    });
  };

  const getMatchScore = () => {
    return `${matchScore.player1} - ${matchScore.player2}`;
  };

  return (
    <div>
      <h1>Current match score: {getMatchScore()}</h1>
      <Set />
      <button onClick={() => handlePlayerScore("player1")}>
        Player 1 scores
      </button>
      <button onClick={() => handlePlayerScore("player2")}>
        Player 2 scores
      </button>
    </div>
  );
};
