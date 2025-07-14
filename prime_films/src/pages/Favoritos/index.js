import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Header from "../../components/Header";

export default function Favoritos(){
  return(
    <View style={styles.container}>
      <Header/>
      <Text style={styles.text}>Meus Filmes</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text:{
    color: '#FFF',
    fontSize: 20
  }
});