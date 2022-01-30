import React, { useState, useEffect, useCallback } from "react";

//services
import { getPokemons } from "../../services/PokeApi";
import { useDebounce } from "use-debounce";

//components
import PokemonCard from "./PokemonCard";

//custom styled
import { PokemonList } from "./PokemonStyle";

//images
import Pokeball from "../assets/pokebola.png";

const AllPokemon = ({ currentItems }) => {
  //state responsible for receiving data from the API
  const [pokemons, setPokemons] = useState([]);

  //state responsible for controlling the search field
  const [searchInput, setSearchInput] = useState("");

  //state responsible for receiving data from the search field and filtering the result.
  const [filteredResults, setFilteredResults] = useState([]);

  //state responsible for the debounce the search field
  const [value] = useDebounce(searchInput, 300);

  const handleSearch = useCallback(
    (e) => {
      setSearchInput(e);
      if (searchInput !== "") {
        const filteredData = pokemons.results.filter((item) => {
          return Object.values(item)
            .join("")
            .toLowerCase()
            .includes(value.toLowerCase());
        });

        setFilteredResults(filteredData);
      } else {
        setFilteredResults(pokemons);
      }
    },
    [pokemons, value, searchInput]
  );

  useEffect(() => {
    getPokemons().then((data) => {
      setPokemons(data);
    });
  }, []);

  return (
    <PokemonList className="pokemon-list">
      <form className="pokemon-list__form">
        <input
          type="text"
          placeholder="Pesquisar"
          onChange={(event) => handleSearch(event.target.value)}
        />
        <button>
          <img src={Pokeball} alt="pokeball" />
        </button>
      </form>

      <div className="pokemon-list__container">
        {searchInput.length > 1
          ? filteredResults.map((pokemon) => {
              return <PokemonCard key={pokemon.name} {...pokemon} />;
            })
          : Object.entries(pokemons)[3] &&
            Object.entries(pokemons)[3][1].map((pokemon) => {
              return <PokemonCard key={pokemon.name} {...pokemon} />;
            })}
      </div>
    </PokemonList>
  );
};

export default AllPokemon;
