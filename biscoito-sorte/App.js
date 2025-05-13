import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

class App extends Component {
  render() {
    return (
      <View style={styles.container}>

        <Image
          source={require("./src/biscoito.png")}
          style={styles.img}
        />

        <Text style={styles.textoFrase}>" Alguma frase aqui" </Text>
      
        <TouchableOpacity style={styles.botao}>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}> Abrir Biscoito </Text>
          </View>
        </TouchableOpacity>
        
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  img:{
    width: 250,
    height: 250,
  },
  textoFrase:{
    fontSize: 20,
    color: "#dd7d22",
    margin: 30,
    fontStyle: "italic",
    textAlign: "center",
    fontWeight: "bold",
  },
  botao:{
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: "#dd7d22",
    borderRadius: 25,
  },
  btnArea:{
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  btnTexto:{
    fontSize: 20,
    color: "#dd7d22",
    fontWeight: "bold",
  }
});

export default App;
