import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable';

const ButtonAnimated = Animatable.createAnimatableComponent(TouchableOpacity);

export default function App() {
  return (
    <View style={styles.container}>
      <Animatable.Text 
        style={styles.title}
        animation="bounce"
        iterationCount={Infinity}
        duration={2000}
      >
        Sujeito Programador!
      </Animatable.Text>

      <ButtonAnimated style={styles.button} animation="pulse">
        <Text style={{ color: '#FFF' }}>Animar</Text>
      </ButtonAnimated>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
  },
  button:{
    width: '70%',
    height: 30,
    backgroundColor: "#121212",
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25
  }
});
