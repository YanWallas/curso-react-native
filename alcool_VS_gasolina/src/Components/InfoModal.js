import React, {Component} from "react";
import { Text, View, Image, TouchableOpacity, StyleSheet} from "react-native";

export default class InfoModal extends Component {
  render(){
    const { resultado, alcool, gasolina, fechar } = this.props;

    return (
      <View style={styles.modalContainer}>
        <Image
          source={require('../assets/img/gas.png')}
          style={styles.image}
        />

        <Text style={styles.resultado}>{resultado}</Text>

        <Text style={styles.precoTitulo}>Com os preços:</Text>
        <Text style={styles.precoText}>Álcool: R$ {parseFloat(alcool).toFixed(2)}</Text>
        <Text style={styles.precoText}>Gasolina: R$ {parseFloat(gasolina).toFixed(2)}</Text>

        <TouchableOpacity style={styles.button} onPress={fechar}>
          <Text style={styles.textButton}>Calcular Novamente</Text>
        </TouchableOpacity>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  modalContainer:{
    flex:1,
    width: '98%',
    backgroundColor: '#1c1c1c',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center'
  },
  image:{
    width: 200,
    height: 200,
    margin: 20,
  },
  resultado:{
    fontSize: 22,
    fontWeight: 'bold',
    color: '#00e676',
    marginBottom: 20,
    textAlign: 'center'
  },
  precoTitulo:{
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12
  },
  precoText:{
    color: '#FFF',
    fontSize: 16,
    marginBottom: 8
  },
  button:{
    marginTop: 30,
    borderWidth: 1,
    borderColor: '#ef4130',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8
  },
  textButton:{
    color: '#ef4130',
    fontSize: 16,
    fontWeight: 'bold'
  }
});