import React, { useEffect } from 'react';
import { StyleSheet, View, ActivityIndicator, Text, Image } from 'react-native';


const SplashScreen = ({navigation}) => {
    
    useEffect(() => {
        setTimeout(()=>{
            navigation.navigate('Pokémon');
        }, 3000)
    }, []);

return (
    <View style={styles.screen}>
      <Image
        style={styles.pika}
        source={require('../assets/pikachuLogo.png')}
      />
      <ActivityIndicator style= {styles.indicator} size="large" color="#42BED3"/>
      <Text>Welcome to the Unofficial but Official Pokédex</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicator: {
      margin: 10,
  },
  pika: {
    height: 200,
    width: 200,
  }
});
export default SplashScreen;