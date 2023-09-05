import "./App.css";
import { useEffect } from "react";

function App() {
  // API data will be fetched only on mount.
  useEffect(() => {
    const fetchData = async () => {
      // Only get data for first 151 pokemon (GEN 1)
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"
      );
      const data = await response.json();

      const pokemon = [];
      data.results.forEach(async (item) => {
        const response = await fetch(item.url);
        pokemon.push(await response.json());
      });

      console.log(pokemon);
    };
    fetchData();
  }, []);
}

export default App;
