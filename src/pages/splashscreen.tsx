import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import {
  StyleSheet,
  StatusBar,
  Image,
  View,
} from 'react-native';
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';

type SplashscreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Splash'>;

export default function Splashscreen() {
  const navigation = useNavigation<SplashscreenNavigationProp>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login'); // Replace Splashscreen with Login after 2 seconds
    }, 2000); // 2000 milliseconds = 2 seconds

    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, [navigation]);

  return (
    <View style={styles.container}>
                    <StatusBar 
            hidden= {false}
            barStyle= 'dark-content'
         animated={true}
         translucent backgroundColor="transparent"
            />
      <View style={{ height: responsiveHeight(60), justifyContent: 'center', width: responsiveWidth(100), alignItems: 'center', marginTop: "12%"}}>
      <Image 
        source={require('../assets/image1.png')} // Make sure the logo path is correct
        style={styles.crumbleLogo}
      />
      </View>
      <View style={{ alignSelf: 'flex-end', height: responsiveHeight(30)}}>
      <Image source={require('../assets/Ellipse6.png')} style={{width: responsiveWidth(65), height: responsiveHeight(35)}}/>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FE8A01', // Orange background color
  },
  crumbleLogo: {
    width: responsiveWidth(65),
    height: responsiveHeight(27),
    justifyContent: 'center',
    
  },
});
