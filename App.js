import React, { useState, useEffect, useCallback } from 'react';

import * as SplashScreen from 'expo-splash-screen';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';

import AppProviderContext from './providers/AuthProvider';

import { storeData } from './StorageData';

import Routes from './components/AppRoutes';

import './config/i18next-config';
// import i18n from './config/i18n';
import { useTranslation } from 'react-i18next';
// console.info('i18n: ', i18n);

SplashScreen.preventAutoHideAsync()
  .catch(console.warn); // it's good to explicitly catch and inspect any error


export default function App() {
  const {t, i18n} = useTranslation();
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await storeData('init', 'initStatus');
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        // await new Promise(resolve => setTimeout(resolve, 1000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
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