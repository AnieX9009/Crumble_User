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



export default function Personalprofile() {
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
                <Text style={styles.mainText}>Personal Info</Text>
                <TouchableOpacity 
                onPress={() => {
                    navigation.navigate('Editprofile')
                    }}
                style={{ alignItems: 'center', borderBottomWidth: 1, borderColor: "#FF7622" }}>
                    <Text style={{ fontFamily: 'Sen-Medium', color: "#FF7622", fontSize: 14, fontWeight: 400 }}>EDIT</Text>
                </TouchableOpacity>
            </View>

            <View style={{flexDirection: 'row', alignItems: 'center', width: responsiveWidth(85), marginTop: "10%"}}>
                <Image source={require('../assets/Profile.png')} style={{width: responsiveWidth(26.2), height: responsiveHeight(13)}} />
            <View style={{ marginLeft: "10%"}}> 
                <Text style={{ fontFamily: 'Sen-SemiBold', color: "#000000", fontSize: 20, fontWeight: 400 }} >Vishal Khadok</Text>
                <Text style={{ fontFamily: 'Sen-Medium', color: "#A0A5BA", fontSize: 14, fontWeight: 400, marginTop: "10%" }}>I love fast food</Text>
            </View>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', width: responsiveWidth(70), marginTop: "15%", alignSelf: 'center'}}>
                <Icon source="account-outline" size={25} color='#FB6F3D'/>
                <View style={{marginLeft: "10%"}}>
                    <Text style={{fontFamily: "Sen-SemiBold"}}>FULL NAME</Text>
                    <Text style={{fontFamily: "Sen-Regular", fontSize: 14, color: "#6B6E82"}}>Vishal Khadok</Text>
                </View>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', width: responsiveWidth(70), marginTop: "5%", alignSelf: 'center'}}>
                <Icon source="email-outline" size={25} color='#413DFB'/>
                <View style={{marginLeft: "10%"}}>
                    <Text style={{fontFamily: "Sen-SemiBold"}}>EMAIL</Text>
                    <Text style={{fontFamily: "Sen-Regular", fontSize: 14, color: "#6B6E82"}}>hello@halallab.co</Text>
                </View>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', width: responsiveWidth(70), marginTop: "5%", alignSelf: 'center'}}>
                <Icon source="phone-outline" size={25} color='#369BFF'/>
                <View style={{marginLeft: "10%"}}>
                    <Text style={{fontFamily: "Sen-SemiBold"}}>EMAIL</Text>
                    <Text style={{fontFamily: "Sen-Regular", fontSize: 14, color: "#6B6E82"}}>408-841-0926</Text>
                </View>
            </View>
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
        width: responsiveWidth(90),
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
        width: responsiveWidth(65),
        marginLeft: "5%",
        fontSize: 17,
        fontFamily: 'Sen-Bold',
        color: "#181C2E",

    },
})