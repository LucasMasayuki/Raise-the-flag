import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from '../screens/SplashScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import SignInScreen from '../screens/SignInScreen';

import { RootStackParamList } from '../types';

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

const commonScreens = {
  Splash: {
    screen: SplashScreen,
    options: {
      headerShown: false,
    },
  },
  NotFound: {
    screen: NotFoundScreen,
    options: {
      headerShown: false,
    },
  }
};

const authScreens = {
  SignIn: {
    screen: SignInScreen,
    options: {
      headerShown: false,
    },
  },
};

// Then use them in your components by loopin    g over the object and creating screen configs
// You could extract this logic to a utility function and reuse it to simplify your code
export default function RootNavigator() {
  return (
    <Stack.Navigator>
      {
        Object.entries({
          ...commonScreens,
          ...authScreens,
        }).map(([name, component]) => (
          <Stack.Screen name={name} component={component.screen} options={component.options}/>
        ))
      }
    </Stack.Navigator>
  );
}