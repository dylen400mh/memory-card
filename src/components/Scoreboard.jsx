/* eslint-disable react/prop-types */
import "../styles/Scoreboard.css";

function Scoreboard({ score, bestScore }) {
  return (
    <div className="scoreboard">
      <span>Score: {score}</span>
      <span>Best Score: {bestScore}</span>
    </div>
  );
}

export default Scoreboard;
