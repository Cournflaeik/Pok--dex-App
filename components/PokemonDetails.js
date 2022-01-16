
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PokemonDetails = (props) => {
  const [pokemonDetails, setPokemonDetails] = useState({});

  const navigation = useNavigation();

  const getPokemonDetailsById = async () => {
    try {
      const url = "https://pokeapi.co/api/v2/pokemon/" + props.PokemonName;
      const response = await fetch(url, {
        "method": "GET",
      })
      .then((response) => response.json())
      .then((responseJson) => {
        setPokemonDetails(responseJson);
      })

    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getPokemonDetailsById();
  }, []);

  if(Object.keys(pokemonDetails).length > 0){
    return (
      <ScrollView>
        <Text style={styles.text}>{pokemonDetails.name}</Text>
        <Text style={styles.text}>{"#" + pokemonDetails.id}</Text>

        <View style={styles.images}>
          <Image
            style={styles.imagePokemon}
            source={{ uri: pokemonDetails.sprites["front_default"] }}
          />
          <Image
            style={styles.imagePokemon}
            source={{ uri: pokemonDetails.sprites["back_default"] }}
          />
        </View>
        <Text style={styles.text}>{pokemonDetails.name + " is a pokemon with a weight of " + pokemonDetails.weight + "kg and a height of " + pokemonDetails.height * 10 + "cm."}</Text>
        <Text style={styles.text}>{pokemonDetails.name + " is a " + pokemonDetails.types[0].type.name + ((pokemonDetails.types.length == 1) ? 'type!' : " and " + pokemonDetails.types[1].type.name + " type!") }</Text>

        <TouchableOpacity  style={styles.button} activeOpacity={0.5} onPress={() => { navigation.navigate('Moves', { PokemonName: pokemonDetails.name }) }}>
          <Text>{"Click here to see all the moves for " + pokemonDetails.name}</Text>
        </TouchableOpacity>

      </ScrollView>
    );
  } else {
    return (
      <ScrollView>
          <View>
            <View>
            <Text style={styles.text}>{"loading"}</Text>
            </View>
          </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    margin: 16,
    fontSize: 24,
    textAlign: 'center',
    textTransform: 'uppercase'
  },
  imagePokemon: {
    width: Dimensions.get('window').width/2,
    height: Dimensions.get('window').width/2,
  },
  images: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  button: {
    padding: 20,
    margin: 20,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    shadowColor: 'black',
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 8,
  }
});
export default PokemonDetails;