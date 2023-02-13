import React, {
  useContext,
  useEffect,
} from 'react';

import { Alert } from 'react-native';
import { enableScreens } from 'react-native-screens';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

import * as LocalAuthentication from 'expo-local-authentication';

import AuthContext from '../../providers/AuthContext';

import LoginScreen from '../../screens/Login';
import UserProfile from '../../screens/UserProfile';
import MyApp from '../../screens/MyApp';


const Stack = createStackNavigator();

export const routesDefinition = [
  {
    name: 'Login',
    component: LoginScreen,
  },
  {
    name: 'MyApp',
    component: MyApp
  },
  {
    name: 'UserProfile',
    component: UserProfile
  }
];

const loginAuthBiometric = async () => {
  try {
    const result = await LocalAuthentication.authenticateAsync();
    if (result.success) {
      Alert.alert('Autenticación exitosa', 'Has iniciado sesión con biometría.');
    } else {
      Alert.alert('Autenticación biometrica fallida', 'No se encuentra activada, o se produjo un error.');
    }
  } catch (e) {
    Alert.alert('Error', e.message);
  }
};

function AppRoutes() {
  enableScreens();
  const navigation = useNavigation();
  const context = useContext(AuthContext);
  const {
    logged,
    userData
  } = context;

  console.info('logged-AppRoutes', logged);
  console.info('context-AppRoutes', context);

  useEffect(() => {
    if (logged) {
      loginAuthBiometric();
      navigation.navigate('UserProfile', { userData });
    } else {
      navigation.navigate('Login');
    }
  }, [logged]);

  return (
    <Stack.Navigator 
      screenOptions={{ headerShown: false }} initialRouteName="MyApp"
    >
      {routesDefinition.map((route) => (
        <Stack.Screen
          name={route.name}
          component={route.component}
          key={`route-${route.name}`}
          options = {{
            logged,
          }}
        />
      ))}
    </Stack.Navigator>
  );
}

function Routes() {
  enableScreens();
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
}

export default Routes;
