import { Component } from "react";
import { Text, View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker'
import Slider from '@react-native-community/slider';

class Pessoas extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      status: 0,
      statusAll: [
        {key: 1, nome: "OK"},
        {key: 2, nome: "Em Andamento"},
        {key: 3, nome: "Finalizado"}
      ],
      sliderValue: 20
    };

  }

  render() {

    let statusItem = this.state.statusAll.map((v,k) => {
      return <Picker.Item key={k} value={k} label={v.nome}/>
    })

    return (
      <View style={styles.areaPessoa}>
        <Text style={styles.textPessoa}>Nome: {this.props.data.name}</Text>
        <Text style={styles.textPessoa}>Idade: {this.props.data.idade}</Text>
        <Text style={styles.textPessoa}>Email: {this.props.data.email}</Text>
        <Text style={{color: '#FFF', fontSize: 18, padding: 6, marginTop: 8}}>Status: {this.state.statusAll[this.state.status].nome}</Text>

        <Picker 
          selectedValue={this.state.status}
          onValueChange={(itemValue, itemIndex) => this.setState({status: itemValue})}
          style={styles.picker}
        >
         {statusItem}
        </Picker>

        <Text style={{color: '#FFF', fontSize: 18, padding: 6, marginTop: 8}}> Porcentagem de Conclusão: {this.state.sliderValue.toFixed(0)}%</Text>
        <Slider 
          minimumValue={0}
          maximumValue={100}
          onValueChange={(valorSelecionado) => this.setState({sliderValue: valorSelecionado})}
          value={this.state.sliderValue}
          minimumTrackTintColor="#00FF00"
          maximumTrackTintColor="#FF0000"
        /> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  areaPessoa:{
    backgroundColor: '#222',
    marginBottom: 5,
    marginTop: 5,
  },
  textPessoa:{
    color: '#FFF',
    fontSize: 18,
    padding: 6,
    marginTop: 8,
  },
  picker:{
    backgroundColor: '#777',
  }
});

export default Pessoas;