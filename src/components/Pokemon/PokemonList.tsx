import React from 'react';
import {ActivityIndicator, FlatList, StyleSheet, Text} from 'react-native';
import PokemonCard from './PokemonCard';

type MyComponentProps = {
  loadPokemons: any;
  isNext: any;
  pokemons: {
    id: number;
    name: string;
    type: string;
    order: number;
    image: string;
  }[];
};

export default function PokemonList(props: MyComponentProps) {
  const {pokemons, loadPokemons, isNext} = props;

  const loadMore = () => {
    loadPokemons();
  };
  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsHorizontalScrollIndicator={false}
      keyExtractor={pokemon => String(pokemon.id)}
      renderItem={({item}) => <PokemonCard pokemon={item} />}
      contentContainerStyle={styles.flatListContentContainer}
      onEndReached={isNext && loadMore}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        isNext && (
          <ActivityIndicator
            size="large"
            style={styles.spinner}
            color="#AEAEAE"
          />
        )
      }
    />
  );
}

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
    marginTop: 50,
  },
  spinner: {
    marginTop: 20,
    marginBottom: 60,
  },
});
