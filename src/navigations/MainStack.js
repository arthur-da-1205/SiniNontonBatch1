import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import MovieDetailScreen from '../ui/screens/main/global/MovieDetailScreen';
import HomeBottomTab from './HomeBottomTab';
import TopNavigation from '../ui/screens/main/Home/FavouritesScreen';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={HomeBottomTab}></Stack.Screen>
      <Stack.Screen name="Favourite" component={TopNavigation} />
      <Stack.Screen
        name="MovieDetail"
        component={MovieDetailScreen}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default MainStack;
