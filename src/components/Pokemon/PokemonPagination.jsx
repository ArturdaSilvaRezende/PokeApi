import React, { useEffect, useState } from "react";

//services
import { getPokemons } from "../../services/PokeApi";
import PokemonCard from "./PokemonCard";

//custom styled
import * as C from "./PokemonStyle";

const PokemonPagination = () => {
  const [pokemons, setPokemons] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage] = useState(15);

  const [pageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const pages = [];
  for (let i = 1; i <= Math.ceil(500 / itemsPerPage); i++) {
    pages.push(i);
  }

  const handlePages = (event) => {
    setcurrentPage(Number(event.target.value));
  };

  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <button
          key={number}
          value={number}
          onClick={handlePages}
          className={currentPage === number ? "active" : null}
        >
          {number}
        </button>
      );
    } else {
      return null;
    }
  });

  const handleNextbtn = () => {
    setcurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevbtn = () => {
    setcurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit === 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

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
          onClick={handlePrevbtn}
          disabled={currentPage === pages[0] ? true : false}
        >
          Prev
        </button>

        {renderPageNumbers}

        <button
          onClick={handleNextbtn}
          disabled={currentPage === pages[pages.length - 1] ? true : false}
        >
          Next
        </button>
      </C.PokemonButtons>
    </C.PokemonPagination>
  );
};

export default PokemonPagination;
