import React, {
  useContext,
  useEffect,
  useState,
} from 'react';

import {
  View,
} from 'react-native';

import * as ImagePicker from 'expo-image-picker';
import Screen from '../../components/Screen';
import UserInfo from '../../components/UserInfo';
import Loading from '../../components/Loading';
import AuthContext from '../../providers/AuthContext';
import { uploadFile } from '../../libs/api';
import {
  getUserData,
  updateUser,
} from '../../libs/users';
import styles from './styles';

// import SocialNetworks from './components/SocialNetworks';
import UserBasicInformation from './components/UserBasicInformation';

function UserProfile({
  route,
}) {
  const context = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState();
  const [loading, setLoading] = useState(false);

  const {
    userData,
    setUserData,
  } = context;

  const { _id } = route.params;

  console.info('route-UserProfile: ', route);
  console.info('context-UserProfile: ', context);

  async function fetchUserInfo() {
    try {
      setLoading(true);
      if (!_id) {
        setUserInfo(userData);
      } else {
        const response = await getUserData(_id, true);
        setUserInfo(response);
      }
    } catch (err) {
      console.error('error fetchUserInfo: ', err);
    } finally {
      setLoading(false);
    }
  }

  async function pickImage(type = 'photo') {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.cancelled) {
        setLoading(true);
        const key = type === 'photo' ? 'profilePhoto' : 'coverPhoto';
        const uploaded = await uploadFile(result, 'profilePhotos');
        const updated = await updateUser({
          [key]: uploaded.resolutions['640x640'].url,
        });
        setUserData(updated.userData, updated.jwt);
        setUserInfo(updated.userData);
      }
    } catch (err) {
      console.error('Error updating profilePhoto: ', err);
    } finally {
      setLoading(false);
    }
  }

  async function onChangeUserInfo(type, text, main = false) {
    try {
      setLoading(true);
      let updated = null;
      if (main) {
        updated = await updateUser({
          [type]: text,
        });
      } else {
        updated = await updateUser({
          extra: { [type]: text },
        });
      }
      setUserData(updated.userData, updated.jwt);
      setUserInfo(updated.userData);
    } catch (err) {
      console.error('Error updating userdata: ', err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchUserInfo();
  }, [_id]);

  if (!userInfo) return null;
  console.info('UserProfile userInfo: ', userInfo);
  return (
    <Screen>
      <UserInfo
        // coverPhoto={userInfo.coverPhoto}
        profilePhoto={userInfo.profilePhoto}
        displayName={`${userInfo.firstName} ${userInfo.lastName}`}
        editablePhoto={!_id}
        // editableCover={!_id}
        editableFirstName={!_id}
        editableLastName={!_id}
        onPressEditablePhoto={() => { pickImage('photo'); }}
        // onPressEditableCover={() => { pickImage('cover'); }}
      />
      <View style={styles.container}>
        {/* <SocialNetworks
          onConfirm={(sn, value) => onChangeUserInfo(sn, value)}
          github={userInfo?.extra?.github}
          telegram={userInfo?.extra?.telegram}
          twitter={userInfo?.extra?.twitter}
          editable={!_id}
        /> */}
        <UserBasicInformation
          firstName={userInfo.firstName}
          lastName={userInfo.lastName}
          onConfirm={(sn, value) => onChangeUserInfo(sn, value, true)}
          editable={!_id}
        />
      </View>
      {loading && <Loading />}
    </Screen>
  );
}

export default UserProfile;
