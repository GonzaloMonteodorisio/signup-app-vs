import React, {
  useContext,
  useState,
} from 'react';

import AuthContext from '../../providers/AuthContext';

import { View } from 'react-native';
import Text from '../../components/Text';

import { t } from 'i18next';
import { clearAllLocalStorage } from '../../StorageData';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

function MyApp({ onLayout }) {
  const context = useContext(AuthContext);
  const navigation = useNavigation();
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const {
    userData,
  } = context;

  if (!userData) return null;

  async function logout() {
    clearAllLocalStorage();
    setIsLoggedIn(false);
    // setUserData();
    console.info('desloguado');
    navigation.navigate('Login');
  }

  return (
    <View style={styles.container} onLayout={onLayout}>
      <Text>My App</Text>
    </View>
  );
}

export default MyApp;