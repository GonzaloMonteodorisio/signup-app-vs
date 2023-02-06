import React, {
  useContext,
  useState
} from 'react';

import AuthContext from '../../providers/AuthContext';

import { Image, View } from 'react-native';
import Text from '../../components/Text';

import styles from './styles';
import { t } from 'i18next';
import ButtonComponent from '../../components/Button';
import { clearAllLocalStorage } from '../../StorageData';
import { useNavigation } from '@react-navigation/native';
import TextComponent from '../../components/Text';

function HomeScreen({ onLayout }) {
  const context = useContext(AuthContext);
  const navigation = useNavigation();
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const {
    userData,
  } = context;
  console.info('userData-Home: ', userData);

  if (!userData) return null;

  async function logout() {
    clearAllLocalStorage();
    setIsLoggedIn(false);
    // setUserData();
    console.info(`${t("logged-out-message")}`);
    navigation.navigate('Login');
  }

  return (
    <View style={styles.container} onLayout={onLayout}>
      <Text>{t("screen")}</Text>
      <View>
        <TextComponent>{`${t("user-label")}`}: {userData.firstName} {userData.lastName}</TextComponent>
        <Image 
          style={styles.userImage}
          source={{
            uri: userData.profilePhoto || 'https://reactnative.dev/img/tiny_logo.png'
          }}
        />
      </View>
      <ButtonComponent
        title={t('sign-out')}
        onPress={logout}
      >
      </ButtonComponent>
    </View>
  );
}

export default HomeScreen;