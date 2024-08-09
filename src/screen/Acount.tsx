import {View, Text} from 'react-native';
import React from 'react';
import LoginForm from '../components/Auth/LoginForm';
import UserData from '../components/Auth/UserData';
import useAuth from '../hooks/useAuth';

export default function Acount() {
  /* //aqui le pasamos useAuth para que nos devuelva el estado 
  y las acciones como state es optional ponemos el signo ? 
  y llamamos a auth que esta adentro */ 
  const {state} = useAuth();

  return <View>{state?.auth ? <UserData /> : <LoginForm />}</View>;
}
