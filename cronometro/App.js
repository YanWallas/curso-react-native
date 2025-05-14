import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hello, World!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5fc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 10,
    color: '#333333',
  }
});

export default App;