import React, {
  useContext,
  useEffect,
} from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';

import AuthContext from '../../providers/AuthContext';

import LoginScreen from '../../screens/Login';
import HomeScreen from '../../screens/Home';
import AuthScreen from '../../screens/AuthScreen';
import MyApp from '../../screens/MyApp';

const Stack = createStackNavigator();

export const routesDefinition = [
  {
    name: 'Login',
    component: LoginScreen,
  },
  {
    name: 'Home',
    component: HomeScreen,
  },
  {
    name: 'Auth',
    component: AuthScreen,
  },
  {
    name: 'MyApp',
    component: MyApp
  }
];

function AppRoutes() {
  const navigation = useNavigation();
  const context = useContext(AuthContext);
  const {
    logged,
    isAuthenticated
  } = context;

  console.info('isAuthenticated-AppRoutes: ', isAuthenticated);

  useEffect(() => {
    if (logged && isAuthenticated) {
      navigation.navigate('Home');
    } else if (isAuthenticated) {
      navigation.navigate('Login');
    } else {
      navigation.navigate('Auth');
    }
  }, [logged, isAuthenticated]);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="MyApp">
      {routesDefinition.map((route) => (
        <Stack.Screen
          name={route.name}
          component={route.component}
          key={`route-${route.name}`}
          options = {{
            logged,
            isAuthenticated
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
