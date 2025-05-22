import { Component } from 'react';
import { StyleSheet, Text, View, Switch, TextInput, TouchableOpacity } from 'react-native';
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
      sliderValue: 100,
      switchValue: false,
      nome: '',
      idade: '',
    };
  }

  cadastrar = () => {
  const { nome, idade, status, statusSexo, sliderValue, switchValue } = this.state;

  // Verificações de campos obrigatórios
  if (!nome || nome.trim() === '') {
    alert('Por favor, preencha o nome.');
    return;
  }

  if (!idade || idade.trim() === '') {
    alert('Por favor, preencha a idade.');
    return;
  }

  if (isNaN(idade)) {
    alert('A idade deve ser um número.');
    return;
  }

  const sexoSelecionado = statusSexo[status]?.nome;
  if (!sexoSelecionado) {
    alert('Por favor, selecione um sexo.');
    return;
  }

  alert(
    `Nome: ${nome}\nIdade: ${idade}\nSexo: ${sexoSelecionado}\nLimite: ${sliderValue.toFixed(0)}\nEstudante: ${switchValue ? 'Sim' : 'Não'}`
  );
}


  render() {

    let statusItem = this.state.statusSexo.map((v,k) => {
      return <Picker.Item key={k} value={k} label={v.nome} />
    })

    return (
      <View style={styles.container}>

        <Text style={styles.title}>Faça seu cadastro!!!</Text>

        <Text style={styles.label}>Digite seu Nome: </Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          onChangeText={text => this.setState({ nome: text })}
        />

        <Text style={styles.label}>Digite sua Idade: </Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua idade"
          keyboardType="numeric"
          onChangeText={text => this.setState({ idade: text })}
        />

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
          minimumValue={100}
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

        <TouchableOpacity style={styles.areaButton} onPress={() => this.cadastrar()}>
          <Text style={styles.button}>
            Cadastrar
          </Text>
        </TouchableOpacity>
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
    backgroundColor: '#e8f5e9',
  },
  title:{
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
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
    marginBottom: 4,
  },
  picker: {
    height: 50,
    width: '80%',
    backgroundColor: '#D3D3D3',
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
  areaButton:{
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  button:{
    backgroundColor: '#007BFF',
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    width: '100%',
    textAlign: 'center',
    borderRadius: 10,
    padding: 12,
    alignItems: 'center',
    marginTop: 10,
  }
});

export default App;