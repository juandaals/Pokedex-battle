import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export default function Favorite() {
  const {navigate} = useNavigation();
  return (
    <View>
      <Pressable onPress={() => navigate('Home')}>
        <Text>Favoritos</Text>
      </Pressable>
    </View>
  );
}
