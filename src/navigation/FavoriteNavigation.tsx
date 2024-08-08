import React from 'react';

import FavoriteScreen from '../screen/Favorite';
import Pokemon from '../screen/Pokemon';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Pokedex from '../screen/Pokedex';

const Stack = createNativeStackNavigator();

export default function FavoriteNavigation() {
  return (
    <Stack.Navigator initialRouteName="Pokedex" screenOptions={{}}>
      <Stack.Screen
        name="Pokedex"
        component={Pokedex}
        options={{title: '', headerTransparent: true}}
      />
      {/*   el headerTransparent: true es para que el header sea transparente //y se
      vea el fondo de la pantalla del typo de pokemon */}
      <Stack.Screen
        name="Pokemon"
        component={Pokemon}
        options={{title: '', headerTransparent: true}}
      />
    </Stack.Navigator>
  );
}
