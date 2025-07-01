import React, {Component} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Modal, Image, TextInput, TouchableOpacity } from 'react-native';
import InfoModal from './src/Components/InfoModal';

export default class App extends Component{

  constructor(props){
    super(props);
    this.state={
      modalVisible: false,
      alcool: '',
      gasolina: '',
      resultado: '',
    };
  }

  calcular(){
    const { alcool, gasolina } = this.state;
    const alc = parseFloat(alcool);
    const gas = parseFloat(gasolina);

    if(!alc || !gas) return;

    const resultado = (alc / gas) < 0.7 ? 'Álcool é a melhor opção!' : 'Gasolina é a melhor opção!';
    this.setState({ resultado, modalVisible: true });

  }

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
              keyboardType='numeric'
              value={this.state.alcool}
              onChangeText={(valor) => this.setState({alcool: valor})}
            />
          </View>

          <View style={styles.inputArea}>
            <Text style={styles.inputText}>Gasolina (preço por litro):</Text>
            <TextInput
              style={styles.input}
              keyboardType='numeric'
              value={this.state.gasolina}
              onChangeText={(valor) => this.setState({gasolina: valor})}
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={ this.calcular.bind(this) }>
            <Text style={styles.inputButton}>Calcular</Text>
          </TouchableOpacity>
        </View>

        <Modal animationType='slide' visible={this.state.modalVisible} transparent={true}>
          <View style={{margin: 8, flex:1, alignItems: 'center', justifyContent: 'center'}}>
            <InfoModal 
              resultado={this.state.resultado}
              alcool={this.state.alcool}
              gasolina={this.state.gasolina}

              fechar={ () => this.setState({ 
                modalVisible: false,
                alcool: '',
                gasolina: '',
                resultado: ''
               })}
            />
          </View>
        </Modal>
        
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
