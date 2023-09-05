/* eslint-disable react/prop-types */
import "../styles/CardDisplay.css";
import Card from "./Card";

function CardDisplay({ pokemons }) {
  return (
    <div className="cardDisplay">
      {pokemons.map((pokemon) => {
        return <Card key={pokemon} pokemon={pokemon} />;
      })}
    </div>
  );
}

export default CardDisplay;
