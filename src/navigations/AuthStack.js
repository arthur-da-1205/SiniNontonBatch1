import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SignInScreen from '../ui/screens/auth/SignInScreen';
import SingUpScreen from '../ui/screens/auth/SignUpScreen';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SingUpScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
