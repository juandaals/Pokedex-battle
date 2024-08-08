import React from 'react';
import Favorite from '../screen/Favorite';
import {Image} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigation from './TabNavigation';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Settings" component={Favorite} />
      <Stack.Screen
        name="Home"
        options={{
          headerShown: false,
        }}
        component={TabNavigation}
      />
    </Stack.Navigator>
  );
}
