import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import MovieDetailScreen from '../ui/screens/main/global/MovieDetailScreen';
import BottomTab from './HomeBottomTab';
import {ActivityIndicator} from 'react-native';
import {uiDimen} from '../ui/constants';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={BottomTab}></Stack.Screen>
      <Stack.Screen
        name="MovieDetail"
        component={MovieDetailScreen}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default MainStack;
