import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Feather from '@expo/vector-icons/Feather';

export default function App() {
  return (
    <View style={styles.container}>
      <Feather
        name='users'
        size={45}
        color="#FF0000"
      />

      <TouchableOpacity>
        <Feather
          name='video'
          size={45}
          color="#000"q
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
