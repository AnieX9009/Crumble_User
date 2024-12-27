import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux'; // Import Redux Provider
import store from './src/components/redux/store'; // Import your Redux store

// Import all your screens
import LogInEmpty from './src/pages/logInEmpty';
import Signup from './src/pages/signup';
import Verificationcode from './src/pages/verificationcode';
import Splashscreen from './src/pages/splashscreen';
import Locationaccess from './src/pages/locationaccess';
import Signsuccess from './src/pages/signsuccess';
import Home from './src/pages/home';
import Notification from './src/pages/notification';
import FavoritesFood from './src/pages/favoritesFood';
import Personalprofile from './src/pages/personalprofile';
import Editprofile from './src/pages/editProfile';
import MyOrders from './src/pages/myOrders';
import Location from './src/pages/location';
export type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  Signup: undefined;
  Verificationcode: undefined;
  Locationaccess: undefined;
  Signsuccess: undefined;
  Home: undefined;
  Notification: undefined;
  FavoritesFood: undefined;
  Personalprofile: undefined;
  Editprofile: undefined;
  MyOrders: undefined;
  Location: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  return (
    // Wrap the app with the Redux Provider to provide access to the Redux store
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Splash" component={Splashscreen} />
          <Stack.Screen name="Login" component={LogInEmpty} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Verificationcode" component={Verificationcode} />
          <Stack.Screen name="Locationaccess" component={Locationaccess} />
          <Stack.Screen name="Signsuccess" component={Signsuccess} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Notification" component={Notification} />
          <Stack.Screen name="FavoritesFood" component={FavoritesFood} />
          <Stack.Screen name="Personalprofile" component={Personalprofile} />
          <Stack.Screen name="Editprofile" component={Editprofile} />
          <Stack.Screen name="MyOrders" component={MyOrders} />
          <Stack.Screen name="Location" component={Location} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
