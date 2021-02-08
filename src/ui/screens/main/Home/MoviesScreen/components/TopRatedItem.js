import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import IconM from 'react-native-vector-icons/MaterialIcons';

import { Space } from '../../../../../components';
import { uiColor, uiDimen, uiStyle } from '../../../../../constants';

const TopRatedItem = () => {
    return (
        <TouchableOpacity onPress={() => { }} style={styles.imageContainer}>
            <Image
                source={require('../../../../../../assets/dummy/toprated.png')}
                style={styles.image}
                resizeMode="cover"
            />
            <View style={styles.metaContainer}>
                <Text numberOfLines={1} style={styles.metaTitle}>
                    Abigail asdkfhadsfsajfkldasj asdkjfhadls asdfha{' '}
                </Text>
                <Space height={uiDimen.sm / 2} />
                <View style={styles.metaRating}>
                    <IconM name="star" color={uiColor.star} size={14} />
                    <Text style={styles.metaRatingText}>7/10</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    imageContainer: {
        borderRadius: uiDimen.md,
        marginHorizontal: uiDimen.sm
    },
    image: { width: 134, height: 180, borderRadius: uiDimen.md },
    metaContainer: {
        width: 134,
        flexDirection: 'column',
        padding: uiDimen.sm,
        backgroundColor: uiColor.accent1,
        opacity: 0.8,
        borderBottomLeftRadius: uiDimen.md,
        borderBottomRightRadius: uiDimen.md,
        justifyContent: 'center',
    },
    metaTitle: { ...uiStyle.textSemiBold, fontSize: 12 },
    metaRating: { flexDirection: 'row', alignItems: 'center' },
    metaRatingText: { ...uiStyle.textSemiBold, fontSize: 12 },
});

export default TopRatedItem;