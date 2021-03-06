import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';
import {withNavigation} from '@react-navigation/compat';

import {TMDB_IMG_URL} from '@env';

import {uiColor, uiDimen, uiStyle} from '../../../../../constants';

const Header = () => {
  return (
    <View
      style={{
        width: '100%',
        height: 350,
        backgroundColor: 'red',
        position: 'relative',
      }}>
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          padding: uiDimen.md,
          flexDirection: 'row',
          justifyContent: 'space-between',
          zIndex: 100,
        }}>
        <TouchableOpacity
          onPress={() => {}}
          style={{
            backgroundColor: uiColor.bg,
            width: 40,
            height: 40,
            borderRadius: 20,
            padding: uiDimen.sm,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Icon />
        </TouchableOpacity>
        <View
          style={{
            backgroundColor: uiColor.bg,
            width: 40,
            height: 40,
            borderRadius: 20,
            padding: uiDimen.sm,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <IconMC />
        </View>
      </View>
      <View
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundColor: uiColor.accent1,
          opacity: 0.8,
          zIndex: 50,
        }}
      />
      {posterPath && (
        <Image
          source={{uri: `${TMDB_IMG_URL}${posterPath}`}}
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: uiColor.accent1,
            opacity: 0.8,
          }}
        />
      )}
    </View>
  );
};

Header.propTypes = {
  posterPath: PropTypes.string,
};

export default withNavigation(Header);
