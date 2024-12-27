import React from 'react';
import { View, Dimensions, StyleSheet, Text } from 'react-native';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';

const { width: screenWidth } = Dimensions.get('window');

interface CarouselItem {
  title: string;
  subtitle: string;
  illustration: any;  // For local images
}

interface ParallaxCarouselProps {
  data: CarouselItem[];
}

const ParallaxCarousel: React.FC<ParallaxCarouselProps> = ({ data }) => {
  const renderItem = (
    { item }: { item: CarouselItem },
    parallaxProps?: any
  ) => (
    <View style={styles.item}>
      <ParallaxImage
        source={item.illustration}
        containerStyle={styles.imageContainer}
        style={styles.image}
        parallaxFactor={0.4}
        {...(parallaxProps || {})}
      />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.subtitle}>{item.subtitle}</Text>
    </View>
  );

  return (
    <Carousel
      data={data}
      renderItem={renderItem}
      sliderWidth={screenWidth}
      itemWidth={screenWidth * 0.75}
      hasParallaxImages
    />
  );
};

const styles = StyleSheet.create({
  item: {
    width: screenWidth * 0.75,
    height: screenWidth * 0.75,
  },
  imageContainer: {
    flex: 1,
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#888',
  },
});

export default ParallaxCarousel;
