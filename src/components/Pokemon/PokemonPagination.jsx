import React, { useCallback, useEffect, useState } from "react";

//services
import { getPokemons } from "../../services/PokeApi";
import PokemonCard from "./PokemonCard";

//custom styled
import * as C from "./PokemonStyle";

const PokemonPagination = () => {
  const [pokemons, setPokemons] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 15;

  const pages = Math.ceil(500 / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const handlePages = useCallback((updatePage) => {
    setCurrentPage(updatePage);
  }, []);

  useEffect(() => {
    getPokemons().then((data) => {
      setPokemons(data);
    });
  }, []);

  return (
    <C.PokemonPagination>
      <C.Container>
        {Object.entries(pokemons)[3] &&
          Object.entries(pokemons)[3][1]
            .slice(startIndex, endIndex)
            .map((pokemon) => {
              return <PokemonCard key={pokemon.name} {...pokemon} />;
            })}
      </C.Container>

      <C.PokemonButtons>
        <button
          onClick={() => handlePages(currentPage - 1)}
          disabled={currentPage < 1}
        >
          Prev
        </button>

        {Array.from(Array(pages), (item, index) => {
          return (
            <button
              value={index}
              className={`${index === currentPage ? "active" : null}`}
              onClick={(e) => setCurrentPage(Number(e.target.value))}
              key={index}
            >
              {index + 1}
            </button>
          );
        })}
        <button
          onClick={() => handlePages(currentPage + 1)}
          disabled={currentPage === pages - 1}
        >
          Next
        </button>
      </C.PokemonButtons>
    </C.PokemonPagination>
  );
};

export default PokemonPagination;
