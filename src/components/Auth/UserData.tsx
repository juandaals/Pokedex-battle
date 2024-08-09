import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import useAuth from '../../hooks/useAuth';

export default function UserData() {
  const {state,actions} = useAuth();
  return (
    <View style={styles.content}>
      <View style={styles.titleBlock}></View>
      <Text style={styles.title}>Bienvenido,</Text>
      <Text style={styles.title}>
        {/* Llamamos de state que esta la variable auth la cual trae la data
 de nuestro usuario en este caso el firstName y lastName */}
        {`${state?.auth.fistName} ${state?.auth.lastName}`}{' '}
      </Text>

      <View style={styles.dataContent}>
        <ItemMenu
          title="Nombre"
          text={`${state?.auth.fistName} ${state?.auth.lastName}`}
        />
        <ItemMenu title="UserName" text={`${state?.auth.Username}`} />
        <ItemMenu title="Email" text={`${state?.auth.email}`} />
        <ItemMenu title="Total Favoritos" text={`0 Pokemons`} />
      </View>
      <View style={styles.btnLogout}>
        <Button title="Descontectarse" onPress={actions?.logout} />
      </View>
    </View>
  );
}

function ItemMenu(props:any ) {
  const {title, text} = props;
  return ( 
   <View style={styles.itemMenu}> 
    <Text style={styles.itemMenuTitle}>{title}</Text>
    <Text>{text}</Text>
   </View> 
  )
}

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  titleBlock: {
    marginBottom: 30,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  dataContent: {
    marginBottom: 20,
  },
  itemMenu: {
    flexDirection: 'row',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: '#CFCFCF',
  },
  itemMenuTitle: {
    fontWeight: 'bold',
    paddingRight: 10,
    width: 120,
  },
  btnLogout:{
    paddingTop: 20,
  }
});