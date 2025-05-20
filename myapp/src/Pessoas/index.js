import { Component } from "react";
import { Text, View, StyleSheet, Switch } from 'react-native';
import { Picker } from '@react-native-picker/picker'
import Slider from '@react-native-community/slider';

class Pessoas extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      status: 0,
      statusSexo: [
        {key: 1, nome: "Masculino"},
        {key: 2, nome: "Feminino"},
        {key: 3, nome: "Não Especificar"}
      ],
      sliderValue: 20,
      switchValue: false
    };

  }

  render() {

    let statusItem = this.state.statusSexo.map((v,k) => {
      return <Picker.Item key={k} value={k} label={v.nome}/>
    })

    return (
      <View style={styles.areaPessoa}>
        <Text style={styles.textPessoa}>Nome: {this.props.data.name}</Text>
        <Text style={styles.textPessoa}>Idade: {this.props.data.idade}</Text>
        <Text style={styles.textPessoa}>Email: {this.props.data.email}</Text>
        <Text style={{color: '#FFF', fontSize: 18, padding: 6, marginTop: 8}}>Status: {this.state.statusSexo[this.state.status].nome}</Text>

        <Picker 
          selectedValue={this.state.status}
          onValueChange={(itemValue, itemIndex) => this.setState({status: itemValue})}
          style={styles.picker}
        >
         {statusItem}
        </Picker>

        <Text style={{color: '#FFF', fontSize: 18, padding: 6, marginTop: 8}}> Limite Desejado: {this.state.sliderValue.toFixed(0)}</Text>
        <Slider
          style={{width: '100%', height: 40, backgroundColor: '#FFF580'}} 
          minimumValue={0}
          maximumValue={2000}
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
          Você é estudante? {this.state.switchValue ? "Sim" : "Não"}
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