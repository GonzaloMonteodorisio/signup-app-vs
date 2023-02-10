import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  useWindowDimensions,
  View,
  Platform,
  StatusBar,
} from 'react-native';

// import NoNetwork from '../NoNetwork';

import styles from './styles';

function Screen({
  children,
  backgroundColor = '#0B1626',
  headerComponent,
  footerComponent,
  safe = true,
  refreshControl,
}) {
  const { height, width } = useWindowDimensions();

  function HeaderComponent() {
    return headerComponent;
  }

  function FooterComponent() {
    return footerComponent;
  }

  function ShowChildren() {
    return children;
  }

  return (
    <SafeAreaView
      style={{
        height,
      }}
    >
      <StatusBar barStyle={`${Platform.OS === 'android' ? 'light-content' : 'dark-content'}`} />
      {/* <NoNetwork /> */}
      {headerComponent && (
        <HeaderComponent />
      )}
      {safe && (
        <ScrollView
          style={{
            width,
            backgroundColor,
            height,
          }}
          refreshControl={refreshControl}
        >
          <ShowChildren />
          <View
            style={{
              height: 120,
            }}
          />
        </ScrollView>
      )}
      {!safe && (
        <ShowChildren />
      )}
      {footerComponent && (
        <FooterComponent />
      )}
    </SafeAreaView>
  );
}

export default Screen;
