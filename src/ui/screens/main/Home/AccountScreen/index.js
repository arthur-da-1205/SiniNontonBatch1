import React, {useContext} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {UserContext} from '../../../../../commons/contexts/user';
import {Button} from '../../../../components';
import auth from '@react-native-firebase/auth';

const AccountScreen = () => {
  const {user} = useContext(UserContext);

  const handleSignOut = () => {
    auth().signOut();
  };

  return (
    <SafeAreaView>
      <Text>Halo {user?.displayName}</Text>
      <View style={{bottom: 0}}>
        <Button title="Sign Out" onPress={handleSignOut} />
      </View>
    </SafeAreaView>
  );
};

export default AccountScreen;
