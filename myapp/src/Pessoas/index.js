import { Component } from "react";
import { Text, View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker'

class Pessoas extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      status: 0,
      
    };

  }

  render() {
    return (
      <View style={styles.areaPessoa}>
        <Text style={styles.textPessoa}>Nome: {this.props.data.name}</Text>
        <Text style={styles.textPessoa}>Idade: {this.props.data.idade}</Text>
        <Text style={styles.textPessoa}>Email: {this.props.data.email}</Text>
        <Text style={{color: '#FFF', fontSize: 18, padding: 6, marginTop: 8}}>{this.state.status}</Text>

        <Picker 
          selectedValue={this.state.status}
          onValueChange={(itemValue, itemIndex) => this.setState({status: itemValue})}
          style={styles.picker}
        >
          <Picker.Item key={1} value={1} label="OK"/>
          <Picker.Item key={2} value={2} label="Em Andamento"/>
          <Picker.Item key={3} value={3} label="Finalizado"/>
        </Picker>
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