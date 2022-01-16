import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import SplashScreen from './screens/SplashScreen';
import MovesScreen from './screens/MovesScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Load" component={SplashScreen} options={{ headerShown: false }}/> 
        <Stack.Screen name="Pokémon" component={HomeScreen} options={{headerLeft:() => false }}/>
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Moves" component={MovesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}