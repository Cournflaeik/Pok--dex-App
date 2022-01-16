import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const PokemonItem = props => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={() => props.onSelectPokemon(props.name)}>
      <View style={styles.listItem}>
        <Text style={styles.namepokemon}>{props.name}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    margin: 10,
    marginVertical: 5,
    borderColor: 'grey',
    borderRadius: 15,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 8,
  },
  namepokemon: {
    fontSize: 16,
    textTransform: 'capitalize'
  }
});
export default PokemonItem;