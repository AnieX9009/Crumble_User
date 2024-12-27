// ImageBoxWithOverlay.tsx
import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

interface ImageBoxWithOverlayProps {
  imageSource: any; // Local image source
}

const ImageBoxWithOverlay: React.FC<ImageBoxWithOverlayProps> = ({ imageSource }) => {
  return (
    <View style={styles.imageBox}>
      <ImageBackground source={imageSource} style={styles.image}>
        <View style={styles.overlay}>
          <Text style={styles.overlayText}>Some Overlay Text</Text>
          <TouchableOpacity style={styles.discoverButton}>
            <Text style={styles.buttonText}>Discover</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  imageBox: {
    width: screenWidth * 0.6,
    height: screenWidth * 0.6,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#ccc',
  },
  image: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    alignItems: 'flex-start', // Align items to the start (left)
  },
  overlayText: {
    fontSize: 16,
    color: 'white',
    marginBottom: 10,
  },
  discoverButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ImageBoxWithOverlay;
