import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Checkbox } from 'react-native-paper';
import {
    ScrollView,
    StyleSheet,
    StatusBar,
    Text,
    Button,
    TextInput,
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


export default function LogInEmpty() {
    const navigation = useNavigation()
    const [secureEntry, setSecureEntry] = useState(true);
    const togglePasswordVisibility = () => {
        setSecureEntry(!secureEntry);
    };


    const [checked, setChecked] = React.useState(false);

    const [emailOrPhone, setEmailOrPhone] = useState('');
    const [password, setPassword] = useState('');

    // Check if both email/phone and password are filled
    const isFormValid = emailOrPhone.trim() !== '' && password.trim() !== '';


    return (
        <View style={styles.container} >
            <StatusBar
                hidden={false}
                barStyle='dark-content'
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
            <Image source={require('../assets/crumbleLogo.png')}
                style={styles.logo}
            />
            <Text style={{ fontSize: responsiveFontSize(4), fontFamily: 'Sen-SemiBold', color: '#ffffff', zIndex: 2 }}>Log In</Text>
            <Text style={{ fontSize: responsiveFontSize(1.7), fontFamily: 'Sen-Regular', color: '#FFFFFF', zIndex: 2, marginTop: "2%" }}>Please sign in to your existing account</Text>
            <View style={styles.rectangle}>
                <View style={styles.formContainer}>
                    <Text style={{ fontSize: responsiveFontSize(1.5), fontFamily: 'Sen-regular', color: '#32343E', alignSelf: 'flex-start', marginLeft: "5%" }}>EMAIL OR PHONE</Text>
                    <View style={styles.inputContainer}>

                        <TextInput placeholder='email or phone'
                            placeholderTextColor={"#6B6E82"}
                            value={emailOrPhone}
                            onChangeText={setEmailOrPhone}
                            style={{ width: responsiveWidth(80), textAlign: 'left', justifyContent: 'flex-start', color: '#000000' }}
                            keyboardType="email-address" />
                    </View>
                </View>
                <View style={styles.formContainer2}>
                    <Text style={{ fontSize: responsiveFontSize(1.5), fontFamily: 'Sen-Medium', color: '#32343E', alignSelf: 'flex-start', marginLeft: "5%" }}>PASSWORD</Text>
                    <View style={styles.inputContainer2}>

                        <TextInput
                            placeholder='Enter Password'
                            placeholderTextColor={"#6B6E82"}
                            style={{ width: responsiveWidth(75), textAlign: 'left', justifyContent: 'flex-start', color: "#000000" }}
                            secureTextEntry={secureEntry}

                            value={password}
                            onChangeText={setPassword}
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

                <View style={{ flexDirection: "row", marginTop: "10%", justifyContent: 'space-between', width: responsiveWidth(82), alignSelf: 'center', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Checkbox
                            status={checked ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setChecked(!checked);
                            }}
                            color='#FF7622'
                        />
                        <Text style={{ color: "#7E8A97", fontFamily: "Sen-Bold" }}>Remember me </Text>
                    </View>
                    <TouchableOpacity  >
                        <Text style={styles.forget}>Forgot Password</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={[styles.textWrapper, { backgroundColor: isFormValid ? "#FF7622" : "#CCC" }]} // Disable button color if form is invalid
                    disabled={!isFormValid} // Disable button when form is invalid
                    onPress={() => {
                        if (isFormValid) {
                            // Perform login action here
                            navigation.navigate('Home')
                        }
                    }}>
                    <Text style={styles.logButton}>
                        LOG IN
                    </Text>
                </TouchableOpacity>
                <View style={{ flexDirection: "row", justifyContent: 'center', marginTop: "8%" }}>
                    <Text style={{ fontSize: responsiveFontSize(1.7), fontFamily: "Sen-Regular", color: "#646982", textAlign: 'center' }}>
                        Don’t have an account?
                    </Text>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Signup')
                        }}
                    >
                        <Text style={{ fontFamily: 'Sen-Medium', color: "#FF7622", paddingLeft: 5, fontSize: responsiveFontSize(1.7) }}>
                            SIGN UP
                        </Text>
                    </TouchableOpacity>

                </View>

                <Text style={{ fontFamily: 'Sen-Medium', color: "#646982", fontSize: responsiveFontSize(1.7), textAlign: 'center', marginTop: "7%" }}>Or</Text>
                <View style={{
                    flexDirection: 'row',
                    marginTop: "1%",
                    alignItems: 'center',
                    width: responsiveWidth(70),
                    height: responsiveHeight(10),
                    alignSelf: 'center',
                    justifyContent: 'space-evenly',

                }}>
                    <TouchableOpacity style={[{ backgroundColor: "#395998" }, styles.googleWrapper]}>
                        <Image source={require('../assets/facebook.png')}
                            style={[{ width: responsiveWidth(3), height: responsiveHeight(3) }]}
                        ></Image>
                    </TouchableOpacity>

                    <TouchableOpacity style={[{ backgroundColor: "#169CE8", }, styles.googleWrapper]}>

                        <Image source={require('../assets/Twitter.png')}
                            style={styles.googleLogo}
                        ></Image>
                    </TouchableOpacity>

                    <TouchableOpacity style={[{ backgroundColor: "#1B1F2F" }, styles.googleWrapper]}>

                        <Image source={require('../assets/apple.png')}
                            style={[{ paddingBottom: 30 }, styles.googleLogo]}
                        ></Image>
                    </TouchableOpacity>
                </View>
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
        marginTop: "14%"
    },
    rectangle: {
        backgroundColor: "#FFFFFF",
        marginTop: "15%",
        zIndex: 2,
        width: responsiveWidth(100),
        height: responsiveHeight(75),
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    formContainer: {

        marginTop: "7%",
        justifyContent: 'center',
        alignItems: 'center',


    },
    inputContainer: {
        justifyContent: 'flex-start',
        borderRadius: 10,
        marginTop: '3%',
        width: "90%",
        height: responsiveHeight(7),
        backgroundColor: "#F0F5FA",
        flexDirection: "row",
        paddingLeft: 10,
        fontFamily: "Sen-Regular",
    },
    formContainer2: {

        marginTop: "7%",
        justifyContent: 'center',
        alignItems: 'center',

    },
        inputContainer2: {
        marginTop: '3%',
        borderRadius: 10,
        height: responsiveHeight(7),
        width: responsiveWidth(90),
        backgroundColor: "#F0F5FA",
        flexDirection: "row",
        paddingLeft: 10,
        fontFamily: "Sen-Regular",
        alignItems: 'center',

    },
    forget: {

        fontSize: responsiveFontSize(1.7),
        fontFamily: "Sen-Medium",
        color: "#FF7622",


    },
    textWrapper: {
        height: responsiveHeight(7.5),
        width: "90%",

        marginTop: '5%',
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
        fontSize: responsiveFontSize(1.7),
        color: "#FFFFFF",
    },
    googleWrapper: {
        borderRadius: 50,
        width: responsiveWidth(14),
        height: responsiveHeight(7),
        alignItems: 'center',
        justifyContent: 'center',
    },

    googleLogo: {
        width: responsiveWidth(6),
        height: responsiveHeight(4),
        resizeMode: 'contain'

    },
})