import {View} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import {getPokemonApi, getPokemonByUrlApi} from '../API/Pokemon';
import PokemonList from '../components/Pokemon/PokemonList';
import {initial} from 'lodash';
import { PokemonContext } from '../context/PokemonContext';

type DataType = {
  id: number;
  name: string;
  type: string;
  order: number;
  image: string;
};

export default function Pokedex() {
const {state, actions} = useContext(PokemonContext);
  return (
    <View>
      <PokemonList
        pokemons={state?.pokedex}
        loadPokemons={actions?.loadPokedex}
        isNext={state?.nextUrl}
      />
    </View>
  );
}
