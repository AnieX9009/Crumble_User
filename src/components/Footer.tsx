import React, { useState, useEffect } from 'react';
import { useNavigation, useIsFocused, useRoute } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-paper/src/components/Icon';
import { useSelector } from 'react-redux';
import { RootState } from '../components/redux/store';

const { width } = Dimensions.get('window');

const Footer: React.FC = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const isFocused = useIsFocused(); // Check if the current screen is focused

    // Accessing favorite items from Redux store
    const favData = useSelector((state: RootState) => state.favourites);
    const [favItems, setFavItems] = useState(0);

    // State to track the active icon
    const [activeIcon, setActiveIcon] = useState<string>(route.name);

    // Update favItems whenever favData changes
    useEffect(() => {
        setFavItems(favData.length);
    }, [favData]);

    // Update activeIcon when route changes
    useEffect(() => {
        if (isFocused) {
            setActiveIcon(route.name);
        }
    }, [route.name, isFocused]);

    // Function to handle icon press and navigation
    const handleIconPress = (iconName: string, navigateTo: string) => {
        setActiveIcon(iconName);
        navigation.navigate(navigateTo);
    };

    return (
        <View style={styles.footer}>
            <TouchableOpacity onPress={() => handleIconPress('Home', 'Home')}>
                <Icon
                    source="compass"
                    size={30}
                    color={activeIcon === 'Home' ? '#FF7622' : '#D3D1D8'}
                />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handleIconPress('Location', 'Location')}>
                <Icon
                    source= 'map-marker'
                    size={30}
                    color={activeIcon === 'Location' ? '#FF7622' : '#D3D1D8'}
                />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handleIconPress('MyOrders', 'MyOrders')}>
                <Icon
                    source= 'shopping' 
                    size={30}
                    color={activeIcon === 'MyOrders' ? '#FF7622' : '#D3D1D8'}
                />
            </TouchableOpacity>

            <TouchableOpacity
                style={{ width: "10%", height: "70%", alignItems: 'center', justifyContent: 'center' }}
                onPress={() => handleIconPress('FavoritesFood', 'FavoritesFood')}
            >
                <Icon 
                    source='cards-heart'
                    size={30}
                    color={activeIcon === 'FavoritesFood' ? '#FF7622' : '#D3D1D8'}
                />
                {favItems > 0 && (
                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>{favItems}</Text>
                    </View>
                )}
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handleIconPress('Notification', 'Notification')}>
                <Icon
                    source= "bell" 
                    size={30}
                    color={activeIcon === 'Notification' ? '#FF7622' : '#D3D1D8'}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 64,
        backgroundColor: "#ffffff",
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0',
    },
    badge: {
        backgroundColor: '#FFBD69',
        position: 'absolute',
        width: 20,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        top: -5,
        right: -10,
    },
    badgeText: {
        color: "#ffffff",
        fontFamily: "Sen-SemiBold",
        fontSize: 14,
    },
});

export default Footer;
