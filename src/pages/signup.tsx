import React, { useState, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';

import {
    ScrollView,
    StyleSheet,
    Text,
    Button,
    TextInput,
    Image,
    View,
    TouchableOpacity,
    StatusBar,
    Dimensions,
} from 'react-native';

import {
    responsiveFontSize,
    responsiveWidth,
    responsiveHeight
} from 'react-native-responsive-dimensions';



export default function Signup() {
    const input1Ref = useRef<TextInput>(null);
    const input2Ref = useRef<TextInput>(null);
    const input3Ref = useRef<TextInput>(null);
    const input4Ref = useRef<TextInput>(null);
    const input5Ref = useRef<TextInput>(null);
    const [secureEntry, setSecureEntry] = useState(true);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(true);
    const navigation = useNavigation()
    const togglePasswordVisibility = () => {
        setSecureEntry(!secureEntry);
        setConfirmPasswordVisible(!confirmPasswordVisible);
    };
    const [name, setName] = useState('');
    const [emailOrPhone, setEmailOrPhone] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');

    // Check if both email/phone and password are filled
    const isFormValid = name.trim() !== '' && emailOrPhone.trim() !== '' && password.trim() !== '' && rePassword.trim() !== '';


    return (
        <View style={styles.container} >
                    <StatusBar 
            hidden= {false}
            barStyle= 'dark-content'
         animated={true}
         translucent backgroundColor="transparent"
            />
            <View style={{ flexDirection: 'row', width: responsiveWidth(100), zIndex: 1, position: 'absolute', justifyContent: 'space-between' }}>
                <Image source={require('../assets/Ellipse2.png')} style={{ width: responsiveWidth(54), height: responsiveHeight(26) }} />
                <Image source={require('../assets/Vector142.png')}
                    style={{
                        width: responsiveWidth(25),
                        height: responsiveHeight(50)
                    }} />
            </View>
            <View style={{
                marginLeft: "5%",
                marginTop: "7%",
                zIndex: 2,
                alignSelf: 'flex-start',
                flexDirection: 'row',
                width: responsiveWidth(58),
                justifyContent: 'space-between'
            }}>
                <TouchableOpacity style={{
                    backgroundColor: "white",
                    // paddingRight: "2%",
                    marginTop: "10%",
                    borderRadius: 50,
                    height: responsiveHeight(6),
                    width: responsiveWidth(11.5),
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                    onPress={() =>
                        navigation.goBack()}
                >
                    <Image source={require('../assets/Back.png')} style={{
                        width: responsiveWidth(2),
                        height: responsiveHeight(2)
                    }} />
                </TouchableOpacity>
                <Image source={require('../assets/crumbleLogo.png')}
                    style={styles.logo}
                />
            </View>
            <Text style={{ fontSize: responsiveFontSize(3.5), fontFamily: 'Sen-SemiBold', color: '#ffffff', zIndex: 2, marginTop: "1%" }}>Sign Up</Text>
            <Text style={{ fontSize: responsiveFontSize(1.7), fontFamily: 'Sen-Regular', color: '#FFFFFF', zIndex: 2, marginTop: "2%" }}>Please sign up to get started</Text>
            <View style={styles.rectangle}>
                <View style={styles.formContainer}>
                    <Text style={{ fontSize: responsiveFontSize(1.5), fontFamily: 'Sen-regular', color: '#32343E', alignSelf: 'flex-start', marginLeft: "5%" }}>NAME</Text>
                    <View style={styles.inputContainer}>

                        <TextInput placeholder='John Doe'
                            placeholderTextColor={"#A0A5BA"}
                            returnKeyType="next"
                            value={name}
                            onChangeText={setName}
                            onSubmitEditing={() => input2Ref.current?.focus()}

                            style={{ width: responsiveWidth(80), textAlign: 'left', justifyContent: 'flex-start', color: '#000000' }}
                            keyboardType="default" />
                    </View>
                </View>
                <View style={styles.formContainer}>
                    <Text style={{ fontSize: responsiveFontSize(1.5), fontFamily: 'Sen-regular', color: '#32343E', alignSelf: 'flex-start', marginLeft: "5%" }}>EMAIL OR PHONE</Text>
                    <View style={styles.inputContainer}>

                        <TextInput placeholder='email or phone'
                            placeholderTextColor={"#A0A5BA"}
                            ref={input2Ref}
                            value={emailOrPhone}
                            onChangeText={setEmailOrPhone}
                            returnKeyType="next"
                            onSubmitEditing={() => input3Ref.current?.focus()}
                            style={{ width: responsiveWidth(80), textAlign: 'left', justifyContent: 'flex-start', color: '#000000' }}
                            keyboardType="email-address" />
                    </View>
                </View>
                <View style={styles.formContainer2}>
                    <Text style={{ fontSize: responsiveFontSize(1.5), fontFamily: 'Sen-Medium', color: '#32343E', alignSelf: 'flex-start', marginLeft: "5%" }}>PASSWORD</Text>
                    <View style={styles.inputContainer2}>

                        <TextInput
                            placeholder='Enter Password'
                            ref={input3Ref}
                            returnKeyType="next"
                            onSubmitEditing={() => input4Ref.current?.focus()}
                            placeholderTextColor={"#A0A5BA"}
                            keyboardType='default'
                            style={{ width: responsiveWidth(75), textAlign: 'left', justifyContent: 'flex-start', color: "#000000" }}
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry={secureEntry}
                        />

                        <TouchableOpacity

                            onPress={togglePasswordVisibility}
                            onPress={() => {
                                setSecureEntry((prev) => !prev);
                            }}>
                            <Image source={secureEntry ? require('../assets/view.png') : require('../assets/hidden.png')} style={{ width: responsiveWidth(5), height: responsiveHeight(2.5) }} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.formContainer2}>
                    <Text style={{ fontSize: responsiveFontSize(1.5), fontFamily: 'Sen-Medium', color: '#32343E', alignSelf: 'flex-start', marginLeft: "5%" }}>RE-TYPE PASSWORD</Text>
                    <View style={styles.inputContainer2}>

                        <TextInput
                            placeholder='Enter Password'
                            ref={input4Ref}
                            returnKeyType="done"
                            placeholderTextColor={"#A0A5BA"}
                            keyboardType='default'
                            style={{ width: responsiveWidth(75), textAlign: 'left', justifyContent: 'flex-start', color: "#000000" }}
                            value={rePassword}
                            onChangeText={setRePassword}
                            secureTextEntry={confirmPasswordVisible}
                        />

                        <TouchableOpacity
                            onPress={togglePasswordVisibility}
                            onPress={() => {
                                setConfirmPasswordVisible((prev) => !prev);
                            }}>
                            <Image source={confirmPasswordVisible ? require('../assets/view.png') : require('../assets/hidden.png')} style={{ width: responsiveWidth(5), height: responsiveHeight(2.5) }} />
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity
                    style={[styles.textWrapper, { backgroundColor: isFormValid ? "#FF7622" : "#CCC" }]} // Disable button color if form is invalid
                    disabled={!isFormValid} // Disable button when form is invalid
                    onPress={() => {
                        if (isFormValid) {
                            // Perform login action here
                            navigation.navigate('Verificationcode')
                        }
                    }}
                >
                    <Text style={styles.logButton}>
                        Sign Up
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
    logo: {
        width: responsiveWidth(25),
        height: responsiveHeight(10),
        zIndex: 2,
        marginTop: "10%"


    },
    rectangle: {
        backgroundColor: "#FFFFFF",
        marginTop: "15%",
        zIndex: 2,
        width: responsiveWidth(100),
        height: responsiveHeight(75),
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,

    },
    formContainer: {

        marginTop: "5%",
        justifyContent: 'center',
        alignItems: 'center',


    },
    inputContainer: {
        justifyContent: 'flex-start',
        borderRadius: 10,
        marginTop: "2%",
        width: "90%",
        height: responsiveHeight(7),
        backgroundColor: "#F0F5FA",
        flexDirection: "row",
        paddingLeft: 10,
        fontFamily: "Sen-Regular",
    },
    formContainer2: {

        marginTop: "5%",
        justifyContent: 'center',
        alignItems: 'center',

    },
    inputContainer2: {
        marginTop: "3%",
        borderRadius: 10,
        height: responsiveHeight(7),
        width: "90%",
        backgroundColor: "#F0F5FA",
        flexDirection: "row",
        paddingLeft: 10,
        fontFamily: "Sen-Regular",
        alignItems: 'center',

    },
    textWrapper: {
        height: responsiveHeight(7),
        width: "90%",

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
        fontFamily: "Sen-Medium",
        fontSize: responsiveFontSize(2),
        color: "#FFFFFF",
    },
})