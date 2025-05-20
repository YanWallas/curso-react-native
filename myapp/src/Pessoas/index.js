import { Component } from "react";
import { Text, View, StyleSheet, Switch } from 'react-native';
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
      sliderValue: 20,
      switchValue: false
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
          style={{width: '100%', height: 40, backgroundColor: '#FFF580'}} 
          minimumValue={0}
          maximumValue={100}
          onValueChange={(valorSelecionado) => this.setState({sliderValue: valorSelecionado})}
          value={this.state.sliderValue}
          minimumTrackTintColor="#00FF00"
          maximumTrackTintColor="#FF0000"
        /> 

        <Switch 
          value={this.state.switchValue}
          onValueChange={(valorSwitch) => this.setState({switchValue: valorSwitch})}
          thumbColor={this.state.switchValue ? "#00FF00" : "#FF0000"}
        />

        <Text style={{color: '#FFF', fontSize: 18, padding: 6, marginTop: 8}}>
          Botão esta: {this.state.switchValue ? "Ativo" : "Inativo"}
        </Text>
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