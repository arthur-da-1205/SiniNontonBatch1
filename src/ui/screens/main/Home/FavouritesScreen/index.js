import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';

import FavoriteMovies from './components/FavoriteMovies';
import FavouriteTVShows from './components/FavouriteTVShows';
import {createStackNavigator} from '@react-navigation/stack';

const Tab = createMaterialTopTabNavigator();

// function MyTabBar({state, descriptors, navigation, position}) {
//   return (
//     <View style={{flexDirection: 'row'}}>
//       {state.routes.map((route, index) => {
//         const {options} = descriptors[route.key];
//         const label =
//           options.tabBarLabel !== undefined
//             ? options.tabBarLabel
//             : options.title !== undefined
//             ? options.title
//             : route.name;

//         const isFocused = state.index === index;

//         const onPress = () => {
//           const event = navigation.emit({
//             type: 'tabPress',
//             target: route.key,
//             canPreventDefault: true,
//           });

//           if (!isFocused && !event.defaultPrevented) {
//             navigation.navigate(route.name);
//           }
//         };

//         const onLongPress = () => {
//           navigation.emit({
//             type: 'tabLongPress',
//             target: route.key,
//           });
//         };

//         const inputRange = state.routes.map((_, i) => i);
//         const opacity = Animated.interpolate(position, {
//           inputRange,
//           outputRange: inputRange.map((i) => (i === index ? 1 : 0)),
//         });

//         return (
//           <TouchableOpacity
//             accessibilityRole="button"
//             accessibilityState={isFocused ? {selected: true} : {}}
//             accessibilityLabel={options.tabBarAccessibilityLabel}
//             testID={options.tabBarTestID}
//             onPress={onPress}
//             onLongPress={onLongPress}
//             style={{flex: 1}}>
//             <Animated.Text style={{opacity}}>{label}</Animated.Text>
//           </TouchableOpacity>
//         );
//       })}
//     </View>
//   );
// }

const Stack = createStackNavigator();

const FavouritesScreen = () => {
  return (
    // <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
    //   <Tab.Screen name="Movies" component={FavouriteMovies} />
    //   <Tab.Screen name="TVShows" component={FavouriteTVShows} />
    // </Tab.Navigator>
    <>
      <SafeAreaView>
        <Text>Favourites</Text>
      </SafeAreaView>
      <Tab.Navigator>
        <Tab.Screen name="Movies" component={FavoriteMovies} />
        <Tab.Screen name="TvShows" component={FavouriteTVShows} />
      </Tab.Navigator>
    </>
  );
};

export default FavouritesScreen;
