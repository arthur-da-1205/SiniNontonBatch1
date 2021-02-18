import 'react-native-gesture-handler';
import React from 'react';

import TopNavFavourites from './src/ui/screens/main/Home/FavouritesScreen/navigation/TopNavFavourites';
import AppContainer from './src/navigations/AppContainer';
import UserProvider from './src/commons/contexts/user';

const App = () => {
  return (
    <UserProvider>
      <AppContainer />
    </UserProvider>
    // <TopNavFavourites />
  );
};

export default App;
