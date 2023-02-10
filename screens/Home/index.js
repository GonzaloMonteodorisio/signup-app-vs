import React, {
  useContext,
  useEffect,
  useState
} from 'react';

import { Image, View } from 'react-native';

import ButtonComponent from '../../components/Button';
import TextComponent from '../../components/Text';
import PressableComponent from '../../components/Pressable';

import AuthContext from '../../providers/AuthContext';

import { clearAllLocalStorage } from '../../StorageData';

import { useNavigation } from '@react-navigation/native';

import { t } from 'i18next';

import styles from './styles';
import InputComponent from '../../components/Input';

function HomeScreen() {
  const context = useContext(AuthContext);
  const navigation = useNavigation();
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [firstName, setFirstName] = useState(`${t('default-first-name')}`);
  const [lastName, setLastName] = useState(`${t('default-last-name')}`);
  const [profilePhoto, setProfilePhoto] = useState('https://reactnative.dev/img/tiny_logo.png');
  const [editFirstName, setEditFirstName] = useState(false);
  const [editLastName, setEditLastName] = useState(false);

  const handleEditFirstName = () => {
    setEditFirstName(true);
  };

  const handleEditLastName = () => {
    setEditLastName(true);
  };

  const {
    userData,
  } = context;
  console.info('userData-Home: ', userData);

  if (!userData) return null;

  // useEffect(() => {
  //   context.firstName && setFirstName(context.firstName);
  //   context.lastName && setLastName(context.lastName);
  //   context.profilePhoto && setProfilePhoto(context.profilePhoto);
  //   // setEditFirstName(false);
  //   // setEditLastName(false);
  // }, [firstName, lastName, profilePhoto, editFirstName, editLastName]);

  async function logout() {
    clearAllLocalStorage();
    setIsLoggedIn(false);
    // setUserData();
    console.info(`${t("logged-out-message")}`);
    navigation.navigate('Login');
  }

  return (
    // <View style={styles.container}>
    //   <TextComponent>{t("screen")}</TextComponent>
    //   <View>
    //     <TextComponent>{`${t("user-label")}`}: {userData.firstName} {userData.lastName}</TextComponent>
    //     <Image 
    //       style={styles.userImage}
    //       source={{
    //         uri: userData.profilePhoto || 'https://reactnative.dev/img/tiny_logo.png'
    //       }}
    //     />
    //   </View>
    //   <ButtonComponent
    //     title={t('sign-out')}
    //     onPress={logout}
    //   >
    //   </ButtonComponent>
    // </View>

    <View style={styles.container}>
      <TextComponent fontSize={40}>{t("screen")}</TextComponent>
      <Image
        source={{ 
          uri: userData.profilePhoto || 'https://reactnative.dev/img/tiny_logo.png' 
        }}
        style={styles.userImage}
      />
      {editFirstName ? (
        <InputComponent
          value={firstName}
          onChangeText={(text) => setFirstName(text)}
          style={styles.editNames}
        />
      ) : (
        <PressableComponent onPress={handleEditFirstName}>
          <TextComponent fontSize={30}>{firstName}</TextComponent>
        </PressableComponent>
      )}
      {editLastName ? (
        <InputComponent
          value={lastName}
          onChangeText={
            (text) => {
              setLastName(text);
              setEditLastName(false);
            }
          }
          style={styles.editNames}
        />
      ) : (
        <PressableComponent onPress={handleEditLastName}>
          <TextComponent fontSize={30}>{lastName}</TextComponent>
        </PressableComponent>
      )}
    <ButtonComponent
      title={t('sign-out')}
      onPress={logout}
      width='50%'
      fontSize={20}
      textColor='#000'
      bold
    />
    </View>
  );
};

export default HomeScreen;