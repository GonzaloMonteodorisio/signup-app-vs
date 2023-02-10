/* eslint-disable max-len */
import {
  View,
  Image,
  ImageBackground,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Text from '../Text';
// import Lifes from '../Lifes';
// import SVGLocal from '../SVGLocal';
import Pressable from '../Pressable';

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
            >Edit photo</Text>
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
  // showLifes = false,
  rowAligned = false,
  displayName = '',
  profilePhoto = 'https://static.wikia.nocookie.net/naruto-shippuden-latino/images/7/75/Naruto_Uzumaki_HD.png/revision/latest?cb=20130321210236&path-prefix=es',
  profilePhotoSize = 136,
  // coverPhoto = 'https://res.cloudinary.com/practicaldev/image/fetch/s--XAiWRSsE--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2rukvu3dz6ztgqrlxsq8.png',
  // score = 0,
  // lifes = 0,
  // editableCover,
  editablePhoto,
  onPressEditablePhoto = () => {},
  // onPressEditableCover = () => {},
  _id,
  fontSize = 32,
}) {
  const navigation = useNavigation();
  return (
    <ContainerUserInfo
      style={styles(profilePhotoSize, rowAligned).container}
      // cover={coverPhoto}
      // editable={editableCover}
      // onPressEditableCover={onPressEditableCover}
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
        {/* {showLifes && <Lifes paddingbottom absolute>{`${lifes}`}</Lifes>} */}
        {editablePhoto && (
          <Pressable
            style={styles(profilePhotoSize, rowAligned).editableProfilePhoto}
            onPress={onPressEditablePhoto}
          >
            <Text 
              backgroundColor='yellow'
              color='#000'
            >Edit photo</Text>
          </Pressable>
        )}
      </View>
      <Text
        fontSize={fontSize}
        bold
        backgroundColor='transparent'
        // width={coverPhoto ? '100%' : undefined}
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
