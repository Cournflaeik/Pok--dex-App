import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, TextInput, ImageBackground } from 'react-native';

import PokemonItem from '../components/PokemonItem';

const HomeScreen = ({ navigation }) => {
  let pokemonArray = []
  const [pokemonNames, setPokemonNames] = useState([]);

  const getPokémon = async () => {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1118/", {
        "method": "GET",
      })
      const json = await response.json();
      setPokemonNames(json.results);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getPokémon();//toon upcoming Pokemons bij begin scherm
  }, []); 

  const getPokémonByNameFilter = (searchInput) => {
    if (searchInput.length > 0) {
      for (let i = 0; i < pokemonNames.length; i++) {
        if (!pokemonNames[i]["name"].indexOf(searchInput.toLowerCase())) {
          pokemonArray.push(pokemonNames[i])
        }
      }
      setPokemonNames(pokemonArray)
    }
    else {
      getPokémon()
    }
  }

  return ( 
    // !! Onderstaande lijn code is voor het weergeven van de background image op de Home screen in de BROWSER VERSIE (run in web browser):
    <ImageBackground style={{resizeMode: "repeat", overflow: 'visible'}} source={require('../assets/bg.png')} resizeMode= "repeat">

    {/* !! Onderstaande lijn code is voor het weergeven van de background image op de Home screen in de APP VERSIE (Expo Go app): */}
    {/* <ImageBackground style={{}} source={require('../assets/bg.png')} > */}
      
      <View style={styles.columns}>
        <TextInput
          placeholder="Search keyword"
          style={styles.input}
          onChangeText={getPokémonByNameFilter}
        />
            <FlatList
              data={pokemonNames}
              keyExtractor={item => item.name}
              renderItem={({ item }) => (
                <PokemonItem
                  name={item.name}
                  onSelectPokemon={() => { navigation.navigate('Details', { PokemonName: item.name }) }}
                />
              )}
          />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  columns: {
    padding: 50,
  },
  input: {
    marginBottom: 15,
    padding: 8,
    margin: 10,
    backgroundColor: 'white',
    borderWidth: 1.5,
    borderRadius: 5,
    height: 40,
    fontSize: 15,
    }
});
export default HomeScreen;