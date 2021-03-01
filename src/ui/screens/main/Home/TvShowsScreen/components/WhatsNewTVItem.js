import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import IconM from 'react-native-vector-icons/MaterialIcons';
import {TMDB_IMG_URL} from '@env';
import PropTypes from 'prop-types';

import {Space} from '../../../../../components/';
import {uiColor, uiDimen, uiStyle} from '../../../../../constants';

const WhatsNewTVItem = ({data}) => {
  return (
    <TouchableOpacity style={styles.ImageContainer}>
      <Image style={styles.image} />
      <View style={styles.metaContainer}>
        <Text numberOfLines={1} style={styles.metaTitle}>
          Nama Acara TV
        </Text>
        <View style={styles.metaRating}>
          <Text style={styles.metaRatingText}>8/10</Text>
        </View>
        <Text numberOfLines={3} style={styles.metaDescriptionText}>
          Overview TV Show
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default WhatsNewTVItem;

const styles = StyleSheet.create({
  ImageContainer: {
    borderRadius: uiDimen.md,
    marginHorizontal: uiDimen.md,
  },

  image: {
    width: 95,
    height: 134,
    borderRadius: uiDimen.sm,
    position: 'absolute',
    marginLeft: uiDimen.md,
    zIndex: 1,
  },

  metaContainer: {
    width: 333,
    height: 131,
    padding: uiDimen.md,
    backgroundColor: uiColor.accent1,
    borderRadius: uiDimen.sm,
    marginVertical: uiDimen.md,
  },

  metaTitle: {
    ...uiStyle.textSemiBold,
    fontSize: 12,
    paddingLeft: 110,
  },

  metaRating: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 110,
  },

  metaRatingText: {
    ...uiStyle.textSemiBold,
    fontSize: 12,
  },

  metaDescriptionText: {
    ...uiStyle.textRegular,
    fontSize: 12,
    paddingLeft: 110,
  },
});
