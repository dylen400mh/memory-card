import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [pokemon, setPokemon] = useState([]);

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

          return { name: name, sprite: sprite };
        });

        setPokemon(await Promise.all(promises));
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
}

export default App;
