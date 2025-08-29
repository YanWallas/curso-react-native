import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import { useNavigation } from "@react-navigation/native";

export default function Sobre(){
  const navigation = useNavigation();
  
  return(
    <View style={styles.container}>
      <Text>Página SOBRE</Text>
      <Button title="Ir para Home" onPress={ () => navigation.navigate('Home') }/>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})