/* eslint-disable react/prop-types */
import "../styles/Card.css";

function Card({ card }) {
  return (
    <div className="card">
      <img src={card.sprite} alt="" />
      <span>{card.name}</span>
    </div>
  );
}

export default Card;
