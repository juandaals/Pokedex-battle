import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Keyboard,
  Button,
} from 'react-native';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {user, UserDetails} from '../../utils/UserDB';
import useAuth from '../../hooks/useAuth';

export default function LoginForm() {
  const [errorr, setError] = useState('');
  const {actions} = useAuth();
  console.log(useAuth());

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    // validateOnChange: false hace que no se valide al cambiar el valor
    validateOnChange: false,
    onSubmit: formValue => {
      setError('');
      const {username, password} = formValue;

      if (username !== user.Username || password !== user.password) {
        setError('Usuario y la contraseña no son correctos');
      } else {
        actions?.login(UserDetails);
      }
    },
  });
  return (
    <View>
      <Text style={styles.title}>Iniciar sesion</Text>
      <TextInput
        placeholder="Nombre de usuario"
        style={styles.input}
        //el autoCapitalize hace que no ponga la primera letra en mayuscula
        autoCapitalize="none"
        // este value hace que el input se llene con el valor que le pasamos
        value={formik.values.username}
        /*  queremos que => de formik seteé el field el que le 
        voy a decir entonces quiero que en la propiedad 
        username me setees el valor text */
        // el onChangeText es para que se actualize el valor del input
        onChangeText={text => formik.setFieldValue('username', text)}
      />
      <TextInput
        placeholder="Contraseña"
        style={styles.input}
        autoCapitalize="none"
        secureTextEntry={true}
        // el valor que se va a mostrar en el input
        value={formik.values.password}
        onChangeText={text => formik.setFieldValue('password', text)}
      />
      {/* para solucionar el problema del onPress aun que deja pasar  el formik 
      hay que ponerle una funcion para que no aparesca error de button */}
      <Button title="Iniciar sesion" onPress={ () => formik.handleSubmit()} />
      <Text style={styles.error}>{formik.errors.username}</Text>
      <Text style={styles.error}>{formik.errors.password}</Text>
      <Text style={styles.error}>{errorr}</Text>
    </View>
  );
}

function initialValues() {
  return {username: '', password: ''};
}

function validationSchema() {
  return {
    username: Yup.string().required('El nombre de usuario es requerido'),
    password: Yup.string().required('La contraseña es requerida'),
  };
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 15,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  error: {
    textAlign: 'center',
    color: 'red',
    marginTop: 20,
  },
});
