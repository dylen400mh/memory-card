/* eslint-disable react/prop-types */
import "../styles/Card.css";

function Card({ pokemon }) {
  return (
    <div className="card">
      <img src={pokemon.sprite} alt="" />
      <span>{pokemon.name}</span>
    </div>
  );
}

export default Card;
