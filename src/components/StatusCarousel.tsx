import React, { useState, useRef, useEffect } from 'react';
import { View, Image, FlatList, StyleSheet, Dimensions, Animated, TouchableOpacity } from 'react-native';
import { responsiveHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
const { width } = Dimensions.get('window'); // Get device width for full-width images

interface StatusCarouselProps {
    images: any[]; // Array of local images (using require)
}

const StatusCarousel: React.FC<StatusCarouselProps> = ({ images }) => {
    const flatListRef = useRef<FlatList>(null); // Ref for FlatList to control scrolling
    const [currentIndex, setCurrentIndex] = useState(0); // State to track current image index
    const progress = useRef(new Animated.Value(0)).current; // Progress value for the animated bar

    // Automatically change image every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            // Increment index, loop back to 0 if at the end of the array
            setCurrentIndex((prevIndex) => {
                const nextIndex = prevIndex + 1;
                return nextIndex < images.length ? nextIndex : 0;
            });
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval); // Clear interval on component unmount
    }, [images.length]);

    // Scroll to the current index whenever it changes and restart the animation
    useEffect(() => {
        if (flatListRef.current) {
            flatListRef.current.scrollToIndex({ index: currentIndex, animated: true });
        }
        startProgressAnimation(); // Restart the progress bar animation on each image change
    }, [currentIndex]);

    // Function to start the progress animation
    const startProgressAnimation = () => {
        progress.setValue(0); // Reset progress
        Animated.timing(progress, {
            toValue: responsiveScreenWidth(90), // Animate to full width
            duration: 5000, // 5 seconds to fill
            useNativeDriver: false, // Native driver doesn't support width animation
        }).start();
    };

    return (
        <View style={styles.container}>
            {/* Progress Bar at the top */}
            <Animated.View style={[styles.progressBar, { width: progress }]} />

            <FlatList
                style={{ borderRadius: 10, height: responsiveHeight(35) }}
                ref={flatListRef}
                data={images}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.imageContainer}>
                        <Image source={item} style={styles.image} />
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '100%',

        borderRadius: 20
    },
    progressBar: {
        height: 3, // Height of the progress bar
        backgroundColor: "#ffffff", // Green progress bar (adjust color as needed)
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 2,
        marginTop: "2%"
    },
    imageContainer: {
        width, // Full width for each image
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        zIndex: 1
    },
});

export default StatusCarousel;
