/* eslint-disable react/prop-types */
import "../styles/Header.css";
import Scoreboard from "./Scoreboard";

function Header({ score, bestScore }) {
  return (
    <header>
      <h1>Memory Card Game</h1>
      <Scoreboard score={score} bestScore={bestScore} />
    </header>
  );
}

export default Header;
