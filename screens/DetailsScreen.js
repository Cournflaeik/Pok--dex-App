import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Button } from 'react-native';

import PokemonDetails from '../components/PokemonDetails';

const DetailsScreen = ({ route, navigation }) => {
  const { PokemonName } = route.params;

  return (
    <View style={styles.screen}>
      <PokemonDetails PokemonName={PokemonName} />
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
  }
});
export default DetailsScreen;