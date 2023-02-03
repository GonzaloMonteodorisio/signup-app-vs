import React, {
  useContext,
  useState,
  useEffect,
} from 'react';

import AuthContext from '../../providers/AuthContext';

import { View } from 'react-native';
import Text from '../../components/Text';

import styles from './styles';
import { t } from 'i18next';

function HomeScreen({ onLayout }) {
  const context = useContext(AuthContext);
  const {
    userData,
  } = context;

  if (!userData) return null;

  return (
    <View style={styles.container} onLayout={onLayout}>
      <Text>{t("screen")}</Text>
    </View>
  );
}

export default HomeScreen;