import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import * as Animatable from 'react-native-animatable';

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
  }
});
