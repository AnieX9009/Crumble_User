import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-paper/src/components/Icon';
import {

    StyleSheet,
    Text,
    Button,
    TextInput,
    Image,
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
import Footer from '../components/Footer';
export default function Notification() {
    const navigation = useNavigation();
    const [showNotification, setShowNotification] = useState<String>('Notification');
    // const [showMessage, setShowMessage] = useState<boolean>(false);
    return (
        <View style={styles.container}>
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
                <Text style={styles.mainText}>Notifications</Text>
                <TouchableOpacity
                    style={{
                        borderBottomWidth: 2,
                        borderColor: "#FF7622"
                    }} >
                </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                style={[styles.button, showNotification && styles.buttonActive]}
                onPress={() => setShowNotification('Notification')}>
                <Text style={{ fontSize: 14, fontFamily: 'Sen-SemiBold', color: showNotification === "Notification" ? "#FB6D3A" : undefined }}>
                   Notification</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, showNotification && styles.buttonActive]}
                    onPress={() => setShowNotification('Messages')}
                >
                    <Text style={{ fontSize: 14, fontFamily: 'Sen-SemiBold', color: showNotification === "Messages" ? "#FB6D3A" : undefined }}>Messages</Text>
                </TouchableOpacity>
            </View>
            {/* Conditionally render Notification */}
            {showNotification == 'Notification' ? (
                <View style={styles.notificationBox}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: responsiveWidth(85), alignItems: 'center', marginTop: 20 }}>
                        <Image source={require('../assets/profile162.png')} style={{ width: responsiveWidth(14), height: responsiveHeight(8), resizeMode: 'contain' }} />
                        <View>
                            <Text style={{ fontFamily: 'Sen-SemiBold', color: "#000000", width: responsiveWidth(50), marginRight: 50, textAlign: 'left', fontSize: responsiveFontSize(1.7) }}>Tanbir Ahmed <Text style={{ fontFamily: 'Sen-Regular', fontSize: responsiveFontSize(1.5) }}>Placed a new order</Text></Text>

                            <Text style={{ fontFamily: 'Sen-Regular', color: "#000000", paddingTop: 10, fontSize: responsiveFontSize(1.4) }}>20 min ago</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: responsiveWidth(85), alignItems: 'center', marginTop: 20 }}>
                        <Image source={require('../assets/profile162.png')} style={{ width: responsiveWidth(14), height: responsiveHeight(8), resizeMode: 'contain' }} />
                        <View>
                            <Text style={{ fontFamily: 'Sen-SemiBold', color: "#000000", width: responsiveWidth(50), marginRight: 50, textAlign: 'left', fontSize: responsiveFontSize(1.7) }}>Tanbir Ahmed <Text style={{ fontFamily: 'Sen-Regular', fontSize: responsiveFontSize(1.5) }}>Placed a new order</Text></Text>

                            <Text style={{ fontFamily: 'Sen-Regular', color: "#000000", paddingTop: 10, fontSize: responsiveFontSize(1.4) }}>20 min ago</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: responsiveWidth(85), alignItems: 'center', marginTop: 20 }}>
                        <Image source={require('../assets/profile162.png')} style={{ width: responsiveWidth(14), height: responsiveHeight(8), resizeMode: 'contain' }} />
                        <View>
                            <Text style={{ fontFamily: 'Sen-SemiBold', color: "#000000", width: responsiveWidth(50), marginRight: 50, textAlign: 'left', fontSize: responsiveFontSize(1.7) }}>Tanbir Ahmed <Text style={{ fontFamily: 'Sen-Regular', fontSize: responsiveFontSize(1.5) }}>Placed a new order</Text></Text>

                            <Text style={{ fontFamily: 'Sen-Regular', color: "#000000", paddingTop: 10, fontSize: responsiveFontSize(1.4) }}>20 min ago</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: responsiveWidth(85), alignItems: 'center', marginTop: 20 }}>
                        <Image source={require('../assets/profile162.png')} style={{ width: responsiveWidth(14), height: responsiveHeight(8), resizeMode: 'contain' }} />
                        <View>
                            <Text style={{ fontFamily: 'Sen-SemiBold', color: "#000000", width: responsiveWidth(50), marginRight: 50, textAlign: 'left', fontSize: responsiveFontSize(1.7) }}>Tanbir Ahmed <Text style={{ fontFamily: 'Sen-Regular', fontSize: responsiveFontSize(1.5) }}>Placed a new order</Text></Text>

                            <Text style={{ fontFamily: 'Sen-Regular', color: "#000000", paddingTop: 10, fontSize: responsiveFontSize(1.4) }}>20 min ago</Text>
                        </View>
                    </View>
                </View>
            ) : (
                <View style={styles.notificationBox}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: responsiveWidth(85), alignItems: 'center', marginTop: 30 }}>
                        <Image source={require('../assets/profile3.png')} style={{ width: responsiveWidth(12), height: responsiveHeight(6), resizeMode: 'contain' }} />
                        <View>
                            <Text style={{ fontFamily: 'Sen-SemiBold', color: "#000000", width: responsiveWidth(40), marginRight: 90, textAlign: 'left' }}>Royal Parvej</Text>

                            <Text style={{ fontFamily: 'Sen-Regular', color: "#000000", paddingTop: 5 }}>Sounds awesome!</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: responsiveWidth(85), alignItems: 'center', marginTop: 30 }}>
                        <Image source={require('../assets/profile3.png')} style={{ width: responsiveWidth(12), height: responsiveHeight(6), resizeMode: 'contain' }} />
                        <View>
                            <Text style={{ fontFamily: 'Sen-SemiBold', color: "#000000", width: responsiveWidth(40), marginRight: 90, textAlign: 'left' }}>Cameron Williamson</Text>

                            <Text style={{ fontFamily: 'Sen-Regular', color: "#000000", paddingTop: 5 }}>Ok, Just hurry up little bit...😊</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: responsiveWidth(85), alignItems: 'center', marginTop: 30 }}>
                        <Image source={require('../assets/profile3.png')} style={{ width: responsiveWidth(12), height: responsiveHeight(6), resizeMode: 'contain' }} />
                        <View>
                            <Text style={{ fontFamily: 'Sen-SemiBold', color: "#000000", width: responsiveWidth(40), marginRight: 90, textAlign: 'left' }}>Ralph Edwards</Text>

                            <Text style={{ fontFamily: 'Sen-Regular', color: "#000000", paddingTop: 5 }}>Thanks dude.</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: responsiveWidth(85), alignItems: 'center', marginTop: 30 }}>
                        <Image source={require('../assets/profile3.png')} style={{ width: responsiveWidth(12), height: responsiveHeight(6), resizeMode: 'contain' }} />
                        <View>
                            <Text style={{ fontFamily: 'Sen-SemiBold', color: "#000000", width: responsiveWidth(40), marginRight: 90, textAlign: 'left' }}>Cody Fisher</Text>

                            <Text style={{ fontFamily: 'Sen-Regular', color: "#000000", paddingTop: 5 }}>How is going...?</Text>
                        </View>
                    </View>
                </View>
            )}
            <Footer/>
        </View>
    );
};

// Styles for the components
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#ffffff"

    },
    notificationBox: {
        backgroundColor: '#ffffff',
        padding: 10,
        borderRadius: 5,
        marginVertical: 10,
        width: responsiveWidth(100),
        height: responsiveHeight(70),
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    notificationText: {
        color: '#000',
        fontSize: 16,
    },

    messageText: {
        color: '#000',
        fontSize: 16,
    },
    mainButton: {
        flexDirection: 'row',

        width: "100%",
        alignItems: 'center',
        marginLeft: "5%"


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
        width: responsiveWidth(30),
        marginLeft: "5%",
        fontSize: 17,
        fontFamily: 'Sen-SemiBold',
        color: "#181C2E"
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: "100%",
        marginTop: "10%"
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 20,

        borderRadius: 5
    },
    buttonText: {
        color: "#FF7622",
        fontSize: 16
    },
    buttonActive: {
        color: "#A5A7B9",
        
    }
});



