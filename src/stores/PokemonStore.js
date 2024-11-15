import { makeAutoObservable } from "mobx";
import api from "../utils/api";

class PokemonStore {
  pokemons = [];
  selectedPokemon = null;
  comparisonPokemon = [null, null];

  constructor() {
    makeAutoObservable(this);
  }

  async fetchPokemons(limit, offset) {
    try {
      const response = await api.get(
        `/pokemon?limit=${limit}&offset=${offset}`
      );
      this.pokemons = [...this.pokemons, ...response.data.results];
    } catch (error) {
      console.error("Error fetching pokemons:", error);
    }
  }

  async fetchPokemonDetails(id) {
    this.selectedPokemon = null; // Reset before fetching
    try {
      const response = await api.get(`/pokemon/${id}`);
      this.selectedPokemon = response.data;
    } catch (error) {
      console.error("Error fetching pokemon details:", error);
    }
  }

  setComparisonPokemon(index, pokemon) {
    this.comparisonPokemon[index] = pokemon;
  }
}

const pokemonStore = new PokemonStore();
export default pokemonStore;
