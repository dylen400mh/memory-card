/* eslint-disable react/prop-types */
import "../styles/CardDisplay.css";
import Card from "./Card";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

function CardDisplay({ pokemon, score, bestScore, setScore, setBestScore }) {
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

      // Push pokemon object to cards array. Add unique id and selected attribute to track if card has been clicked.
      cards.push({ ...pokemon[randomIndex], id: uuidv4(), selected: false });
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
    // Select card element
    const selectedCard = e.target.closest(".card");

    // Already selected - reset score. If not, add one to score
    console.log(selectedCard);
    if (selectedCard.selected) {
      setScore(0);
    } else {
      setScore(score + 1);

      // mark clicked card as selected if its not selected
      setCards(
        cards.map((card) => {
          return {
            ...card,
            selected:
              card.id === selectedCard.id ? !card.selected : card.selected,
          };
        })
      );

      // update best score
      if (score >= bestScore) setBestScore(score + 1);
    }

    console.log("shuffle");
    // shuffle cards
    shuffleCards();
  };

  return (
    <div className="cardDisplay">
      {cards.map((card) => {
        return <Card key={card.id} card={card} onClick={onClick} />;
      })}
    </div>
  );
}

export default CardDisplay;
