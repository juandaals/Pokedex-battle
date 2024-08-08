import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';
import {AuthProvider} from './src/context/AuthContext';
import { PokemonProvider } from './src/context/PokemonContext';
export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <PokemonProvider>
          <Navigation />
        </PokemonProvider>
      </AuthProvider>
    </NavigationContainer>
  );
}
