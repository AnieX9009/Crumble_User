import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import {

    StyleSheet,
    Text,
    Button,
    TextInput,
    Image,
    StatusBar,
    View,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
const { width, height } = Dimensions.get('window');

import {
    responsiveFontSize,
    responsiveWidth,
    responsiveHeight
} from 'react-native-responsive-dimensions';
export default function Locationaccess() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <StatusBar
                hidden={false}
                barStyle='dark-content'
                animated={true}
                translucent backgroundColor="transparent"
            />
            <View style={{ height: responsiveHeight(40), justifyContent: 'center', width: responsiveWidth(100), alignItems: 'center' }}>
                <Image source={require('../assets/location.png')} style={{ width: responsiveWidth(75), height: responsiveHeight(40) }} />
            </View>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Signsuccess')
                }}
                style={styles.textWrapper}>
                <View style={{ flexDirection: 'row', width: responsiveWidth(50), justifyContent: 'space-evenly', alignItems: 'center' }}>
                    <Text style={styles.logButton}>
                        ACCESS LOCATION
                    </Text>
                    <View style={{
                        backgroundColor: 'rgba(236, 236, 236, 0.3)',
                        width: responsiveWidth(6.8),
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 50,
                        height: responsiveHeight(3.7)
                    }}>
                        <Image source={require('../assets/map-pin.png')}
                            style={{ width: responsiveWidth(4), height: responsiveHeight(2) }}
                        />
                    </View>
                </View>
            </TouchableOpacity>
            <View style={{ marginTop: '10%', width:responsiveWidth(85) }}>
                <Text style={{fontFamily: 'Sen-Regular', textAlign: 'center', color: "gray", fontSize: responsiveFontSize(1.7) }}>CRUMBLE WILL ACCESS YOUR</Text>
                <Text style={{fontFamily: 'Sen-Regular', textAlign: 'center', color: "gray", fontSize: responsiveFontSize(1.6),  alignSelf: 'center' }}>LOCATION ONLY WHILE USING THE APP</Text>
            </View>
        </View>

    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    textWrapper: {
        height: responsiveHeight(7.5),
        width: "85%",
        marginTop: "10%",
        backgroundColor: "#FF7622",
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 5,
    },
    logButton: {
        fontFamily: "Sen-SemiBold",
        fontSize: responsiveFontSize(1.7),
        color: "#FFFFFF",
    },
})