const Set = () => {
  const [setScore, setSetScore] = useState({
    player1: 0,
    player2: 0,
  });

  const [tiebreak, setTiebreak] = useState(false);

  const handlePlayerScore = (player) => {
    setSetScore((prevState) => {
      const newScore = { ...prevState };
      newScore[player] += 1;
      return newScore;
    });
  };

  const getSetScore = () => {
    let score = `${setScore.player1} - ${setScore.player2}`;

    if (setScore.player1 >= 6 && setScore.player2 >= 6) {
      setTiebreak(true);
    }

    if (setScore.player1 >= 6 && setScore.player2 <= 5) {
      score += " (Player 1 wins set)";
    }

    if (setScore.player2 >= 6 && setScore.player1 <= 5) {
      score += " (Player 2 wins set)";
    }

    return score;
  };

  return (
    <div>
      <h2>Current set score: {getSetScore()}</h2>
      {tiebreak ? <h3>Tiebreak</h3> : <Game />}
      <button onClick={() => handlePlayerScore("player1")}>
        Player 1 scores
      </button>
      <button onClick={() => handlePlayerScore("player2")}>
        Player 2 scores
      </button>
    </div>
  );
};

export default Set;
