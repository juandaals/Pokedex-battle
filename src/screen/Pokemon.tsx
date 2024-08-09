import {View, Text, ScrollView} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {getPokemonDetailApi} from '../API/Pokemon';
import {isNull} from 'lodash';
import Header from '../components/Pokemon/Header';
import Types from '../components/Pokemon/Types';
import Stats from '../components/Stats';
import { PokemonContext } from '../context/PokemonContext';
import Favorite from '../components/Pokemon/Favorite';

type PokeType = {
  stats: any;
  types: any;
  sprites: any;
  id: number;
  name: string;
  type: string;
  order: number;
  image: string;
};
export default function Pokemon(props: any) {
  // navigation solo llega si se llama desde un componente de navegacion si no llega undefined
  // y se lo tienes que pasar como props
  const {
    route: {params},
    navigation,
} = props;
  const {state, actions} = useContext(PokemonContext
    )
  useEffect(() => {
  navigation.setOptions({
    headerRight: () => <Favorite/>,
  }); 
  }, [navigation,params.id])
  
  useEffect(() => {
    if(params.id){
    actions?.searchPokemon(params.id);
    }
  }, [params.id])

  if (!state?.pokemonDetails?.[params.id]) {
    return null
  }
  return (
    <ScrollView>
      <Header
        name={state?.pokemonDetails[params.id].name}
        order={state?.pokemonDetails[params.id].order}
        image={state?.pokemonDetails[params.id].sprites.other['official-artwork'].front_default}
        type={state?.pokemonDetails[params.id].types[0].type.name}
      />
      <Types types={state?.pokemonDetails[params.id].types} />
      <Stats type={state?.pokemonDetails[params.id].types[0].type.name} stats={state.pokemonDetails[params.id].stats} />
    </ScrollView>
  );
}
