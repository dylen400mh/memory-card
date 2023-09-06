import "../styles/App.css";
import { useEffect, useState } from "react";
import Header from "./Header";
import CardDisplay from "./CardDisplay";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [fetched, setFetched] = useState(false);

  // API data will be fetched only on mount.
  useEffect(() => {
    const fetchData = async () => {
      // Only get data for first 151 pokemon (GEN 1)
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"
        );
        const data = await response.json();

        const promises = data.results.map(async (item) => {
          const response = await fetch(item.url);
          const data = await response.json();

          const name = data.name;
          const sprite = data.sprites.front_default;

          return { name: name.toUpperCase(), sprite: sprite };
        });

        setPokemon(await Promise.all(promises));

        // set as fetched
        setFetched(true);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="app">
      <Header score={score} bestScore={bestScore} />
      {fetched ? (
        <CardDisplay
          pokemon={pokemon}
          score={score}
          bestScore={bestScore}
          setScore={setScore}
          setBestScore={setBestScore}
        />
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}

export default App;
