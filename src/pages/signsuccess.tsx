import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import {
    ScrollView,
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
import {
    responsiveFontSize,
    responsiveWidth,
    responsiveHeight
} from 'react-native-responsive-dimensions';


export default function Signsuccess() {
    const navigation = useNavigation()

    return (
        <View style={styles.container} >
                  <StatusBar 
            hidden= {false}
            barStyle= 'dark-content'
         animated={true}
         translucent backgroundColor="transparent"
            />
            <View style={{ width: responsiveWidth(100), flexDirection: 'row', justifyContent: 'space-between', position: 'absolute', }}>
                <Image source={require('../assets/Vector144.png')} style={{ width: responsiveWidth(35), height: responsiveHeight(65) }} />
                <Image source={require('../assets/Ellipse1005.png')} style={{ width: responsiveWidth(50), height: responsiveHeight(40) }} />

            </View>
            <Image source={require('../assets/crumbleLogo.png')} style={{ width: responsiveWidth(65), height: responsiveHeight(32), marginTop: "10%" }} />
            <View style={styles.rectangle}>
                <View style={{ width: responsiveWidth(50), marginTop: "5%", marginLeft: "5%"}}>
                    <Text style={{ fontFamily: 'Sen-Bold', fontSize: 34, color: "black", marginTop: "10%" }}>Sign up successful!</Text>
                </View>
                <View style={{width: responsiveWidth(90), alignSelf: 'center', marginTop: "4%"}}>
                    <Text style={{fontFamily: 'Sen-SemiBold', color: '#391713', fontSize: responsiveFontSize(1.5)}}>Sweet success! You're in. Get ready to</Text>
                    <Text style={{fontFamily: 'Sen-SemiBold', color: '#391713', fontSize: responsiveFontSize(1.5)}}>satisfy your cravings and collect some</Text>
                    <Text style={{fontFamily: 'Sen-SemiBold', color: '#391713', fontSize: responsiveFontSize(1.5)}}>treats.</Text>

                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: responsiveWidth(90), marginTop: "5%", alignSelf: 'center'}}>
                    <Image source={require('../assets/Frame.png')} style={{width: responsiveWidth(6), height: responsiveHeight(3.5), marginBottom: "1%"}}/>
                    <Text style={{fontFamily: "Sen-Medium", fontSize: 14, color: "#391713"}}>  Explore nearby cafes and desserts.</Text>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', width: responsiveWidth(90),  marginTop: "5%",alignSelf: 'center'}}>
                    <Image source={require('../assets/Frame11.png')} style={{width: responsiveWidth(6), height: responsiveHeight(3.5), marginBottom: "1%"}}/>
                    <Text style={{fontFamily: "Sen-Medium", fontSize: 14, color: "#391713"}}>  Enjoy the loyalty programs.</Text>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', width: responsiveWidth(90), marginTop: "5%", alignSelf: 'center'}}>
                    <Image source={require('../assets/Frame22.png')} style={{width: responsiveWidth(5), height: responsiveHeight(3), marginBottom: "1%"}}/>
                    <Text style={{fontFamily: "Sen-Medium", fontSize: 14, color: "#391713"}}>   Surprise your loved ones.</Text>
                </View>
                <TouchableOpacity
                    style={styles.textWrapper} // Disable button color if form is invalid
                   
                    onPress={() => {
                    navigation.navigate('Home')
                    }}>
                    <Text style={styles.logButton}>
                        TREAT YOURSELF
                    </Text>
                </TouchableOpacity>
            </View>
        </View>

    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,

        alignItems: 'center',
        backgroundColor: '#FF7622',
    },
    rectangle: {
        backgroundColor: "#FFFFFF",
        marginTop: "15%",
        zIndex: 2,
        width: responsiveWidth(100),
        height: responsiveHeight(70),
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    textWrapper: {
        height: responsiveHeight(6),
        width: "45%",
marginRight: "5%",
        marginTop: "18%",
        backgroundColor: "#FF7622",
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end',
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 5,

    },
    logButton: {
        fontFamily: "Sen-Medium",
        fontSize: responsiveFontSize(1.7),
        color: "#FFFFFF",
    },
})