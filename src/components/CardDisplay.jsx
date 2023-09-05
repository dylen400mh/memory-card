/* eslint-disable react/prop-types */
import "../styles/CardDisplay.css";
import Card from "./Card";

function CardDisplay({ cards }) {
  return (
    <div className="cardDisplay">
      {cards.map((card) => {
        return <Card key={card} card={card} />;
      })}
    </div>
  );
}

export default CardDisplay;
