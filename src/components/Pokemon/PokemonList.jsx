import React, { useState, useEffect, useCallback } from "react";

//components
import PokemonCard from "./PokemonCard";
import PokemonPagination from "./PokemonPagination";

//custom styled
import * as C from "./PokemonStyle";

//images
import Pokeball from "../assets/pokebola.png";

const PokemonList = () => {
  //state responsible for receiving data from the API
  const [pokemons, setPokemons] = useState([]);

  //state responsible for controlling the search field
  const [searchInput, setSearchInput] = useState("");

  //state responsible for receiving data from the search field and filtering the result.
  const [filteredResults, setFilteredResults] = useState([]);

  const [loading, setLoading] = useState(false);

  const handleSearch = useCallback(
    (e) => {
      setSearchInput(e);
      if (searchInput !== "") {
        const filteredData = pokemons.results.filter((item) => {
          return Object.values(item)
            .join("")
            .toLowerCase()
            .includes(searchInput.toLowerCase());
        });

        setLoading(false);
        setFilteredResults(filteredData);
      } else {
        setLoading(true);
        setFilteredResults(pokemons);
      }
    },
    [pokemons, searchInput]
  );

  const getPokemons = async (props) => {
    const API = "https://pokeapi.co/api/v2/pokemon?limit=500";

    try {
      setLoading(true); // Set loading before sending API request
      const res = await fetch(API);
      const data = await res.json();
      setPokemons(data);
      setLoading(false); // Stop loading
    } catch (error) {
      setLoading(false); // Stop loading in case of error
      console.error(error);
    }
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <C.PokemonList className="pokemon-list">
      <form className="pokemon-list__form">
        <input
          type="text"
          placeholder="Pesquisar"
          onChange={(event) => handleSearch(event.target.value)}
        />
        <button type="button">
          <img src={Pokeball} alt="pokeball" />
        </button>
      </form>

      {loading ? (
        <div class="ring">
          Loading
          <span></span>
        </div>
      ) : (
        <C.Container>
          {searchInput.length > 1 ? (
            filteredResults.map((pokemon) => {
              return <PokemonCard key={pokemon.name} {...pokemon} />;
            })
          ) : (
            <PokemonPagination />
          )}
        </C.Container>
      )}
    </C.PokemonList>
  );
};

export default PokemonList;
