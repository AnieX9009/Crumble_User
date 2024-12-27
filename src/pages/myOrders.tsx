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



export default function MyOrders() {
    const navigation = useNavigation();
    const [showNotification, setShowNotification] = useState<String>('Notification');
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
                <Text style={styles.mainText}>MY ORDERS</Text>
                <TouchableOpacity style={{
                    backgroundColor: "#ECF0F4",
                    width: responsiveWidth(10),
                    height: responsiveHeight(5),
                    borderRadius: 50,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Icon source="dots-horizontal" size={30} color='#181C2E' />
                </TouchableOpacity>
            </View>
            <View style={{ width: responsiveWidth(90), flexDirection: 'row', marginTop: "7%", alignItems: 'center', justifyContent: 'center' }}>
                <TouchableOpacity
                    style={[styles.button, showNotification && styles.buttonActive]}
                    onPress={() => setShowNotification('Notification')}>
                    <Text style={{ fontSize: 14, fontFamily: 'Sen-SemiBold', color: showNotification === "Notification" ? "#FB6D3A" : undefined }}>
                        Ongoing
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, showNotification && styles.buttonActive]}
                    onPress={() => setShowNotification('Messages')}
                >
                    <Text style={{ fontSize: 14, fontFamily: 'Sen-SemiBold', color: showNotification === "Messages" ? "#FB6D3A" : undefined }}>History</Text>
                </TouchableOpacity>
            </View>
            {showNotification == 'Notification' ? (
                <View>
                    <Ongoing />
                </View>
            ) : (
                <View>
                    <History />
                </View>
            )}

            <Footer />

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
        alignSelf: 'center'
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

        width: responsiveWidth(61),
        marginLeft: "5%",
        fontSize: 17,
        fontFamily: 'Sen-Bold',
        color: "#181C2E",

    },
    button: {
        width: responsiveWidth(45), alignItems: 'center'
    }
})