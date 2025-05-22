import { Component } from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';
import { Slider } from '@react-native-community/slider';
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
      
        <Text style={styles.label}>Defina sua Sexo: </Text>
        <Picker
          selectedValue={this.state.status}
          onValueChange={(itemValue, itemIndex) => this.setState({ status: itemValue })}
          style={styles.picker}
        >
          {statusItem}
        </Picker>
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
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  picker: {
    height: 50, 
    width: 200,
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 8,
  },
});

export default App;