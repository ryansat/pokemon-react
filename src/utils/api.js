import axios from "axios";

const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
  timeout: 10000, // Optional: Set a timeout for requests
});

export const getPokemons = (limit = 25, offset = 0) => {
  return api.get(`/pokemon?limit=${limit}&offset=${offset}`);
};

export const getPokemonDetails = (idOrName) => {
  return api.get(`/pokemon/${idOrName}`);
};

export const getAbilityDetails = (abilityIdOrName) => {
  return api.get(`/ability/${abilityIdOrName}`);
};

export default api;
