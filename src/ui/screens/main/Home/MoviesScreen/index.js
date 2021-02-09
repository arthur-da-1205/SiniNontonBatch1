import React from 'react';
import {
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import { Input, Space } from '../../../../components';
import { uiDimen, uiStyle } from '../../../../constants';
import PopularSection from './components/PopularSection';
import TopRatedSection from './components/TopRatedSection';

const MoviesScreen = () => {
    return (
        <SafeAreaView style={uiStyle.baseContainer}>
            <Space height={uiDimen.md} />
            <View style={styles.logoContainer}>
                <Image
                    source={require('../../../../../assets/images/logo-128.png')}
                    style={styles.logoImage}
                />
                <Text style={styles.logoText}>SINI NONTON</Text>
            </View>
            <Space height={uiDimen.md} />

            <View style={{ marginHorizontal: uiDimen.lg }}>
                <Input
                    fullCircle
                    placeholder="Search ..."
                    value=""
                    onChange={() => { }}
                />
            </View>
            <Space height={uiDimen.lg} />
            <ScrollView showsVerticalScrollIndicator={false}>

                <Text style={styles.headingText}>Movies</Text>
                <Space height={uiDimen.md} />

                <PopularSection />
                <Space height={uiDimen.lg} />

                <TopRatedSection />
                <Space height={uiDimen.md} />

                <Text style={{ marginLeft: uiDimen.lg, fontSize: 16 }}>What's New</Text>
                <Space height={uiDimen.xl + 3} />
                <View style={{ marginBottom: uiDimen.lg, marginHorizontal: uiDimen.lg, width: 363, height: 131, flexDirection: 'row', backgroundColor: "pink" }}>
                    <View style={{ backgroundColor: "green", height: 134, width: 95, left: uiDimen.md, bottom: 16 }}>

                    </View>
                    <Text style={{ marginLeft: uiDimen.lg, }}>
                        ABCDEFGH
                    </Text>
                </View>

                <View style={{ marginBottom: uiDimen.lg, marginHorizontal: uiDimen.lg, width: 363, height: 131, flexDirection: 'row', backgroundColor: "pink" }}>
                    <View style={{ backgroundColor: "green", height: 134, width: 95, left: uiDimen.md, bottom: 16 }}>

                    </View>
                    <Text style={{ marginLeft: uiDimen.lg, }}>
                        ABCDEFGH
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    logoContainer: {
        flexDirection: 'row',
        marginHorizontal: uiDimen.lg,
        alignItems: 'center',
    },
    logoImage: { width: 40, height: 40 },
    logoText: { ...uiStyle.textBold, fontSize: 18 },
    headingText: { ...uiStyle.textBold, fontSize: 20, textAlign: 'center' },
});
export default MoviesScreen;