// CustomDrawer.tsx
import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = ({ navigation }) => {
  return (
    <View style={styles.drawerContent}>
      <Text style={styles.drawerItem} onPress={() => navigation.closeDrawer()}>
        Item 1
      </Text>
      <Text style={styles.drawerItem} onPress={() => navigation.closeDrawer()}>
        Item 2
      </Text>
      <Text style={styles.drawerItem} onPress={() => navigation.closeDrawer()}>
        Item 3
      </Text>
    </View>
  );
};

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Main Screen Content</Text>
    </View>
  );
};

const CustomDrawer: React.FC = () => {
  const drawerRef = useRef<any>(null);

  // Open the drawer after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (drawerRef.current) {
        drawerRef.current.openDrawer(); // Programmatically open the drawer
      }
    }, 2000);

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        ref={drawerRef} // Attach the ref to the Drawer
      >
        <Drawer.Screen name="Home" component={MainScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
  drawerContent: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  drawerItem: {
    fontSize: 18,
    paddingVertical: 15,
    color: '#007AFF',
  },
});

export default CustomDrawer;
