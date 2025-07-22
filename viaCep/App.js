import { useState, useRef } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, Keyboard } from 'react-native';
import api from './src/services/api';

export default function App() {
  const [cep, setCep] = useState('');
  const inputRef = useRef(null);
  const [cepUser, setCepUser] = useState(null);
  async function buscar(){
    if(cep === ''){
      alert('Digite um cep valido');
      setCep('');
      return;
    }

    try{
      const response = await api.get(`/${cep}/json`);
      setCepUser(response.data);
      Keyboard.dismiss();

    }catch(err){
      console.log('ERRO: ' + err);
    }
    
  }

  function limpar(){
    setCep('');
    inputRef.current.focus();
    setCepUser(null);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.text}>Digite um CEP desejavel:</Text>

        <TextInput
          style={styles.input}
          placeholder="Ex: 79003241"
          value={cep}
          onChangeText={(text) => setCep(text)}
          keyboardType='numeric'
          ref={inputRef}
        />
      </View>

      <View style={styles.areaBtn}>
        <TouchableOpacity style={[styles.btn, {backgroundColor: '#1d75cd'}]} onPress={buscar}>
          <Text style={styles.btnText}>Buscar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.btn, {backgroundColor: '#cd3e1d'}]} onPress={limpar}>
          <Text style={styles.btnText}>Limpar</Text>
        </TouchableOpacity>
      </View>

      { cepUser && 
        <View style={styles.resultado}>
          <Text style={styles.itemText}>CEP: {cepUser.cep}</Text>
          <Text style={styles.itemText}>Logradouro: {cepUser.logradouro}</Text>
          <Text style={styles.itemText}>Bairro: {cepUser.bairro}</Text>
          <Text style={styles.itemText}>Cidade: {cepUser.localidade}</Text>
          <Text style={styles.itemText}>Estado: {cepUser.uf}</Text>
        </View>
      }
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30
  },
  text:{
    marginTop: 25,
    marginBottom: 15,
    fontSize: 25,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 5,
    width: '90%',
    padding: 10,
    fontSize: 18
  },
  areaBtn:{
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-around'
  },
  btn:{
    justifyContent: 'center',
    alignItems: "center",
    padding: 15,
    borderRadius: 5,
  },
  btnText:{
    fontSize: 20,
    color: "#FFF"
  },
  resultado:{
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 10,
    margin: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  itemText:{
    fontSize: 20
  }
});
