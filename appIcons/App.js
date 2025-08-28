import { StyleSheet, Text, View } from 'react-native';

import Feather from '@expo/vector-icons/Feather';

export default function App() {
  return (
    <View style={styles.container}>
      <Feather
        name='users'
        size={45}
        color="#FF0000"
      />
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
