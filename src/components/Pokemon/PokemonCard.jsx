import React from "react";

const PokemonCard = (props) => (
  <figure className="pokemon-list__card">
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
  </figure>
);

export default PokemonCard;
