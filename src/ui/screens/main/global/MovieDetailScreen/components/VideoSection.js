import React from 'react';
import {Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';

import {Space} from '../../../../../components';
import {uiColor, uiDimen, uiStyle} from '../../../../../constants';

const VideoSection = () => {
  return (
    <>
      <View style={{paddingHorizontal: uiDimen.lg}}>
        <Text style={{...uiStyle.textSemiBold, fontSize: 16}}>Videos</Text>
      </View>
      <Space height={uiDimen.sm} />

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{flexDirection: 'row'}}>
        <Space width={uiDimen.md} />
        {/* {videos?.map((item, index) => {
          return ( */}
        <TouchableOpacity
          onPress={() => {}}
          style={{
            marginHorizontal: uiDimen.sm,
            width: 126,
          }}>
          <Image
            source={require('../../../../../../assets/dummy/popular.png')}
            style={{
              width: '100%',
              height: 82,
              backgroundColor: uiColor.bg,
              borderRadius: uiDimen.sm,
            }}
          />
          <Text
            style={{...uiStyle.textRegular, fontSize: 14}}
            numberOfLines={1}>
            {/* {item.name} */}
          </Text>
        </TouchableOpacity>

        <Space width={uiDimen.md} />
        {/* {videos?.map((item, index) => {
          return ( */}
        <TouchableOpacity
          onPress={() => {}}
          style={{
            marginHorizontal: uiDimen.sm,
            width: 126,
          }}>
          <Image
            source={require('../../../../../../assets/dummy/popular.png')}
            style={{
              width: '100%',
              height: 82,
              backgroundColor: uiColor.bg,
              borderRadius: uiDimen.sm,
            }}
          />
          <Space height={uiDimen.sm / 2} />
          <Text
            style={{...uiStyle.textRegular, fontSize: 14}}
            numberOfLines={1}>
            {/* {item.name} */}
          </Text>
        </TouchableOpacity>

        <Space width={uiDimen.md} />
        {/* {videos?.map((item, index) => {
          return ( */}
        <TouchableOpacity
          onPress={() => {}}
          style={{
            marginHorizontal: uiDimen.sm,
            width: 126,
          }}>
          <Image
            source={require('../../../../../../assets/dummy/popular.png')}
            style={{
              width: '100%',
              height: 82,
              backgroundColor: uiColor.bg,
              borderRadius: uiDimen.sm,
            }}
          />
          <Space height={uiDimen.sm / 2} />
          <Text
            style={{...uiStyle.textRegular, fontSize: 14}}
            numberOfLines={1}>
            {/* {item.name} */}
          </Text>
        </TouchableOpacity>

        <Space width={uiDimen.md} />
        {/* {videos?.map((item, index) => {
          return ( */}
        <TouchableOpacity
          onPress={() => {}}
          style={{
            marginHorizontal: uiDimen.sm,
            width: 126,
          }}>
          <Image
            source={require('../../../../../../assets/dummy/popular.png')}
            style={{
              width: '100%',
              height: 82,
              backgroundColor: uiColor.bg,
              borderRadius: uiDimen.sm,
            }}
          />
          <Space height={uiDimen.sm / 2} />
          <Text
            style={{...uiStyle.textRegular, fontSize: 14}}
            numberOfLines={1}>
            {/* {item.name} */}
          </Text>
        </TouchableOpacity>

        <Space width={uiDimen.md} />
      </ScrollView>
    </>
  );
};

export default VideoSection;
