import 'react-native-gesture-handler';
import React from 'react';

import AppContainer from './src/navigations/AppContainer';
import UserProvider from './src/commons/contexts/user';
import Header from './src/ui/screens/main/global/MovieDetailScreen/components/Header';

const App = () => {
  return (
    // <UserProvider>
    //   <AppContainer />
    // </UserProvider>
    <Header />
  );
};

export default App;
