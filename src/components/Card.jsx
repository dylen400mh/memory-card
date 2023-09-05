/* eslint-disable react/prop-types */
import "../styles/Card.css";

function Card({ card, id, onClick }) {
  return (
    <div id={id} className="card" onClick={onClick}>
      <img src={card.sprite} alt="" />
      <span>{card.name}</span>
    </div>
  );
}

export default Card;
