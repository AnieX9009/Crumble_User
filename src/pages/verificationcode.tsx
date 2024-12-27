import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';


import {

    StyleSheet,
    Text,
    Button,
    TextInput,
    StatusBar,
    Image,
    View,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import {
    responsiveFontSize,
    responsiveWidth,
    responsiveHeight
} from 'react-native-responsive-dimensions';
const { width, height } = Dimensions.get('window');
import { OtpInput } from "react-native-otp-entry";
export default function Verificationcode() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <StatusBar
                hidden={false}
                barStyle='dark-content'
                animated={true}
                translucent backgroundColor="transparent"
            />
            <View style={styles.design}>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={require('../assets/Ellipse126.png')} style={{ width: responsiveWidth(12), height: responsiveHeight(12), zIndex: 1, position: 'absolute' }} />
                    <Image source={require('../assets/Ellipse127.png')} style={{ width: responsiveWidth(50), height: responsiveHeight(11), zIndex: 2 }} />
                </View>
                <Image source={require('../assets/Ellipse128.png')} style={{ width: responsiveWidth(25), height: responsiveHeight(12) }} />
            </View>
            <View style={{ flexDirection: 'row', width: responsiveWidth(55), alignSelf: 'flex-start', zIndex: 3, marginLeft: "6%", justifyContent: 'space-between', alignItems: 'center', height: responsiveHeight(15), marginTop: '5%' }}>
                <TouchableOpacity style={{
                    backgroundColor: "white",
                    borderRadius: 10,
                    height: responsiveHeight(5),
                    width: responsiveWidth(10),
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: "3%",
                    shadowOffset: { width: 5, height: 5 },
                    shadowOpacity: 0.5,
                    shadowRadius: 10,
                    elevation: 5,

                }}
                    onPress={() =>
                        navigation.goBack()}
                >
                    <Image source={require('../assets/Back.png')} style={{
                        width: responsiveWidth(2),
                        height: responsiveHeight(2)



                    }} />
                </TouchableOpacity>
                <Image source={require('../assets/crumbleLogo.png')} style={{ width: responsiveWidth(24), height: responsiveHeight(12), marginTop: "40%" }}></Image>
            </View>
            <Text style={{ fontSize: responsiveFontSize(4.5), fontFamily: 'Sen-Bold', color: "#000000", padding: 10, marginTop: "10%" }}>
                Verification Code
            </Text>
            <View style={{ marginRight: "10%" }}>
                <Text style={{ fontSize: responsiveFontSize(1.5), fontFamily: 'Sen-Regular', width: responsiveWidth(65), color: "#9796A1", textAlign: 'left' }}>
                    Please type the verification code sent to prelookstudio@gmail.com</Text>
            </View>
            <View style={styles.otpBar}>
                <OtpInput

                    numberOfDigits={4}
                    focusColor="#FF7622"
                    focusStickBlinkingDuration={500}
                    onTextChange={(text) => console.log(text)}
                    onFilled={(text) => console.log(`OTP is ${text}`)}
                    textInputProps={{
                        accessibilityLabel: "One-Time Password",

                    }}
                    theme={{
                        containerStyle: styles.containers,
                        pinCodeContainerStyle: styles.pinCodeContainer,
                        pinCodeTextStyle: styles.pinCodeText,


                    }}
                />
            </View>
            <View style={{ flexDirection: 'row', paddingTop: 30, width: responsiveWidth(100), alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}>
                <Text style={{
                    
                    fontSize: responsiveFontSize(1.5),
                    color: "#5B5B5E",
                    fontFamily: 'Sen-Bold',


                }} >
                    I don’t recevie a code!
                </Text>

                <TouchableOpacity>
                    <Text style={styles.forget}> Please resend</Text>
                </TouchableOpacity>

            </View>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Locationaccess')
                }}
                style={styles.textWrapper}>
                <Text style={styles.logButton}>
                    Verify OTP
                </Text>
            </TouchableOpacity>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,

        alignItems: 'center',
        backgroundColor: '#fff',
    },
    backButtonWrapper: {
        alignSelf: 'flex-start',
        left: 0,
        top: 0,
        marginTop: 10,
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#FFFFFF",
        width: responsiveWidth(10),
        borderRadius: 50,
        height: responsiveHeight(5),

        position: 'absolute',
        zIndex: 2
    },

    design: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: responsiveWidth(100),
        position: 'absolute',
        zIndex: 1,
        alignSelf: 'flex-start'

    },
    otpBar: {
        marginTop: "10%",
        width: responsiveWidth(100),
        alignItems: 'center',
        color: "orange",

    },
    // {Forget Password}
    forget: {
        color: '#F99026',
        fontSize: responsiveFontSize(1.5),
        fontFamily: 'Sen-Bold',


    },

    //{Continue button}
    textWrapper: {
        height: responsiveHeight(7),
        width: "85%",
        marginTop: "10%",
        backgroundColor: "#FF7622",
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 5, height: 10 },
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 5,
    },
    logButton: {
        fontFamily: "Sen-Medium",
        fontSize: responsiveFontSize(1.7),
        color: "#FFFFFF",
    },
    pinCodeText: {
        borderColor: "#FF7622",
        color: "#FF7622"
    },
    pinCodeContainer: {


        width: responsiveWidth(15)
    },
    containers: {

        width: responsiveWidth(80),

    }

})