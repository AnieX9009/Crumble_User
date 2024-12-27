import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-paper/src/components/Icon';
import History from '../components/History';
import Ongoing from '../components/Ongoing';
import Footer from '../components/Footer';
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
import Notification from './notification';
const { width, height } = Dimensions.get('window');



export default function Location() {
    const navigation = useNavigation();
   
    return (
        <View style={[styles.container, { height }]}>

        <StatusBar
            hidden={false}
            barStyle='dark-content'
            animated={true}
            translucent backgroundColor="transparent"
        />
        
        <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButtonWrapper}>
                    <Icon source="chevron-left" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Location</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Personalprofile')}>
                    <Image source={require('../assets/MaskGroup.png')} style={styles.profileImage} />
                </TouchableOpacity>
            </View>
        <View style={{marginTop: "10%", backgroundColor: "#FF7622", width: responsiveWidth(90), height: responsiveHeight(40), alignItems: 'center', justifyContent: 'center', borderRadius: 20 }}>
        <Image
    source={{ uri: "https://lh3.googleusercontent.com/gYE0KowUZ6rICF8vtgJTWAGv3tr6Nnxh4aaWDLVgQPU0gtU7xGwp0VYT9oDmrAInBRJODEV0SAXWMEboQ1vtsl7OzoF8XPeVmFfVQtk=w450" }}
    style={{ width: responsiveWidth(80), height: responsiveHeight(35), borderRadius: 20 }}
/>

        </View>
        <Footer/>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,

        alignItems: 'center',
        backgroundColor: "#ffffff",
    },
    header: {
        
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: "10%",
      width: responsiveWidth(85)
    },
    backButtonWrapper: {
        backgroundColor: "#ECF0F4",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        height: responsiveHeight(5),
        width: responsiveWidth(10),
    },
    headerText: {
        fontSize: responsiveFontSize(2.5),
        fontFamily: 'Sen-Bold',
        color: "#181C2E",
    },
    profileImage: {
        width: responsiveWidth(12),
        height: responsiveHeight(10),
    },
})