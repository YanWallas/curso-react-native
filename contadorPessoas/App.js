import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pessoas no restaurante:</Text>
      <Text style={styles.counterText}>10</Text>

      <Text style={styles.warning}>Restaurante está no seu limite de pessoas.</Text>

      <View style={styles.areBtn}> 
        <TouchableOpacity style={[styles.btn, { backgroundColor: '#007bff'}]}>
          <Text style={styles.btnText}>Adicionar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.btn, { backgroundColor: '#ff0000'}]}>
          <Text style={styles.btnText}>Remover</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20
  },
  counterText:{
    fontSize: 30,
    marginBottom: 20,
    backgroundColor: '#121212',
    color: '#FFF',
    padding: 14,
    borderRadius: 8    
  },
  warning:{
    backgroundColor: '#f8b135',
    padding: 4,
    borderRadius: 4,
    marginBottom: 20
  },
  areBtn:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  btn:{
    padding: 10,
    margin: 10,
    borderRadius: 5
  },
  btnText:{
    color: "#FFF",
    fontSize: 16
  }
});
