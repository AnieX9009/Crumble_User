import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
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



export default function History() {
    const navigation = useNavigation();
    const route = useRoute();
    console.log(route.name);
    return (
        <View style={[styles.container, { height }]}>
            <ScrollView>
                {/* 1st Order */}
                <View style={{marginTop: "7%", backgroundColor: "#FFFFFF", width: responsiveWidth(85), alignSelf: "center"}}>
                    <View style={{ flexDirection: 'row',  width: responsiveWidth(35), justifyContent: "space-between" }}>
                        <Text style={{ fontSize: 14, color: "#181C2E" }}>Food</Text>
                        <Text style={{ fontSize: 14, color: "#059C6A" }}>Completed</Text>
                    </View>
                    <View style={{width: responsiveWidth(85), backgroundColor: "#EEF2F6", height: responsiveHeight(0.1), marginTop: "3%"}}></View>
                    <View style={{ width: responsiveWidth(85), alignSelf: "center", height: responsiveHeight(15), flexDirection: 'row', alignItems: 'center'}}>
                        <TouchableOpacity >
                        <Image source={require('../assets/order1.png')} style={{width: responsiveWidth(16), height: responsiveHeight(8),  borderRadius: 15}}/>
                        </TouchableOpacity>
                        <View style={{ marginLeft: "5%", width: responsiveWidth(40)}}>
                            <Text style={{fontSize: 14, color: "#181C2E", fontFamily: "Sen-SemiBold"}}>resturant</Text>
                            <View style={{flexDirection: 'row',  width: responsiveWidth(60), paddingTop: "5%", alignItems: 'center'}}>
                                <Text style={{fontSize: 14, color: "#181C2E", fontFamily: "Sen-SemiBold"}}>$35.25</Text>
                                <Text style={{fontSize: 12, color: "#6B6E82", fontFamily: "Sen-Medium", paddingLeft: "10%"}}>29 Jan, 12:30</Text>
                                <Icon source="checkbox-blank-circle" size={7} color='#6B6E82'/>
                                <Text style={{fontSize: 12, color: "#6B6E82", fontFamily: "Sen-Medium", marginLeft: "2%"}}>03 Items</Text>
                            </View>
                        </View>
                        <View style={{marginBottom: "7%", marginLeft: "10%", borderBottomWidth: 1, borderColor: "#6B6E82"}}>
                            <Text style={{fontSize: 14, color: "#6B6E82", fontFamily: "Sen-Medium"}}>#162432</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: "row", justifyContent: 'space-between'}}>
                        <TouchableOpacity style={{ width: responsiveWidth(35), height: responsiveHeight(5), borderRadius: 10, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: "#FF7622"}}>
                            <Text style={{fontSize: 12, color: "#FF7622", fontFamily: "Sen-Bold"}}>Rate</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: responsiveWidth(35), height: responsiveHeight(5), borderRadius: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: "#FF7622"}}>
                            <Text style={{fontSize: 12, color: "#FFFFFF", fontFamily: "Sen-Bold"}}>Re-Order</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* 2nd order */}
                <View style={{marginTop: "7%", backgroundColor: "#ffffff", width: responsiveWidth(85), alignSelf: "center"}}>
                    <View style={{ flexDirection: 'row',  width: responsiveWidth(35), justifyContent: "space-between" }}>
                        <Text style={{ fontSize: 14, color: "#181C2E" }}>Food</Text>
                        <Text style={{ fontSize: 14, color: "#059C6A" }}>Completed</Text>
                    </View>
                    <View style={{width: responsiveWidth(85), backgroundColor: "#EEF2F6", height: responsiveHeight(0.1), marginTop: "3%"}}></View>
                    <View style={{ width: responsiveWidth(85), alignSelf: "center", height: responsiveHeight(15), flexDirection: 'row', alignItems: 'center'}}>
                        <TouchableOpacity >
                        <Image source={require('../assets/order2.png')} style={{width: responsiveWidth(16), height: responsiveHeight(8),  borderRadius: 15}}/>
                        </TouchableOpacity>
                        <View style={{ marginLeft: "5%", width: responsiveWidth(40)}}>
                            <Text style={{fontSize: 14, color: "#181C2E", fontFamily: "Sen-SemiBold"}}>resturant</Text>
                            <View style={{flexDirection: 'row',  width: responsiveWidth(60), paddingTop: "5%", alignItems: 'center'}}>
                                <Text style={{fontSize: 14, color: "#181C2E", fontFamily: "Sen-SemiBold"}}>$40.15</Text>
                                <Text style={{fontSize: 12, color: "#6B6E82", fontFamily: "Sen-Medium", paddingLeft: "10%"}}>30 Jan, 12:30</Text>
                                <Icon source="checkbox-blank-circle" size={7} color='#6B6E82'/>
                                <Text style={{fontSize: 12, color: "#6B6E82", fontFamily: "Sen-Medium", marginLeft: "2%"}}>03 Items</Text>
                            </View>
                        </View>
                        <View style={{marginBottom: "7%", marginLeft: "10%", borderBottomWidth: 1, borderColor: "#6B6E82"}}>
                            <Text style={{fontSize: 14, color: "#6B6E82", fontFamily: "Sen-Medium"}}>#162432</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: "row", justifyContent: 'space-between'}}>
                        <TouchableOpacity style={{ width: responsiveWidth(35), height: responsiveHeight(5), borderRadius: 10, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: "#FF7622"}}>
                            <Text style={{fontSize: 12, color: "#FF7622", fontFamily: "Sen-Bold"}}>Rate</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: responsiveWidth(35), height: responsiveHeight(5), borderRadius: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: "#FF7622"}}>
                            <Text style={{fontSize: 12, color: "#FFFFFF", fontFamily: "Sen-Bold"}}>Re-Order</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* 3rd order */}
                <View style={{marginTop: "7%", backgroundColor: "#ffffff", width: responsiveWidth(85), alignSelf: "center"}}>
                    <View style={{ flexDirection: 'row',  width: responsiveWidth(35), justifyContent: "space-between" }}>
                        <Text style={{ fontSize: 14, color: "#181C2E" }}>Food</Text>
                        <Text style={{ fontSize: 14, color: "#FF0000" }}>Canceled</Text>
                    </View>
                    <View style={{width: responsiveWidth(85), backgroundColor: "#EEF2F6", height: responsiveHeight(0.1), marginTop: "3%"}}></View>
                    <View style={{ width: responsiveWidth(85), alignSelf: "center", height: responsiveHeight(15), flexDirection: 'row', alignItems: 'center'}}>
                        <TouchableOpacity >
                        <Image source={require('../assets/order1.png')} style={{width: responsiveWidth(16), height: responsiveHeight(8),  borderRadius: 15}}/>
                        </TouchableOpacity>
                        <View style={{ marginLeft: "5%", width: responsiveWidth(40)}}>
                            <Text style={{fontSize: 14, color: "#181C2E", fontFamily: "Sen-SemiBold"}}>resturant</Text>
                            <View style={{flexDirection: 'row',  width: responsiveWidth(60), paddingTop: "5%", alignItems: 'center'}}>
                                <Text style={{fontSize: 14, color: "#181C2E", fontFamily: "Sen-SemiBold"}}>$35.25</Text>
                                <Text style={{fontSize: 12, color: "#6B6E82", fontFamily: "Sen-Medium", paddingLeft: "10%"}}>29 Jan, 12:30</Text>
                                <Icon source="checkbox-blank-circle" size={7} color='#6B6E82'/>
                                <Text style={{fontSize: 12, color: "#6B6E82", fontFamily: "Sen-Medium", marginLeft: "2%"}}>03 Items</Text>
                            </View>
                        </View>
                        <View style={{marginBottom: "7%", marginLeft: "10%", borderBottomWidth: 1, borderColor: "#6B6E82"}}>
                            <Text style={{fontSize: 14, color: "#6B6E82", fontFamily: "Sen-Medium"}}>#162432</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: "row", justifyContent: 'space-between'}}>
                        <TouchableOpacity style={{ width: responsiveWidth(35), height: responsiveHeight(5), borderRadius: 10, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: "#FF7622"}}>
                            <Text style={{fontSize: 12, color: "#FF7622", fontFamily: "Sen-Bold"}}>Rate</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: responsiveWidth(35), height: responsiveHeight(5), borderRadius: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: "#FF7622"}}>
                            <Text style={{fontSize: 12, color: "#FFFFFF", fontFamily: "Sen-Bold"}}>Re-Order</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{height:responsiveHeight(25), width: responsiveWidth(85)}}>

                </View>
            </ScrollView>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {

        width: responsiveWidth(100),
        backgroundColor: "#ffffff",
    },
})