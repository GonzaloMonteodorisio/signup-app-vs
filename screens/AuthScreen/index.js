import React, { useEffect } from "react";

import ButtonComponent from "../../components/Button";

import * as LocalAuthentication from 'expo-local-authentication';
import { Text, View } from "react-native";
import TextComponent from "../../components/Text";

import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

function AuthScreen({ onAuthenticate, options }) {
  const navigation = useNavigation();
  console.info('onAuthenticate: ', onAuthenticate);
  console.info('options: ', options);

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
    </View>
  );
}

export default AuthScreen;