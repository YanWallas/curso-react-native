import { Component } from "react";
import { Text, View, StyleSheet } from 'react-native';

class Pessoas extends Component {
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

export default Pessoas;