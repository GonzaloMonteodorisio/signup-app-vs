import React from 'react';
import { Alert, TouchableOpacity, Platform } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';

const LoginWithBiometry = async () => {
  const biometryType = await LocalAuthentication.getSupportedBiometryTypeAsync();

  if (biometryType === LocalAuthentication.BiometryType.None) {
    Alert.alert('Dispositivo no compatible', 'Su dispositivo no tiene capacidades de autenticación biométrica');
    return;
  }

  try {
    const result = await LocalAuthentication.authenticateAsync({
      promptMessage: 'Autenticación biométrica requerida',
    });

    if (result.success) {
      Alert.alert('Autenticación exitosa', 'Ha iniciado sesión con éxito');
    } else {
      Alert.alert('Autenticación fallida', 'Intente nuevamente');
    }
  } catch (e) {
    Alert.alert('Error', 'Ha ocurrido un error, inténtelo nuevamente');
  }
};

const App = () => {
  return (
    <TouchableOpacity onPress={LoginWithBiometry}>
      <Text>Iniciar sesión con biometría</Text>
    </TouchableOpacity>
  );
};

export default App;