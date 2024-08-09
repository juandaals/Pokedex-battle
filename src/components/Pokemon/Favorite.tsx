import React from 'react'
import {Image} from 'react-native';


export default function Favorite() {
 const addFavorite = () => {
   console.log('addFavorite')
 }

    return (
      <Image
        source={require('./../../assets/FavoriteIcon.webp')}
        style={{marginRight: 20, width: 35, height: 35, marginBottom: 20}}
        onProgress={() => addFavorite}
      />
    );

}