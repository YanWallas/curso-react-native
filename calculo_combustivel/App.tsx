import React, {Component} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Modal, Image, TextInput, TouchableOpacity } from 'react-native';

export default class App extends Component{
  render(){
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('./src/assets/img/logo.png')}
        /> 

        <Text style={styles.text}>Qual melhor opção?</Text>
        
        <View style={styles.areaInputs}>
          <View style={styles.inputArea}>
            <Text style={styles.inputText}>Álcool (preço por litro):</Text>
            <TextInput
              style={styles.input}
            />
          </View>

          <View style={styles.inputArea}>
            <Text style={styles.inputText}>Gasolilna (preço por litro):</Text>
            <TextInput
              style={styles.input}
            />
          </View>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.inputButton}>Calcular</Text>
          </TouchableOpacity>
        </View>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#292929',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    width: 200,
    height:200,
    marginBottom: 20
  },
  text:{
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold'
  },
  areaInputs:{
    width: '95%',
    marginTop: 40
  },
  inputArea:{
    width: 'auto'
  },
  inputText:{
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: 8
  },
  input:{
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 12
  },
  button:{
    backgroundColor: '#EF4130',
    marginTop: 15,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center'
  },
  inputButton:{
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
  }
});
