import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-paper/src/components/Icon';
import Footer from '../components/Footer';
import {
    ScrollView,
    StyleSheet,
    Text,
    Image,
    StatusBar,
    FlatList,
    View,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../components/redux/store';
import {
    responsiveFontSize,
    responsiveWidth,
    responsiveHeight
} from 'react-native-responsive-dimensions';

const { width } = Dimensions.get('window');

interface Dish {
    id: number;
    name: string;
    image: any;

}
interface RatingProps {
    id: number;
}

const Rating: React.FC<RatingProps> = ({ id }) => {
    const [star, setStar] = useState(true);

    const toggleVisibility = () => {
        setStar(!star);
    };

    return (
        <View>
            <TouchableOpacity onPress={toggleVisibility}>
                <Icon
                    source={star ? 'star-outline' : 'star'}
                    size={20}
                    color="#FECC63"
                />
            </TouchableOpacity>

        </View>
    );
};

const FavoritesFood = () => {
    const navigation = useNavigation();

    // Fetch favorite items from Redux
    const favData = useSelector((state: RootState) => state.favourites);

    const renderItem = ({ item }: { item: Dish }) => (
        
        <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.foodImage} />
            <Text style={styles.foodName}>{item.name}</Text>
            <Text style={{
                alignSelf: 'flex-start',
                marginLeft: "5%",
                fontSize: 12,
                fontFamily: 'Sen-Regular',
                color: "black",
                marginTop: 10,
            }}>{item.name}</Text>
           <View style={{
                            alignItems: 'center', flexDirection: 'row', position: 'absolute',
                            backgroundColor: '#ffffff',
                            width: responsiveWidth(20),
                            justifyContent: 'center',
                            height: responsiveHeight(4),
                            borderRadius: 50,
                            marginTop: "40%",
                            marginLeft: "5%",
                            alignSelf: 'flex-start'
                        }}>
                            <Text style={{ color: "#000000", fontSize: 10, fontFamily: "Sen-SemiBold"  }}>4.5</Text>
                            <Rating id={15} />
                            <Text>|(25+)</Text>
                        </View>

                        <View style={{
                            position: 'absolute',
                            flexDirection: 'row',
                           marginLeft: "3%",
                            backgroundColor: "#ffffff",
                            height: 35,
                            width: responsiveWidth(23),
                            alignItems: 'center',
                            borderRadius: 20,
                            marginTop: "5%",
                            alignSelf: 'flex-start',
                            justifyContent: 'center'
                        }}>
                            <View style={{  width: responsiveWidth(3) }}>
                                <Icon source="currency-usd" size={15} color='#FECC63' />
                            </View>
                            <Text style={{
                                color: "#000000",
                                fontSize: responsiveFontSize(3),
                                fontWeight: "700",
                                fontFamily: 'Sen-Bold'
                            }}>12.20</Text>
                        </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <StatusBar hidden={false} barStyle='dark-content' animated={true} backgroundColor="transparent" />

            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButtonWrapper}>
                    <Icon source="chevron-left" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Favorites</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Personalprofile')}>
                    <Image source={require('../assets/MaskGroup.png')} style={styles.profileImage} />
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                style={styles.textWrapper} // Disable button color if form is invalid

                onPress={() => {
                    navigation.navigate('Home')
                }}>
                <Text style={styles.logButton}>
                    Food Items
                </Text>
            </TouchableOpacity>

            <FlatList
                data={favData}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.listContent}
            />
              <Footer />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        padding: 10,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: responsiveHeight(3),
        paddingHorizontal: responsiveWidth(5),
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
    listContent: {
        paddingBottom: 20,
    },
    card: {
        marginTop: "7%",
        alignSelf: 'center',
        width: responsiveWidth(85),
        height: responsiveHeight(30),
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        shadowColor: '#E327534D',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
        marginVertical: 10,
        
        alignItems: 'center',
    },
    foodImage: {
        width: responsiveWidth(85),
        height: responsiveHeight(20),
        borderRadius: 10,
        
    },
    foodName: {
        alignSelf: 'flex-start',
        marginLeft: "5%",
        fontSize: 18,
        fontFamily: 'Sen-Bold',
        color: "black",
        marginTop: 10,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
        position: 'absolute'
    },
    ratingText: {
        fontFamily: "Sen-SemiBold",
        fontSize: 14,
        color: "#000",
    },
    ratingCount: {
        fontSize: 12,
        color: "#5B5B5E",
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "#F5F5F5",
        borderRadius: 20,
        padding: 5,
        marginTop: 10,
        position: 'absolute'
    },
    priceText: {
        fontSize: 16,
        fontFamily: 'Sen-Bold',
        color: "#000",
    },
    textWrapper: {
        height: responsiveHeight(6),
        width: "40%",

        marginTop: "2%",
        backgroundColor: "#FF7622",
        justifyContent: 'center',
        alignItems: 'center',
alignSelf: 'center',
        borderRadius: 50,
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
});

export default FavoritesFood;
