import React, { Component } from 'react';
import { StatusBar, Platform } from 'react-native';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      input: '',
      nome: ''
    };
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

        <TouchableOpacity>
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
