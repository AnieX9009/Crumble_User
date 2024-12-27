import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-paper/src/components/Icon';
import {
    StatusBar,
    ScrollView,
    StyleSheet,
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
const { width, height } = Dimensions.get('window');



export default function Editprofile() {
    const navigation = useNavigation();

    return (
        <View style={[styles.container, { height }]}>

<StatusBar
                hidden={false}
                barStyle='dark-content'
                animated={true}
                translucent backgroundColor="transparent"
            />
            <View style={styles.mainButton}>
                <TouchableOpacity
                    onPress={() =>
                        navigation.goBack()}
                    style={styles.backButtonWrapper}>
                    <Icon source="less-than"
                        size={15}
                        color={"black"}

                    />
                </TouchableOpacity>
                <Text style={styles.mainText}>Edit Profile</Text>
              
            </View>
            <View style={{alignItems: 'center', marginTop: "10%", alignSelf: 'center'}}>
                <Image source={require('../assets/Profile.png')} style={{width: responsiveWidth(30.2), height: responsiveHeight(15)}} />
            
            <TouchableOpacity style={{backgroundColor: "#FF7622", 
                width: responsiveWidth(10), 
                height: responsiveHeight(5), 
                alignItems: 'center', 
                justifyContent: 'center',
                borderRadius: 50,
                position: 'absolute',
                marginTop: "22%",
                left: 60
                
                }}>
                <Icon source="pencil-outline" size={20} color='#FFFFFF'/>
                </TouchableOpacity>
                </View>
               <View style={styles.formContainer}>
                    <Text style={{ fontSize: responsiveFontSize(1.7), fontFamily: 'Sen-Medium', color: '#32343E', alignSelf: 'flex-start', marginLeft: "2%" }}>FULL NAME</Text>
                    <View style={styles.inputContainer}>

                        <TextInput placeholder='Vishal Khadok'
                            placeholderTextColor={"#6B6E82"}
                            returnKeyType="done"
                            style={{ width: responsiveWidth(80), textAlign: 'left', justifyContent: 'flex-start', color: '#000000', fontFamily: 'Sen-Regular', fontSize: 14 }}
                            keyboardType= 'default' />
                    </View>
                </View>
                <View style={styles.formContainer}>
                    <Text style={{ fontSize: responsiveFontSize(1.7), fontFamily: 'Sen-Medium', color: '#32343E', alignSelf: 'flex-start', marginLeft: "2%" }}>EMAIL</Text>
                    <View style={styles.inputContainer}>

                        <TextInput placeholder='hello@halallab.co'
                            placeholderTextColor={"#6B6E82"}
                            returnKeyType="done"
                            style={{ width: responsiveWidth(80), textAlign: 'left', justifyContent: 'flex-start', color: '#000000', fontFamily: 'Sen-Regular', fontSize: 14  }}
                            keyboardType="email-address" />
                    </View>
                </View>
                <View style={styles.formContainer}>
                    <Text style={{ fontSize: responsiveFontSize(1.7), fontFamily: 'Sen-Medium', color: '#32343E', alignSelf: 'flex-start', marginLeft: "2%" }}>PHONE NUMBER</Text>
                    <View style={styles.inputContainer}>

                        <TextInput placeholder='408-841-0926'
                            placeholderTextColor={"#6B6E82"}
                            returnKeyType="done"
                            style={{ width: responsiveWidth(80), textAlign: 'left', justifyContent: 'flex-start', color: '#000000', fontFamily: 'Sen-Regular', fontSize: 14  }}
                            keyboardType= 'numeric' />
                    </View>
                </View>
                <View style={styles.formContainer1}>
                    <Text style={{ fontSize: responsiveFontSize(1.7), fontFamily: 'Sen-Medium', color: '#32343E', alignSelf: 'flex-start', marginLeft: "2%" }}>BIO</Text>
                    <View style={styles.inputContainer}>

                        <TextInput placeholder='I love fast food'
                            placeholderTextColor={"#6B6E82"}
                           
                            style={{ width: responsiveWidth(80), textAlign: 'left', justifyContent: 'flex-start', color: '#000000', fontFamily: 'Sen-Regular', fontSize: 14  }}
                            keyboardType= 'numeric' />
                    </View>
                </View>
                <TouchableOpacity
                    style={styles.textWrapper } // Disable button color if form is invalid
                   
                    onPress={() => {
                       
                            navigation.navigate('Personalprofile')
                       
                    }}
                >
                    <Text style={styles.logButton}>
                        SAVE
                    </Text>
                </TouchableOpacity>
                
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,

        alignItems: 'center',
        backgroundColor: "#ffffff",
    },
    mainButton: {

        flexDirection: 'row',
        marginTop: "15%",
        width: responsiveWidth(85),
        alignItems: 'center',
    },
    backButtonWrapper: {
        backgroundColor: "#ECF0F4",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        height: responsiveHeight(5),
        width: responsiveWidth(10),


    },
    mainText: {
        
        width: responsiveWidth(70),
        marginLeft: "5%",
        fontSize: 17,
        fontFamily: 'Sen-Bold',
        color: "#181C2E",

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
    formContainer1: {
        marginTop: "7%",
        justifyContent: 'center',
        alignItems: 'center',
    }
})