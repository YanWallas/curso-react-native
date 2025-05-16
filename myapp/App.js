import { Component } from "react";
import { StyleSheet, Text, View, FlatList } from 'react-native';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: '1', name: 'Wallas', idade: 26, email: 'wallas@example.com' },
        { id: '2', name: 'Matheus', idade: 30, email: 'matheus@example.com' },
        { id: '3', name: 'João', idade: 22, email: 'joao@example.com' },
        { id: '4', name: 'Henrique', idade: 15, email: 'henrique@example.com' },
        { id: '5', name: 'Lima', idade: 46, email: 'lima@example.com' },
      ]
    };
  }

  render() {
    return (
      <View style={styles.container}> 

        <FlatList
          data={this.state.data}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => <Pessoa data={item} />}
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
    height: 200,
    marginBottom: 15
  },
  textPessoa:{
    color: '#FFF',
    fontSize: 20,
    padding: 10,
    marginTop: 10,
  }
});

export default App;

class Pessoa extends Component {
  render() {
    return (
      <View style={styles.areaPessoa}>
        <Text style={styles.textPessoa}>Nome: {this.props.data.name}</Text>
        <Text style={styles.textPessoa}>Idade: {this.props.data.idade}</Text>
        <Text style={styles.textPessoa}>Email: {this.props.data.email}</Text>
      </View>
    );
  }
}
