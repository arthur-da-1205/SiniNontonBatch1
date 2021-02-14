import React from 'react';
import {Text, View} from 'react-native';

import {Space} from '../../../../../components';

import {uiDimen, uiStyle} from '../../../../../constants/';

const CastSection = () => {
  return (
    <View style={{paddingHorizontal: uiDimen.lg}}>
      <Text style={{...uiStyle.textBold, fontSize: 16}}>Cast</Text>
      <Space height={uiDimen.sm} />
    </View>
  );
};

export default CastSection;
