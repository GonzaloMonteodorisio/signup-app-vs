import { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';

import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

import {
  login,
  validateEmailAndCode,
} from '../../libs/users';

import AuthContext from '../../providers/AuthContext';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Text from '../../components/Text';
import Toast from '../../components/Toast';

import styles from './styles';
import { t } from 'i18next';

function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [sendCode, setSendCode] = useState(false);
  const [showError, setShowError] = useState('');
  const context = useContext(AuthContext);

  async function onLogin() {
    try {
      if (code.trim() === '') {
        return setShowError('Inserte el código enviado por E-Mail');
      }
      const logged = await validateEmailAndCode(email, code);
      console.info('logged: ', logged);
      context.setToken(logged.jwt);
      return navigation.navigate('Home');
    } catch (err) {
      console.info('Error login: ', err);
      return setShowError('E-Mail o código no válidos');
    }
  }

  async function onSendCode() {
    try {
      if (email.trim() === '') {
        return setShowError('Inserte su email para continuar');
      }
      await login(email);
      return setSendCode(!sendCode);
    } catch (err) {
      console.error('Error login: ', err);
      return null;
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.formData}>
        <View style={styles.formDataFields}>
          { !sendCode && (
            <>
              <Input
                label="E-Mail"
                value={email}
                onChange={setEmail}
                keyboardType="email-address"
                placeholder={t("email-placeholder",{ extension: '@gmail.com' })}
              />
              <Button
                title={t("login-button")}
                onPress={() => onSendCode()}
                backgroundColor="#ffcc00"
                textColor="#000000"
                bold
                width='50%'
              />
            </>
          )}

          { sendCode && (
            <>
              <Input
                label="Inserte Código recibido"
                value={code}
                onChange={setCode}
                placeholder="FG778A"
              />
              <Button
                title="Ingresar"
                onPress={() => onLogin()}
                backgroundColor="#ffcc00"
                textColor="#000000"
                bold
                width='50%'
              />
            </>
          )}
        </View>
        { sendCode && (
          <Text
            onPress={() => onSendCode()}
            linkLine
          >
            {t("resend-code")}
          </Text>
        )}
      </View>
      {showError !== '' && (<Toast type="normal" onClose={() => setShowError('')}>{showError}</Toast>)}
      <StatusBar style="light"/>
    </View>
  );
}

export default LoginScreen;