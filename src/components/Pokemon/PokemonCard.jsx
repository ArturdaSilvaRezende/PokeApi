import React from "react";

//custom styled
import * as C from "./PokemonStyle";

const PokemonCard = (props) => (
  <C.PokemonCard>
    <a
      href={`https://www.pokemon.com/us/pokedex/${props.name}`}
      target="_blank"
      rel="noreferrer"
      className="pokemon-list__link"
    >
      <img
        alt={props.nome}
        src={`https://img.pokemondb.net/artwork/large/${props.name}.jpg`}
      />

      <figcaption>
        <h3>{props.name}</h3>
      </figcaption>
    </a>
  </C.PokemonCard>
);

export default PokemonCard;
