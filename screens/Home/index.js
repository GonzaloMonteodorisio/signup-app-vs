import React, {
  useContext,
  useState,
  useEffect,
} from 'react';

import AuthContext from '../../providers/AuthContext';

import { Button, View } from 'react-native';
import Text from '../../components/Text';

import styles from './styles';
import { t } from 'i18next';
import ButtonComponent from '../../components/Button';
import { signOut } from '../../libs/users';
// import { UserLogOut } from '../../components/UserLogout';

function HomeScreen({ onLayout }) {
  const context = useContext(AuthContext);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const {
    userData,
  } = context;

  if (!userData) return null;

  return (
    <View style={styles.container} onLayout={onLayout}>
      <Text>{t("screen")}</Text>
      {/* <UserLogOut /> */}
      <ButtonComponent
        title={t('sign-out')}
        onPress={async () => {
          const isLoggedOut = await signOut();
          isLoggedOut && setIsLoggedIn(false);
          navigation.navigate('Login');
        }}
      >
      </ButtonComponent>
    </View>
  );
}

export default HomeScreen;