import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-paper/src/components/Icon'
import { FavouriteContext } from '../pages/FavouriteContext';
import LinearGradient from 'react-native-linear-gradient';
import {
    ScrollView,
    StyleSheet,
    Text,
    Button,
    TextInput,
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
import { Searchbar } from 'react-native-paper';
import {
    responsiveFontSize,
    responsiveWidth,
    responsiveHeight
} from 'react-native-responsive-dimensions';
import { addToFav } from './redux/action';
import { Product } from '../pages/home';
const [star, setStar] = useState(true);
const [heart, setHeart] = useState(true);
const navigation = useNavigation()
const togglePasswordVisibility = () => {
    setStar(!star);
    setHeart(!heart);
};



export default function Star() {
    const { addFavourite } = useContext(FavouriteContext)!;

    const dish = { id: 1, name: 'Dish Name', rating: 4.8, distance: '1.5 Km' };
    console.log(dish)

    const handleAddToFav = () => {
        console.log("called");
        if (dish) {
            console.log('my favourite dish', dish); // Ensure dish is defined
            togglePasswordVisibility();
            setHeart((prev) => !prev);
            addFavourite(dish);  // Ensure addFavourite function is defined and works correctly
        } else {
            console.log("Dish not selected");
        }
    };
    return (

        <TouchableOpacity
            onPress={() => {handleAddToFav}}>
            <Icon source={(heart) ? "cards-heart-outline" : 'cards-heart'} size={20} />

        </TouchableOpacity>




    );

};


const styles = StyleSheet.create({
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
})