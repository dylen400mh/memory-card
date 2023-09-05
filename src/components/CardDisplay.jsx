/* eslint-disable react/prop-types */
import "../styles/CardDisplay.css";
import Card from "./Card";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

function CardDisplay({ pokemon, score, bestScore, setScore }) {
  const [cards, setCards] = useState([]);

  // choose 12 random cards on component mount
  useEffect(() => {
    const cards = [];
    const takenIndices = [];
    for (let i = 0; i < 12; i++) {
      // ensure same pokemon isn't chosen twice
      let randomIndex = Math.floor(Math.random() * 151);
      while (takenIndices.includes(randomIndex)) {
        randomIndex = Math.floor(Math.random() * 151);
      }

      // add index to takenIndices array
      takenIndices.push(randomIndex);

      // Push pokemon object to cards array. Add selected attribute to track if card has been clicked.
      cards.push({ ...pokemon[randomIndex], selected: false });
    }

    setCards(cards);
  }, [pokemon]);

  const shuffleCards = () => {
    for (let i = 0; i < cards.length; i++) {
      const randomIndex = Math.floor(Math.random() * cards.length);

      [cards[i], cards[randomIndex]] = [cards[randomIndex], cards[i]];
    }
  };

  const onClick = (e) => {
    // Already selected - reset score. If not, add one to score
    if (e.target.id) {
      setScore(0);
    } else {
      setScore(score + 1);

      // mark clicked card as selected
      e.target.id = true;

      // update best score
      if (score > bestScore) bestScore = score;
    }

    // shuffle cards
    shuffleCards();
  };

  return (
    <div className="cardDisplay">
      {cards.map((card) => {
        const id = uuidv4();
        return <Card key={id} id={id} card={card} onClick={onClick} />;
      })}
    </div>
  );
}

export default CardDisplay;
