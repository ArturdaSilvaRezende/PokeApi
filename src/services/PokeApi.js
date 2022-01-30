const URL = "https://pokeapi.co/api/v2/pokemon?limit=500";

export const getPokemons = () => {
  return fetch(URL).then((response) => response.json());
};

// import axios from "axios";
//  const Pokeapi = axios.create({
//  baseURL: "https://pokeapi.co/api/v2/pokemon?limit=500",
//  });
// export default Pokeapi;
