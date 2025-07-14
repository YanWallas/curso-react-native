import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView, StatusBar, Platform, StyleSheet } from 'react-native';

import Home from './src/pages/Home';
import Favoritos from "./src/pages/Favoritos";


const Stack = createNativeStackNavigator();

export default function App(){
  return(
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="#000" barStyle="light-content"/>

      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Favoritos" component={Favoritos}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea:{
    flex: 1,
    backgroundColor: "#000",
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  }
});

