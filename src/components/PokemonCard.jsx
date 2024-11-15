import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const PokemonCard = ({ pokemon }) => {
  const navigation = useNavigation();
  const { name, url } = pokemon;
  const pokemonId = url.split("/").filter(Boolean).pop();
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("Detail", { pokemonId })}
    >
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.name}>
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
  },
});

export default PokemonCard;
