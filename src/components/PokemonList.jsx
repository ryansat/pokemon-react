import React, { useEffect } from "react";
import { FlatList, ActivityIndicator, View } from "react-native";
import { observer } from "mobx-react-lite";
import pokemonStore from "../stores/PokemonStore";
import PokemonCard from "./PokemonCard";

const PokemonList = observer(() => {
  useEffect(() => {
    pokemonStore.fetchPokemons(25, 0);
  }, []);

  const loadMore = () => {
    if (!pokemonStore.loading) {
      const offset = pokemonStore.pokemons.length;
      pokemonStore.fetchPokemons(25, offset);
    }
  };

  return (
    <View>
      <FlatList
        data={pokemonStore.pokemons}
        renderItem={({ item }) => <PokemonCard pokemon={item} />}
        keyExtractor={(item) => item.name}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          pokemonStore.loading ? <ActivityIndicator size="large" /> : null
        }
      />
    </View>
  );
});

export default PokemonList;
