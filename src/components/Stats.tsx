import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {map, capitalize} from 'lodash';
import getColorByPokemonType from '../utils/getColorByPokemonType';

export default function Stats(props: any) {
  const {stats} = props;
  const {type} = props;
  const color = getColorByPokemonType(type);
  const bgStyles = {backgroundColor: color};

  const barStyles = (num: any) => {
    /*  sirve para poner las stats de un color si es mas bajo y si es mal alto otro color
    const negative = num > 49 ? color : 'red'; */
    return {
      backgroundColor: color,
      width: `${num}%`,
    };
  };
  return (
    <View style={styles.content}>
      <Text style={styles.title}>Base Stats</Text>
      {map(stats, (item, index) => (
        <View key={index} style={styles.block}>
          <View style={styles.blockTitle}>
            <Text style={styles.statName}>{capitalize(item.stat.name)}</Text>
          </View>
          <View style={styles.blockInfo}>
            <Text style={styles.number}>{item.base_stat}</Text>
            <View style={styles.bgBar}>
              <View style={[styles.bar, barStyles(item.base_stat)]} />
            </View>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
    marginTop: 40,
    marginBottom: 80,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  block: {
    flexDirection: 'row',
    paddingVertical: 5,
  },
  blockTitle: {
    width: '30%',
  },
  statName: {
    fontSize: 13,
    color: '#6b6b6b',
  },
  blockInfo: {
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  number: {
    width: '12%',
    fontSize: 12,
  },
  bgBar: {
    backgroundColor: '#dedede',
    height: 5,
    width: '88%',
    borderRadius: 20,
    overflow: 'hidden',
  },
  bar: {
    /*  backgroundColor: 'red',
    width: '40%', */
    height: 5,
    borderRadius: 20,
  },
});
