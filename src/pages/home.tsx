import React, { useState, useEffect, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-paper/src/components/Icon';
import LinearGradient from 'react-native-linear-gradient';
import StatusCarousel from '../components/StatusCarousel';
import ImageBoxWithOverlay from '../components/ImageBoxWithOverlay';
import CustomDrawer from '../components/CustomDrawer.tsx';
import Footer from '../components/Footer';
import { addToFav } from '../components/redux/action.ts';
import { useDispatch } from 'react-redux';
import { RootState } from '../components/redux/store.ts';
import {
    ScrollView,
    StyleSheet,
    Text,
    Button,
    TextInput,
    Animated,
    Image,
    Alert,
    Modal,
    Pressable,
    FlatList,
    View,
    StatusBar,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
const { width, height } = Dimensions.get('window');
import { Dropdown } from 'react-native-element-dropdown';
import { ActivityIndicator, Drawer, Searchbar } from 'react-native-paper';
import {
    responsiveFontSize,
    responsiveWidth,
    responsiveHeight
} from 'react-native-responsive-dimensions';
import { Item } from 'react-native-paper/lib/typescript/components/Drawer/Drawer';
type Item = {
    id: number;
    name: string;
    image: string;
    distance: string;
    rating: string;
    reviews: string;
};

// const items: Item[] = [
//   {
//     id: 1,
//     name: 'Brick Coffee',
//     image: require('../assets/1food.png'),
//     distance: '1.5 Km',
//     rating: '4.8',
//     reviews: '1.2k',
//   },
//   {
//     id: 2,
//     name: 'Daleko Blisko',
//     image: require('../assets/recipe20.png'),
//     distance: '1.5 Km',
//     rating: '4.8',
//     reviews: '1.2k',
//   },
//   // Add more items as needed
// ];
const dishes = [
    { name: 'Pizza' },
    { name: 'Burger' },
    { name: 'Pasta' },
    { name: 'Biryani' },
    { name: 'Sushi' },
    { name: 'Tacos' },
    { name: 'Salad' },
    { name: 'Steak' },
    // Add more dishes as needed
];
const countries = [
    { name: 'Kolkata' },
    { name: 'Delhi' },
    { name: 'Mumbai' },
    { name: 'Bangalore' },


    // Add more countries as needed
];
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



interface FavouriteProps {
    item: Product;
    onAddToFav: (item: Product) => void;
}

interface Product {
    id: number;
    name: string;
    image: string; // Use 'any' or 'number' for local image imports
}

interface ProductProps {
    item: Product;
    onAddToFav: (item: Product) => void;
}

// Sample products array
const products: Product[] = [
    { id: 1, name: 'Brick Coffee', image: 'https://res.cloudinary.com/deitdqyiw/image/upload/v1731127997/bewrwg21bxr4djxi5ecb.png' },
    { id: 2, name: 'Daleko Blisko', image: 'https://res.cloudinary.com/deitdqyiw/image/upload/v1731128400/icd7juk0nzv4fsdecocl.png' },
    { id: 3, name: 'Quasa', image: 'https://res.cloudinary.com/deitdqyiw/image/upload/v1731128458/rzawib0qetj3oozom8t4.png' },
    { id: 4, name: 'Quasa', image: 'https://res.cloudinary.com/deitdqyiw/image/upload/v1731128509/al66cqqq7ctaasni2tmk.png' },
    { id: 5, name: 'Manekin', image: 'https://res.cloudinary.com/deitdqyiw/image/upload/v1731128554/wltkhrjsig7ecw20k6wj.png' },
    { id: 6, name: 'Manekin', image: 'https://res.cloudinary.com/deitdqyiw/image/upload/v1731128622/tdqtxjqtxdagj59pxc2g.png' },
    { id: 7, name: 'Manekin', image: 'https://res.cloudinary.com/deitdqyiw/image/upload/v1731128554/wltkhrjsig7ecw20k6wj.png' },
    { id: 8, name: 'Manekin', image: 'https://res.cloudinary.com/deitdqyiw/image/upload/v1731128622/tdqtxjqtxdagj59pxc2g.png' },
    { id: 9, name: 'Manekin', image: 'https://res.cloudinary.com/deitdqyiw/image/upload/v1731128400/icd7juk0nzv4fsdecocl.png' },
    { id: 10, name: 'Manekin', image: 'https://res.cloudinary.com/deitdqyiw/image/upload/v1731128554/wltkhrjsig7ecw20k6wj.png' },
    { id: 11, name: 'Manekin', image: 'https://res.cloudinary.com/deitdqyiw/image/upload/v1731128554/wltkhrjsig7ecw20k6wj.png' },
];

// Favourite component
const Favourite: React.FC<FavouriteProps> = ({ item, onAddToFav }) => {
    const [heart, setHeart] = useState(true);

    const toggleVisibility = () => {
        setHeart(!heart);
        onAddToFav(item); // Add the entire item to favorites
    };

    return (
        <TouchableOpacity onPress={toggleVisibility}>
            <Icon
                source={heart ? 'cards-heart-outline' : 'cards-heart'}
                size={20}
                color="#FECC63"
            />
        </TouchableOpacity>
    );
};

// Product component
const ProductComponent: React.FC<ProductProps> = ({ item, onAddToFav }) => (
    <TouchableOpacity key={item.id} style={{ marginTop: 20, marginLeft: '3%' }}>
        <Image
            source={{uri: item.image}}
            style={{
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
                width: responsiveWidth(52),
                height: 140,
            }}
        />
        <Text style={{ marginTop: 20, fontSize: 18, fontFamily: 'Sen-Bold', color: 'black' }}>
            {item.name}
        </Text>

        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '5%' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ fontSize: 10, color: '#000000', fontFamily: 'Sen-SemiBold' }}>
                    1.5 Km |
                </Text>
                <Text style={{ fontSize: 10, color: '#000000', fontFamily: 'Sen-SemiBold' }}>
                    4.8 (1.2k)
                </Text>
            </View>
            <Favourite item={item} onAddToFav={onAddToFav} />
        </View>
    </TouchableOpacity>
);


export default function Home() {
    const [star, setStar] = useState(true);
    const [heart, setHeart] = useState(true);
    const [secureEntry, setSecureEntry] = useState(true);
    const navigation = useNavigation()
    const togglePasswordVisibility = () => {
        setSecureEntry(!secureEntry);

    };
    // searchQuery
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredSuggestions, setFilteredSuggestions] = useState(dishes);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const position = useRef(new Animated.Value(0)).current;

    const handleSearchChange = (query: string) => {
        setSearchQuery(query);

        // Filter suggestions based on query
        if (query.length > 0) {
            const filtered = dishes.filter(item =>
                item.name.toLowerCase().startsWith(query.toLowerCase())
            );
            setFilteredSuggestions(filtered);
            setShowSuggestions(true);
        } else {
            setShowSuggestions(false);
        }
    };

    useEffect(() => {
        Animated.timing(position, {
            toValue: searchQuery ? -50 : 0,
            duration: 300,
            useNativeDriver: true,
        }).start();
    }, [searchQuery]);


    const [code, setCode] = useState(countries);
    const [rating, setRating] = useState<number>(0);
    const images = [
        require('../assets/ADBanner1.png'),
        require('../assets/chicken.png'),
        require('../assets/Biryani.png'),
    ];

    const [modalVisible, setModalVisible] = useState(true);
    const [couponCode, setCouponCode] = useState('');

    // Array of possible coupon codes
    const couponCodes = ['#1243CD2', '#AB567C', '#XY42ZF1', '#HJ4320B', '#LM872DK'];

    // Function to randomly pick a coupon code from the array
    const getRandomCoupon = () => {
        const randomIndex = Math.floor(Math.random() * couponCodes.length);
        return couponCodes[randomIndex];
    };

    // Update the coupon code each time the modal is opened
    useEffect(() => {
        if (modalVisible) {
            setCouponCode(getRandomCoupon());
        }
    }, [modalVisible]);


    const dispatch = useDispatch();

    // Dispatch function to add an item to favorites
    const handleAddToFav = (item: Product) => {
        console.log('Added to favorites:', item);
        dispatch(addToFav(item)); // Dispatch the action with the item
    };
    return (
        <View style={styles.container}>
            <StatusBar
                hidden={false}
                barStyle='dark-content'
                animated={true}
                translucent backgroundColor="transparent"
            />
            <View style={{ flexDirection: 'row', width: responsiveWidth(90), height: responsiveHeight(10), justifyContent: 'space-evenly', marginTop: "12%", alignItems: 'center' }}>
                <TouchableOpacity style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: "#ECF0F4",
                    borderRadius: 50,
                    alignSelf: 'center',
                    height: responsiveHeight(6),
                    width: responsiveWidth(12)

                }}>
                    <Icon source="menu" size={25} />
                </TouchableOpacity>

                <View style={{
                    paddingLeft: 7,
                    paddingTop: 1,
                    justifyContent: 'center'
                }}>
                    <Text style={{ fontFamily: 'Sen-Bold', fontSize: 12, color: "#FF7622" }}>DELIVER TO</Text>
                    <View style={[{ flexDirection: 'row', width: '80%', borderColor: "#888888" }, styles.formContain]}>
                        <Dropdown
                            style={styles.dropdown}

                            selectedTextStyle={{ color: "#000000", fontFamily: "Sen-Medium", fontSize: 14 }}
                            itemTextStyle={styles.textstyle}
                            iconColor='black'
                            inputSearchStyle={styles.inputSearchStyle}
                            data={countries}
                            maxHeight={200}
                            labelField="name"
                            value={code}
                            onChange={item => {
                                setCode(item.value);
                            }}

                        />
                    </View>

                </View>
                <TouchableOpacity style={{
                    justifyContent: 'center',
                    backgroundColor: "#181C2E",
                    borderRadius: 50,
                    alignSelf: 'center',
                    alignItems: 'center',
                    height: responsiveHeight(6),
                    width: responsiveWidth(12)

                }}>
                    <Icon source="shopping" size={25} color='white' />
                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: "3%", alignSelf: 'flex-start', marginLeft: '5%' }}>
                <Text style={{
                    fontSize: 14, fontFamily: 'Sen-Medium', color: "#321B1C"
                }}>Hey sourav,
                </Text>
                <Text style={{ fontFamily: "Sen-SemiBold", fontSize: 16, color: "#321B1C" }}>
                    Good Afternoon!</Text>
            </View>

            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={{ alignItems: 'center', justifyContent: 'center', alignSelf: 'center', marginTop: "45%" }}>
                        <Pressable
                            style={[styles.button1, styles.buttonClose1]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Image source={require('../assets/Close.png')} style={{ width: responsiveWidth(4), height: responsiveHeight(2) }} />
                        </Pressable>

                        {/* Wrap modalView with LinearGradient */}
                        <LinearGradient
                            colors={['#FFBD69', '#FF7622']} // Gradient colors
                            style={styles.modalView} // Apply the same styles as the modalView
                        >
                            <Image source={require('../assets/Vector172.png')} style={{ position: 'absolute', marginTop: "60%", marginLeft: "110%", width: responsiveWidth(4), height: responsiveHeight(7) }} />
                            <Image source={require('../assets/Group260.png')} style={{ position: 'absolute', marginTop: "10%", width: responsiveWidth(17), marginLeft: "10%", height: responsiveHeight(12) }} />
                            <Text style={{ alignSelf: 'center', fontSize: responsiveFontSize(5), fontFamily: "Sen-Bold", fontWeight: "500", color: "white", marginTop: "20%" }}>Hurry Offers!</Text>
                            <Text style={{ alignSelf: 'center', fontSize: responsiveFontSize(4), fontFamily: "Sen-Bold", fontWeight: "900", color: "white", marginTop: "15%" }}>{couponCode}</Text>
                            <Text style={styles.modalText}>Use the coupon to get a 25% discount</Text>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text style={styles.textStyle}>GOT IT</Text>
                            </Pressable>
                        </LinearGradient>
                    </View>
                </Modal>
            </View>





            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{ flex: 1, alignItems: 'center', paddingTop: 20 }}>
                    {/* Animated Search Bar */}
                    {/* <Animated.View style={{ transform: [{ translateY: position }] }}> */}
                    <Searchbar
                        placeholder="Search Snacks, Food"
                        onChangeText={handleSearchChange}
                        value={searchQuery}
                        style={{ width: responsiveWidth(95), alignSelf: 'center' }}
                    />
                    {/* </Animated.View> */}

                    {/* Display Suggestions */}
                    {showSuggestions && (
                        <ScrollView
                            style={{
                                maxHeight: responsiveHeight(20),
                                marginTop: 10,
                                backgroundColor: '#fff',
                                width: responsiveWidth(95),
                                position: 'absolute'
                            }}
                        >
                            {filteredSuggestions.map((item) => (
                                <TouchableOpacity
                                    key={item.name}
                                    onPress={() => {
                                        setSearchQuery(item.name);
                                        setShowSuggestions(false);
                                    }}
                                    style={{
                                        padding: 10,
                                        borderBottomWidth: 1,
                                        borderBottomColor: '#ccc',

                                    }}
                                >
                                    <Text style={{ fontSize: 16 }}>{item.name}</Text>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>
                    )}
                </View>

                <View style={{ flexDirection: 'row', marginTop: "5%", justifyContent: 'space-evenly', height: responsiveHeight(12), alignItems: 'center', width: responsiveWidth(95), alignSelf: 'center' }}>
                    <TouchableOpacity style={{ backgroundColor: "#E9E9E9", borderRadius: 10, width: responsiveWidth(17), justifyContent: 'center', alignItems: 'center', height: responsiveHeight(11) }}>
                        <Image source={require('../assets/Vector9.png')} style={{ width: responsiveWidth(9.1), height: responsiveHeight(4) }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: "#E9E9E9", borderRadius: 10, width: responsiveWidth(17), justifyContent: 'center', alignItems: 'center', height: responsiveHeight(11) }}>
                        <Image source={require('../assets/foodCake.png')} style={{ width: responsiveWidth(7), height: responsiveHeight(4.5) }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: "#E9E9E9", borderRadius: 10, width: responsiveWidth(17), justifyContent: 'center', alignItems: 'center', height: responsiveHeight(11) }}>
                        <Image source={require('../assets/Sweet.png')} style={{ width: responsiveWidth(8), height: responsiveHeight(4.5) }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: "#E9E9E9", borderRadius: 10, width: responsiveWidth(17), justifyContent: 'center', alignItems: 'center', height: responsiveHeight(11) }}>
                        <Image source={require('../assets/Desserts.png')} style={{ width: responsiveWidth(8.5), height: responsiveHeight(5.6) }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: "#E9E9E9", borderRadius: 10, width: responsiveWidth(17), justifyContent: 'center', alignItems: 'center', height: responsiveHeight(11) }}>
                        <Image source={require('../assets/Drinks.png')} style={{ width: responsiveWidth(8), height: responsiveHeight(7) }} />
                    </TouchableOpacity>
                </View>

                <View style={{ width: responsiveWidth(95), flexDirection: 'row', justifyContent: 'space-around', alignSelf: 'center', marginTop: "2%", alignItems: 'center' }}>
                    <Text style={{ fontFamily: "Sen-Medium", fontSize: 12, color: "#FA8700" }}>Breakfast</Text>
                    <Text style={{ fontFamily: "Sen-Medium", paddingRight: "2%", fontSize: 12, color: "#FA8700" }}>Pastries</Text>
                    <Text style={{ fontFamily: "Sen-Medium", paddingRight: "2%", fontSize: 12, color: "#FA8700" }}>Sweets</Text>
                    <Text style={{ fontFamily: "Sen-Medium", paddingRight: "2%", fontSize: 12, color: "#FA8700" }}>Dessert</Text>
                    <Text style={{ fontFamily: "Sen-Medium", paddingRight: "2%", fontSize: 12, color: "#FA8700" }}>Drinks</Text>
                </View>

                <View>
                    <Text style={{ fontSize: responsiveFontSize(3.2), color: "#171725", fontFamily: "Sen-Bold", marginTop: "9%", marginLeft: "5%" }}>Special offer</Text>
                </View>


                <View style={styles.status}>
                    <StatusCarousel images={images} />

                </View>






                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: responsiveWidth(95), marginTop: "10%", alignSelf: 'center' }}>

                    <TouchableOpacity style={{

                        width: "45%",
                        height: 125,
                        borderRadius: 10,
                        backgroundColor: "#ffffff",
                        alignItems: 'center',
                        shadowColor: '#000',
                        shadowOffset: { width: 5, height: 5 },
                        shadowOpacity: 0.5,
                        shadowRadius: 10,
                        elevation: 5,
                    }}>
                        <Text style={{ fontSize: 12, fontWeight: "400", fontFamily: "Sen-Medium", color: "#000000", marginTop: "10%" }}>
                            Regular Cake
                        </Text>
                        <Image source={require('../assets/cake.png')} style={{ width: responsiveWidth(25), height: responsiveHeight(12) }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        width: "45%",
                        height: 125,
                        borderRadius: 10,
                        backgroundColor: "#ffffff",
                        alignItems: 'center',
                        shadowColor: '#000',
                        shadowOffset: { width: 5, height: 5 },
                        shadowOpacity: 0.5,
                        shadowRadius: 10,
                        elevation: 5,
                    }}>
                        <Text style={{ fontSize: 12, fontWeight: "400", fontFamily: "Sen-Medium", color: "#000000", marginTop: "10%" }}>
                            Gifts
                        </Text>
                        <Image source={require('../assets/gift.png')} style={{ width: responsiveWidth(35), height: responsiveHeight(9), marginTop: "5%" }} />
                    </TouchableOpacity>
                </View>

                {/* //donuts// */}
                <View style={{ flexDirection: 'row', width: "90%", justifyContent: 'space-between', marginTop: 20, margin: 15, alignItems: 'center', alignSelf: 'center' }}>
                    <TouchableOpacity style={styles.miniButton}>
                        <Text style={styles.buttonText}>Donuts</Text>
                        <Image source={require('../assets/donut.png')} style={styles.image} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.miniButton}>
                        <Text style={styles.buttonText}>Candles</Text>
                        <Image source={require('../assets/image2184.png')} style={styles.image} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.miniButton}>
                        <Text style={styles.buttonText}>Flowers</Text>
                        <Image source={require('../assets/flower.png')} style={styles.image} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.miniButton}>
                        <Text style={styles.buttonText}>Others</Text>
                        <Image source={require('../assets/more.png')} style={{ height: 35, width: "50%", marginTop: 5 }} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, alignSelf: 'center' }}>
                    <Text style={styles.head}>
                        Discount guaranteed!
                    </Text>
                    <Icon source="chevron-right" size={25} />
                </View>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>

                        {products.filter(item => item.id === 1).map(item => (
                            <ProductComponent key={item.id} item={item} onAddToFav={handleAddToFav} />
                        ))}

                        {products.filter(item => item.id === 2).map(item => (
                            <ProductComponent key={item.id} item={item} onAddToFav={handleAddToFav} />
                        ))}
                        {products.filter(item => item.id === 3).map(item => (
                            <ProductComponent key={item.id} item={item} onAddToFav={handleAddToFav} />
                        ))}
                    </View>

                </ScrollView>
                <View style={styles.imageBox}>
                    <View style={{ backgroundColor: '#FF7622', zIndex: 3, width: responsiveWidth(50), height: "100%", position: 'absolute' }}>

                        <Text style={{ fontSize: responsiveFontSize(2), fontWeight: 700, color: "#ffffff", fontFamily: "SemiBold", marginTop: "10%", width: "70%", marginLeft: "10%" }}>Some interesting events of YUMMY FOOD</Text>

                        <TouchableOpacity style={{ position: 'absolute', zIndex: 3, backgroundColor: '#FFFFFF', width: responsiveWidth(25), alignItems: 'center', height: responsiveHeight(4), marginTop: "50%", justifyContent: 'center', marginLeft: "10%", borderRadius: 10 }}>
                            <Text style={{ fontSize: responsiveFontSize(2), fontFamily: "Sen-SemiBold", color: "#171725" }}>Discover</Text>
                        </TouchableOpacity>
                    </View>
                    <Image
                        source={require('../assets/carousel.png')} // Replace with your image path
                        style={styles.image5}
                    />
                </View>


                {/* 2nd discount */}

                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: "7%", alignSelf: 'center' }}>
                    <Text style={styles.head}>
                        What's delicious around here?
                    </Text>
                    <Icon source="chevron-right" size={25} />
                </View>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        {products.filter(item => item.id === 4).map(item => (
                            <ProductComponent key={item.id} item={item} onAddToFav={handleAddToFav} />
                        ))}
                        {products.filter(item => item.id === 5).map(item => (
                            <ProductComponent key={item.id} item={item} onAddToFav={handleAddToFav} />
                        ))}
                        {products.filter(item => item.id === 6).map(item => (
                            <ProductComponent key={item.id} item={item} onAddToFav={handleAddToFav} />
                        ))}

                    </View>

                </ScrollView>

                {/* 3rd Discount */}

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: "2%" }}>
                        <TouchableOpacity style={{ marginTop: 20, marginLeft: "3%" }}>
                            <Image source={require('../assets/food3.png')} style={{
                                borderRadius: 15,
                                width: responsiveWidth(70),
                                height: 140
                            }} />
                            <Text style={{ marginTop: 10, fontSize: 18, fontFamily: 'Sen-Bold', color: "black" }}>Cukiernia Sowa</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginTop: 20, marginLeft: "2%", borderRadius: 10, width: responsiveWidth(55) }}>
                            <Image source={require('../assets/food4.png')}
                                style={{
                                    borderRadius: 15,
                                    width: responsiveWidth(70),
                                    height: 140

                                }} />
                            <Text style={{ marginTop: 10, fontSize: 18, fontFamily: 'Sen-Bold', color: "black" }}>Grycan</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginTop: 20, marginLeft: "9%", borderRadius: 10, width: responsiveWidth(55) }}>
                            <Image source={require('../assets/food3.png')}
                                style={{
                                    borderRadius: 15,
                                    width: responsiveWidth(70),
                                    height: 140

                                }} />
                            <Text style={{ marginTop: 10, fontSize: 18, fontFamily: 'Sen-Bold', color: "black" }}>Grycan</Text>
                        </TouchableOpacity>

                    </View>

                </ScrollView>

                {/* 4th Discount */}

                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: "10%", width: responsiveWidth(95), alignSelf: 'center' }}>
                    <Text style={styles.head}>
                        Highlights of March
                    </Text>
                    <Icon source="chevron-right" size={25} />
                </View>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        {products.filter(item => item.id === 7).map(item => (
                            <ProductComponent key={item.id} item={item} onAddToFav={handleAddToFav} />
                        ))}
                        {products.filter(item => item.id === 8).map(item => (
                            <ProductComponent key={item.id} item={item} onAddToFav={handleAddToFav} />
                        ))}
                        {products.filter(item => item.id === 9).map(item => (
                            <ProductComponent key={item.id} item={item} onAddToFav={handleAddToFav} />
                        ))}

                    </View>

                </ScrollView>
                {/* nearby Resturant */}


                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: "10%", width: responsiveWidth(95), alignSelf: 'center' }}>
                    <Text style={styles.head}>
                        Nearby Restaurants
                    </Text>
                    <Icon source="chevron-right" size={25} />
                </View>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        <TouchableOpacity style={{ marginTop: 20, marginLeft: "3%" }}>
                            <Image source={require('../assets/Res2.png')} style={{

                                width: responsiveWidth(57),
                                height: 140
                            }} />
                            <Text style={{ marginTop: 10, fontSize: 15, fontFamily: 'Sen-Bold', color: "black" }}>Elisandra Restaurant</Text>

                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: "2%" }}>
                                <Icon source="map-marker-outline" size={15} color='#66707A' />
                                <Text style={{ fontSize: 14, fontFamily: 'Sen-Medium', color: "#66707A" }}>Elisandra Restaurant</Text>
                            </View>

                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginTop: 20, marginLeft: "2%", borderRadius: 10, width: responsiveWidth(55) }}>
                            <Image source={require('../assets/Res1.png')}
                                style={{

                                    width: responsiveWidth(57),
                                    height: 140

                                }} />
                            <Text style={{ marginTop: 10, fontSize: 15, fontFamily: 'Sen-Bold', color: "black" }}>Elisandra Restaurant</Text>

                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: "2%" }}>
                                <Icon source="map-marker-outline" size={15} color='#66707A' />
                                <Text style={{ fontSize: 14, fontFamily: 'Sen-Regular', color: "#66707A" }}>Elisandra Restaurant</Text>
                            </View>

                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginTop: 20, marginLeft: "3%", borderRadius: 10, width: responsiveWidth(55) }}>
                            <Image source={require('../assets/Res2.png')}
                                style={{

                                    width: responsiveWidth(57),
                                    height: 140

                                }} />
                            <Text style={{ marginTop: 10, fontSize: 15, fontFamily: 'Sen-Bold', color: "black" }}>Elisandra Restaurant</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: "2%" }}>
                                <Icon source="map-marker-outline" size={15} color='#66707A' />
                                <Text style={{ fontSize: 14, fontFamily: 'Sen-Regular', color: "#66707A" }}>Elisandra Restaurant</Text>
                            </View>

                        </TouchableOpacity>

                    </View>

                </ScrollView>
                <View style={{ height: responsiveHeight(42), borderBottomWidth: 1, borderColor: "#BFC6CC" }}>
                    <View style={{ width: responsiveWidth(90), alignSelf: 'center', marginTop: "5%" }}>
                        <Text style={{

                            fontFamily: 'Sen-Bold',
                            fontSize: 20,
                            color: "#171725",
                            width: "85%",

                        }}>Recommended For You</Text>

                        <TouchableOpacity style={{ marginTop: 20, alignSelf: 'center' }}>
                            <Image source={require('../assets/foryou1.png')} style={{
                                borderTopLeftRadius: 15,
                                borderTopRightRadius: 15,
                                width: responsiveWidth(90),
                                height: 140
                            }} />


                        </TouchableOpacity>
                        <View style={{
                            position: 'absolute',
                            backgroundColor: "#332C45",
                            height: 28,
                            width: responsiveWidth(30),
                            alignItems: 'center',
                            borderRadius: 20,
                            marginTop: "47%",
                            marginLeft: "60%",
                            justifyContent: 'center'
                        }}>
                            <Text style={{
                                color: "#ffffff",
                                fontSize: 10,
                                fontFamily: 'Sen-SemiBold'
                            }}>4% off your order</Text>
                        </View>


                    </View>


                    <Text style={{ fontSize: responsiveFontSize(2.2), fontFamily: 'Sen-Bold', color: "black", marginTop: "5%", width: responsiveWidth(90), alignSelf: 'center' }}>Cedric Grolet Cafe</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: "2%", width: responsiveWidth(90), alignSelf: 'center' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ fontSize: 14, color: "#78828A", fontFamily: 'Sen-SemiBold' }}>1.5 Km | </Text>
                            <Rating id={10} />
                            <Text style={{ fontSize: 14, color: "#78828A", fontFamily: 'Sen-SemiBold' }}> 4.8 (1.2k)</Text>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            {/* <Favourite id={10} /> */}
                        </View>
                    </View>
                </View>

                {/* 2nd recomended */}
                <View style={{ height: responsiveHeight(40), borderBottomWidth: 1, borderColor: "#BFC6CC" }}>
                    <View style={{ width: responsiveWidth(90), alignSelf: 'center', marginTop: "5%" }}>

                        <TouchableOpacity style={{ marginTop: 20, alignSelf: 'center' }}>
                            <Image source={require('../assets/foryou2.png')} style={{
                                borderTopLeftRadius: 15,
                                borderTopRightRadius: 15,
                                width: responsiveWidth(90),
                                height: 140
                            }} />


                        </TouchableOpacity>
                        <View style={{
                            position: 'absolute',
                            backgroundColor: "#332C45",
                            height: 28,
                            width: responsiveWidth(30),
                            alignItems: 'center',
                            borderRadius: 20,
                            marginTop: "40%",
                            marginLeft: "60%",
                            justifyContent: 'center'
                        }}>
                            <Text style={{
                                color: "#ffffff",
                                fontSize: 10,
                                fontFamily: 'Sen-SemiBold'
                            }}>4% off your order</Text>
                        </View>


                    </View>


                    <Text style={{ fontSize: responsiveFontSize(2.2), fontFamily: 'Sen-Bold', color: "black", marginTop: "5%", width: responsiveWidth(90), alignSelf: 'center' }}>La Duree</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: "2%", width: responsiveWidth(90), alignSelf: 'center' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ fontSize: 14, color: "#78828A", fontFamily: 'Sen-SemiBold' }}>1.5 Km | </Text>
                            <Rating id={11} />
                            <Text style={{ fontSize: 14, color: "#78828A", fontFamily: 'Sen-SemiBold' }}> 4.8 (1.2k)</Text>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            {/* <Favourite id={11} /> */}
                        </View>
                    </View>
                </View>

                {/* 3rd Recomended */}
                <View style={{ height: responsiveHeight(40), borderBottomWidth: 1, borderColor: "#BFC6CC" }}>
                    <View style={{ width: responsiveWidth(90), alignSelf: 'center', marginTop: "5%" }}>

                        <TouchableOpacity style={{ marginTop: 20, alignSelf: 'center' }}>
                            <Image source={require('../assets/foryou3.png')} style={{
                                borderTopLeftRadius: 15,
                                borderTopRightRadius: 15,
                                width: responsiveWidth(90),
                                height: 140
                            }} />


                        </TouchableOpacity>
                        <View style={{
                            position: 'absolute',
                            backgroundColor: "#332C45",
                            height: 28,
                            width: responsiveWidth(30),
                            alignItems: 'center',
                            borderRadius: 20,
                            marginTop: "40%",
                            marginLeft: "60%",
                            justifyContent: 'center'
                        }}>
                            <Text style={{
                                color: "#ffffff",
                                fontSize: 10,
                                fontFamily: 'Sen-SemiBold'
                            }}>4% off your order</Text>
                        </View>


                    </View>


                    <Text style={{ fontSize: responsiveFontSize(2.2), fontFamily: 'Sen-Bold', color: "black", marginTop: "5%", width: responsiveWidth(90), alignSelf: 'center' }}>Cedric Grolet Cafe</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: "2%", width: responsiveWidth(90), alignSelf: 'center' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ fontSize: 14, color: "#78828A", fontFamily: 'Sen-SemiBold' }}>1.5 Km | </Text>
                            <Rating id={12} />
                            <Text style={{ fontSize: 14, color: "#78828A", fontFamily: 'Sen-SemiBold' }}> 4.8 (1.2k)</Text>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            {/* <Favourite id={12} /> */}
                        </View>
                    </View>
                </View>
                <View style={{ height: responsiveHeight(10) }}></View>
            </ScrollView>

            <Footer />

        </View>

    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    dropdown: {
        // margin: 10,
        fontFamily: 'Sen-Medium',
        color: "black",
        width: "70%",
        // height: 50,
        // marginLeft: -50,
        // paddingLeft: "5%",
        textDecorationColor: "black",

    },
    textstyle: {
        color: "#000000",
        fontFamily: 'Sen-Medium',
        fontSize: 10
    },
    formContain: {
        width: "90%",
    },
    inputSearchStyle: {
        fontFamily: 'Sen-Medium',
        color: "red",
    },
    modalView: {
        margin: 20,
        backgroundColor: '#FFBD69',
        borderRadius: 40,
        padding: 35,

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: responsiveWidth(86),
        height: responsiveHeight(52)
    },
    button: {
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "white",
        marginTop: "5%",
        height: responsiveHeight(8),
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {

    },
    buttonClose: {
        backgroundColor: "#FF7622",

    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {

        marginTop: "15%",
        marginBottom: 15,
        textAlign: 'center',
        fontWeight: "700",
        fontSize: responsiveFontSize(1.7),
        color: "white",
        fontFamily: "sen-Bold"
    },
    button1: {
        width: responsiveWidth(15),
        height: responsiveHeight(8),
        borderRadius: 50,
        padding: 10,
        elevation: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonClose1: {
        backgroundColor: '#FFBD69',
        position: 'absolute',


        zIndex: 2,
        right: 19,
        top: -6,
    },
    miniButton: {

        backgroundColor: "#ffffff",
        height: 70,
        width: "20%",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 5,
    },
    buttonText: {
        fontFamily: 'Sen-SemiBold',
        fontSize: 12,
        color: "#000000",
    },
    image: {
        height: 35,
        width: "70%",
        marginTop: 5,

    },
    head: {
        fontFamily: 'Sen-Bold',
        fontSize: 20,
        color: "#171725",
        width: "85%",
        marginLeft: 15,

    },
    status: {
        height: responsiveHeight(20),
        width: responsiveWidth(90),
        alignSelf: 'center',
        marginTop: "5%"
    },
    imageBox: {
        marginTop: "10%",
        alignSelf: 'center',
        width: responsiveWidth(90),
        height: responsiveHeight(20),
        borderRadius: 10, // Optional: makes corners rounded
        overflow: 'hidden', // Ensures image is clipped within the box
        backgroundColor: '#ccc', // Fallback background color if image isn't loaded
    },
    image5: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    productsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    image3: {
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        width: responsiveWidth(52),
        height: 140,
    },
    productName: {
        marginTop: 20,
        fontSize: 18,
        fontFamily: 'Sen-Bold',
        color: 'black',
    },
    detailsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: '5%',
    },
    distanceRatingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    distanceText: {
        fontSize: 10,
        color: '#000000',
        fontFamily: 'Sen-SemiBold',
    },
    ratingText: {
        fontSize: 10,
        color: '#000000',
        fontFamily: 'Sen-SemiBold',
    },
    discountContainer: {
        position: 'absolute',
        backgroundColor: '#332C45',
        height: 28,
        width: responsiveWidth(30),
        alignItems: 'center',
        borderRadius: 20,
        marginTop: 10,
        justifyContent: 'center',
    },
    discountText: {
        color: '#ffffff',
        fontSize: 10,
        fontFamily: 'Sen-SemiBold',
    },

})