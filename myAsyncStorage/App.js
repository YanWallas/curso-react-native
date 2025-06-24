import React, { Component } from 'react';
import { StatusBar, Platform } from 'react-native';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      input: '',
      nome: ''
    };

    this.gravaNome = this.gravaNome.bind(this);
  }
  
  //ComponentDiMount - Quando o componente é montado em tela, ele é chamado
  async componentDidMount(){
    await AsyncStorage.getItem('nome').then((value) => {
      this.setState({nome: value});
    })
  }

  // Toda vez que um state é atualizado ele faz algo.
  async componentDidUpdate(_, prevState){
    const nome = this.state.nome;

    if(prevState !== nome){
      await AsyncStorage.setItem('nome', nome);
    }
  }

  gravaNome(){
    this.setState({
      nome: this.state.input
    });
    alert('Salvo com sucesso!')
    Keyboard.dismiss();
  }

  render(){
    return(
      <View style={[styles.container, {paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight: 0}]}>
      
      <View style={styles.viewInput}>
        <TextInput
          style={styles.input}
          value={this.state.imput}
          onChangeText={(text) => this.setState({input: text})}
          underlineColorAndroid="transparent"
        />

        <TouchableOpacity onPress={this.gravaNome}>
          <Text style={styles.botao}>+</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.nome}>{this.state.nome}</Text>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center'
  },
  viewInput: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  input:{
    width: 350,
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    padding: 10,
  },
  botao: {
    backgroundColor: '#222',
    color: '#FFF',
    height: 40,
    padding: 10,
    marginLeft: 4
  },
  nome: {
    marginTop: 15,
    fontSize: 30,
    textAlign: 'center'
  }
});
