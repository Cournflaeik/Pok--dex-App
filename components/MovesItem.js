import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MovesItem = props => {
  return (
      <View style={styles.moveItem}>
        <Text style={styles.move}>{props.moveName}</Text>
        <Text>{"Learned at level: " + props.moveLevel}</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  moveItem: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 15,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 8,

  },
  move: {
    fontSize: 18,
    fontWeight: 'bold',
  }
});
export default MovesItem;