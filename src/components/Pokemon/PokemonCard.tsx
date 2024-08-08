import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import React from 'react';
import getColorByPokemonType from '../../utils/getColorByPokemonType';
import {capitalize} from 'lodash';
import {useNavigation} from '@react-navigation/native';

export default function PokemonCard(props: any) {
  const {pokemon} = props;
  const navigation = useNavigation();
  const pokemonColor = getColorByPokemonType(pokemon.type);
  const bgStyles = {backgroundColor: pokemonColor, ...styles.bgStyles};

  const getPokemon = () => {
    navigation.navigate('Pokemon', {id: pokemon.id});
  };
  return (
    <TouchableWithoutFeedback onPress={getPokemon}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={bgStyles}>
            <Text style={styles.number}>
              #{`${pokemon.order.toString()}`.padStart(3, '0')}
            </Text>
            <Text style={styles.name}>{capitalize(pokemon.name)}</Text>
            <Image source={{uri: pokemon.image}} style={styles.image} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 130,
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  bgStyles: {
    flex: 1,
    borderRadius: 15,
    padding: 10,
  },
  image: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    width: 100,
    height: 90,
  },
  name: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
    paddingTop: 10,
  },
  number: {
    position: 'absolute',
    right: 10,
    top: 10,
    color: '#fff',
    fontSize: 11,
  },
});
