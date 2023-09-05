/* eslint-disable react/prop-types */
import "../styles/Card.css";

function Card({ card, onClick }) {
  return (
    <div
      id={card.id}
      className="card"
      onClick={onClick}
      selected={card.selected}
    >
      <img src={card.sprite} alt="" />
      <span>{card.name}</span>
    </div>
  );
}

export default Card;
