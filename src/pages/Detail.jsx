import React, { useEffect } from "react";
import { View, Text, Image } from "react-native";
import pokemonStore from "../stores/PokemonStore";
import { observer } from "mobx-react-lite";

const Detail = observer(({ route }) => {
  const { pokemonId } = route.params;

  useEffect(() => {
    pokemonStore.fetchPokemonDetails(pokemonId);
  }, [pokemonId]);

  if (!pokemonStore.selectedPokemon) return null;

  const { sprites, name, height, weight, types } = pokemonStore.selectedPokemon;

  return (
    <View>
      <Image
        source={{ uri: sprites?.front_default }}
        style={{ width: 100, height: 100 }}
      />
      <Text>Name: {name}</Text>
      <Text>Height: {height}</Text>
      <Text>Weight: {weight}</Text>
      <Text>Type: {types?.map((type) => type.type.name).join(", ")}</Text>
    </View>
  );
});

export default Detail;
