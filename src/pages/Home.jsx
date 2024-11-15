import React, { useEffect } from "react";
import { FlatList, View, ActivityIndicator } from "react-native";
import { observer } from "mobx-react-lite";
import pokemonStore from "../stores/PokemonStore";
import Header from "../components/Header";
import PokemonCard from "../components/PokemonCard";

const Home = observer(() => {
  useEffect(() => {
    pokemonStore.fetchPokemons(25, 0);
  }, []);

  const loadMore = () => {
    if (pokemonStore.pokemons.length % 25 === 0) {
      const offset = pokemonStore.pokemons.length;
      pokemonStore.fetchPokemons(25, offset);
    }
  };

  return (
    <View>
      <Header title="PokeApp - [Your Name]" />
      <FlatList
        data={pokemonStore.pokemons}
        renderItem={({ item }) => <PokemonCard pokemon={item} />}
        keyExtractor={(item) => item.name}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          pokemonStore.pokemons.length % 25 === 0 ? (
            <ActivityIndicator size="large" />
          ) : null
        }
      />
    </View>
  );
});

export default Home;
