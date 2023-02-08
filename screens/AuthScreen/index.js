import React, { useEffect } from "react";

import ButtonComponent from "../../components/Button";

import * as LocalAuthentication from 'expo-local-authentication';
import { Text, View } from "react-native";
import TextComponent from "../../components/Text";

import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

function AuthScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    async function authenticate() {
      const result = await LocalAuthentication.authenticateAsync();
      console.info('result_AuthScreen: ', result);
      if (result.success) {
        navigation.navigate('Login');
      } else {
        navigation.navigate('Auth');
      }
    }
    authenticate();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{color: '#fff'}}>Auth Screen</Text>
    </View>
  );
}

export default AuthScreen;