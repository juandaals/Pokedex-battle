import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Favorite from '../screen/Favorite';
import Acount from '../screen/Acount';
import {Image} from 'react-native';
import FavoriteNavigation from './FavoriteNavigation';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          tabBarLabel: 'Favoritos',
          title: 'Favoritoss',
          tabBarIcon: () => Favorites(),
        }}
      />
      <Tab.Screen
        name="Main"
        component={FavoriteNavigation}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: () => redenderPokeball(),
        }}
      />
      <Tab.Screen
        name="Mi cuenta"
        component={Acount}
        options={{
          tabBarLabel: 'Mi cuenta',
          tabBarIcon: () => miAccount(),
        }}
      />
    </Tab.Navigator>
  );
}

function redenderPokeball() {
  return (
    <Image
      source={require('../assets/pokeball.png')}
      style={{width: 75, height: 75, top: -15}}
    />
  );
}
function miAccount() {
  return (
    <Image
      source={require('../assets/Account.png')}
      style={{width: 40, height: 40, top: -15}}
    />
  );
}

function Favorites() {
  return (
    <Image
      source={require('../assets/Favorites.webp')}
      style={{width: 40, height: 40, top: -15}}
    />
  );
}
