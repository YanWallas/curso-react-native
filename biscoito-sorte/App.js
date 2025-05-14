import { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      textoFrase: "",
      img: require("./src/biscoito.png"),
    };
    this.frases = [
      "A vida trará coisas boas se tiver paciência.",
      "Dificuldades preparam pessoas comuns para destinos extraordinários.",
      "A vida é feita de escolhas, faça a sua.",
      "Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você.",
      "Não compense na ira o que lhe falta na razão.",
      "A maior de todas as torres começa no solo.",
      "Não espere por uma crise para descobrir o que é importante em sua vida.",
      "A vida é uma aventura ousada ou não é nada.",
    ];

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

  }

  quebraBiscoito() {
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);

    this.setState({
      textoFrase: '"' + this.frases[numeroAleatorio] + '"',
      img: require("./src/biscoitoAberto.png"),
    });
  }

  render() {
    return (
      <View style={styles.container}>

        <Image
          source={this.state.img}
          style={styles.img}
        />

        <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>
      
        <TouchableOpacity style={styles.botao} onPress={this.quebraBiscoito}>
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
