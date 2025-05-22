import { Component } from 'react';
import { StyleSheet, Text, View, Switch, TextInput } from 'react-native';
import Slider from '@react-native-community/slider';
import { Picker } from '@react-native-picker/picker';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      status: 0,
      statusSexo: [
        { key: 1, nome: 'Masculino' },
        { key: 2, nome: 'Feminino' },
        { key: 3, nome: 'Outro' }
      ],
      sliderValue: 20,
      switchValue: false,
    };
  }

  render() {

    let statusItem = this.state.statusSexo.map((v,k) => {
      return <Picker.Item key={k} value={k} label={v.nome} />
    })

    return (
      <View style={styles.container}>


        <View style={styles.hr} />

        <Text style={styles.label}>Defina sua Sexo: </Text>
        <Picker
          selectedValue={this.state.status}
          onValueChange={(itemValue, itemIndex) => this.setState({ status: itemValue })}
          style={styles.picker}
        >
          {statusItem}
        </Picker>

        <View style={styles.hr} />

        <Text style={styles.label}>Limite Desejado: {this.state.sliderValue.toFixed(0)}</Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={2500}
          value={this.state.sliderValue}
          onValueChange={valueSelecionado => this.setState({ sliderValue: valueSelecionado })}
          minimumTrackTintColor="#00ff00"
          maximumTrackTintColor="#FF0000"
        />

        <View style={styles.hr} />

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.label}>
            Você é estudante? {this.state.switchValue ? "Sim" : "Não"}
          </Text>

          <Switch 
            value={this.state.switchValue}
            onValueChange={(valorSwitch) => this.setState({switchValue: valorSwitch})}
            thumbColor={this.state.switchValue ? "#00FF00" : "#FF0000"}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  input: {
    height: 50,
    width: '100%',
    backgroundColor: '#D3D3D3',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
  },
  label: {
    fontSize: 18,
    padding: 6,
    margin: 10,
  },
  picker: {
    height: 50, 
    width: 160,
    backgroundColor: '#D3D3D3',
    borderRadius: 10,
  },
  hr:{
    height: 2,
    backgroundColor: '#ccc',
    width: '100%',
    marginVertical: 10,
  },
  slider: {
    width: '100%',
    height: 40,
    backgroundColor: '#D3D3D3',
    borderRadius: 10,
  },
});

export default App;