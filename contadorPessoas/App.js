import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, Pressable } from 'react-native';

export default function App() {
  const [counter, setCounter] = useState(0);
  const [limit, setLimit] = useState(10);

 function changeCounter(counter){
  if(counter < 0) return;

  if(counter >= limit){
    setCounter(10);
    return;
  }

  setCounter(counter);

 }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>CONTAGEM DE PESSOAS DENTRO DO RESTAURANTE</Text>

      <Text style={styles.text}>Pessoas no restaurante:</Text>
      <Text style={styles.counterText}>{counter}</Text>

      {counter >= limit && (
        <Text style={styles.warning}>Restaurante está no seu limite de pessoas.</Text>
      )}

      <View style={styles.areBtn}> 
        <TouchableOpacity 
          style={[styles.btn, { backgroundColor: '#007bff'}, counter >= limit && { backgroundColor: "#DDD"}]} 
          onPress={() => changeCounter(counter + 1)}
          disabled={counter >= limit}
        >
          <Text style={styles.btnText}>Adicionar</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.btn, { backgroundColor: '#961a1aff'}, counter === 0 && { backgroundColor: "#DDD"}]} 
          onPress={() => changeCounter(counter - 1)}
          disabled={counter === 0}
        >
          <Text style={styles.btnText}>Remover</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity 
        style={[styles.btnZerar, counter === 0 && { backgroundColor: "#DDD", borderColor: "#DDD"}]}
        disabled={counter === 0}
        onPress={() => setCounter(0)}
      >
        <Text style={[styles.textZerar, counter === 0 && { color: "#FFF"}]}>ZERAR CONTAGEM</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.btnMaximo, counter >= limit && { backgroundColor: "#DDD", borderColor: "#DDD"}]}
        disabled={counter >= limit}
        onPress={() => setCounter(10)}
      >
        <Text style={[styles.textMaximo, counter >= limit && { color: "#FFF"}]}>LOTAÇÃO MAXIMA</Text>
      </TouchableOpacity>

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
  titulo:{
    fontWeight: 'bold',
    marginBottom: 15
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
    marginBottom: 20,
    fontWeight: 'bold'
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
    fontSize: 16,
    fontWeight: 'bold'
  },
  btnZerar:{
    marginTop: 30,
    borderWidth: 2,
    borderColor: '#ff0000',
    padding: 8,
    borderRadius: 8
  },
  textZerar:{
    color: '#ff0000',
    fontSize: 18,
    fontWeight: 'bold'
  },
    btnMaximo:{
    marginTop: 10,
    borderWidth: 2,
    borderColor: '#f8b135',
    padding: 8,
    borderRadius: 8
  },
  textMaximo:{
    color: '#f8b135',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
