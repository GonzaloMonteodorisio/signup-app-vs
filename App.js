import React, { useState, useEffect } from 'react';

import * as SplashScreen from 'expo-splash-screen';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';

import * as LocalAuthentication from 'expo-local-authentication';

import AppProviderContext from './providers/AuthProvider';

import { storeData } from './StorageData';

import Routes from './components/AppRoutes';

import './config/i18next-config';
import { useTranslation } from 'react-i18next';

SplashScreen.preventAutoHideAsync()
  .catch(console.warn); // it's good to explicitly catch and inspect any error


export default function App() {
  const {t, i18n} = useTranslation();
  const [appIsReady, setAppIsReady] = useState(false);
  const [isBiometricSupported, setIsBiometricSupported] = useState(false);

  // Check if hardware support biometrics
  useEffect(() => {
    (async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      setIsBiometricSupported(compatible);
      console.info('isBiometricSupported: ', isBiometricSupported);
    })();
  });

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await storeData('init', 'initStatus');
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
        console.info('appIsReady: ', appIsReady);
        await SplashScreen.hideAsync();
      }
    }
    
    prepare();
  }, []);

  if (!appIsReady) {
    return null;
  }

  return (
    <AppProviderContext>
      <ActionSheetProvider>
        <Routes />
      </ActionSheetProvider>
    </AppProviderContext>
  );
}