import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import MovesItem from '../components/MovesItem';

const MovesScreen = (props) => {
    const [pokemonMoves, setPokemonMoves] = useState([]);

    const getPokemonMoves = async () => {
        try{
            const pokemonName = props.route.params.PokemonName;

            const url = "https://pokeapi.co/api/v2/pokemon/" + pokemonName;
            const response = await fetch(url, {
                "method": "GET",
            })  
            .then((response) => response.json())
            .then((responseJson) => {
                setPokemonMoves(responseJson.moves);
            })

        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getPokemonMoves();
    }, []);

    return (
    <View style={styles.screen}>
        <View style={styles.columns}>
            <FlatList
                data={pokemonMoves}
                keyExtractor={item => item.move.name}
                renderItem={({ item }) => (
                    <MovesItem moveName={item.move.name} moveLevel={item.version_group_details[0].level_learned_at} />
                )}
            />
        </View>
    </View >
    );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  }
});
export default MovesScreen;