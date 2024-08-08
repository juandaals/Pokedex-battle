import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  Platform,
} from 'react-native';
import React from 'react';
import getColorByPokemonType from '../../utils/getColorByPokemonType';
import {capitalize} from 'lodash';

export default function Header(props: any) {
  const {name, order, image, type} = props;
  const color = getColorByPokemonType(type);
  const bgStyles = {backgroundColor: color, ...Styles.bgstyle};
  return (
    <>
      <View style={{position: 'relative'}}>
        <View style={bgStyles} />

        <View style={Styles.content}>
          <View style={Styles.header}>
            <Text style={Styles.name}>{capitalize(name)}</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={Styles.order}>#{`${order}`.padStart(3, '0')}</Text>
              <View style={{width: 10}} />
              <Text style={Styles.order}>{type}</Text>
            </View>
          </View>
          <View style={Styles.contentImage}>
            <Image source={{uri: image}} style={Styles.image} />
          </View>
        </View>
      </View>
    </>
  );
}

const Styles = StyleSheet.create({
  bgstyle: {
    width: '100%',
    height: 400,
    borderBottomEndRadius: 300,
    borderBottomLeftRadius: 300,
    transform: [{scaleX: 2}],
  },
  content: {
    marginTop: 30,
    width: '100%',
    position: 'absolute',
    paddingHorizontal: 20,
    top: 60,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  order: {
    color: '#fff',
    fontWeight: 'bold',
  },
  contentImage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
  },
  image: {
    width: Platform.OS === 'android' ? 100 : 250,
    height: 300,
    resizeMode: 'contain',
  },
});
