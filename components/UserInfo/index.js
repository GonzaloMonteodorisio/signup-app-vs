/* eslint-disable max-len */
import {
  View,
  Image,
  ImageBackground,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Text from '../Text';
import Pressable from '../Pressable';
import { t } from 'i18next';
import styles from './styles';

function ContainerUserInfo({
  cover,
  children,
  style,
  editable,
  onPressEditableCover,
  profilePhotoSize,
  rowAligned,
}) {
  if (cover) {
    return (
      <ImageBackground
        style={style}
        source={{ uri: cover }}
        resizeMode="cover"
      >
        {children}
        {editable && (
          <Pressable
            style={styles(profilePhotoSize, rowAligned).editableCover}
            onPress={onPressEditableCover}
          >
            {/* <SVGLocal name="Camera" /> */}
            <Text 
              backgroundColor='yellow'
              color='#000'
            >{t("edit-profile-photo-text")}</Text>
          </Pressable>
        )}
      </ImageBackground>
    );
  }
  return (
    <View style={style}>
      {children}
    </View>
  );
}

function UserInfo({
  rowAligned = false,
  displayName = '',
  profilePhoto = 'https://static.wikia.nocookie.net/naruto-shippuden-latino/images/7/75/Naruto_Uzumaki_HD.png/revision/latest?cb=20130321210236&path-prefix=es',
  profilePhotoSize = 136,
  editablePhoto,
  onPressEditablePhoto = () => {},
  _id,
  fontSize = 32,
}) {
  const navigation = useNavigation();
  return (
    <ContainerUserInfo
      style={styles(profilePhotoSize, rowAligned).container}
      profilePhotoSize
      rowAligned
    >
      <View style={styles(profilePhotoSize, rowAligned).imagebox}>
        <Image
          style={styles(profilePhotoSize, rowAligned).playerimg}
          source={{
            uri: profilePhoto,
          }}
        />
        {editablePhoto && (
          <Pressable
            style={styles(profilePhotoSize, rowAligned).editableProfilePhoto}
            onPress={onPressEditablePhoto}
          >
            <Text 
              backgroundColor='#74f016'
              color='#000'
            >{t("edit-profile-photo-text")}</Text>
          </Pressable>
        )}
      </View>
      <Text
        fontSize={fontSize}
        bold
        backgroundColor='transparent'
        textAlign="center"
        padding={1}
        onPress={() => navigation.navigate('UserProfile', { _id })}
      >
        {displayName}
      </Text>
    </ContainerUserInfo>
  );
}

export default UserInfo;
