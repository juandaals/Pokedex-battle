import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {capitalize, map} from 'lodash';
import getColorByPokemonType from '../../utils/getColorByPokemonType';

export default function Types(props: any) {
  const {types} = props;
  // para hacer las pildoras con el respectivo color de cada pokemon
  return (
    <View style={styles.content}>
      {map(types, (item, index) => (
        <View
          key={index}
          style={{
            ...styles.pill,
            backgroundColor: getColorByPokemonType(item.type.name),
          }}>
          <Text>{capitalize(item.type.name)}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pill: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 20,
    marginHorizontal: 10,
  },
});
