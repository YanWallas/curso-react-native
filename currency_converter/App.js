import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator, TextInput, TouchableOpacity } from 'react-native';

import { PickerItem } from './src/Picker';
import { api } from './src/services/api';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [moedas, setMoedas] = useState([]);

  const [moedaSelecionada, setMoedaSelecionada] = useState(null);

  useEffect(()=>{
    async function loadMoedas(){
      const response = await api.get("all");
      let arrayMoedas = [];
      Object.keys(response.data).map((key) => {
        arrayMoedas.push({
          key: key,
          label: key,
          value: key,
        })
      })

      setMoedas(arrayMoedas);
      setMoedaSelecionada(arrayMoedas[0].key)
      setLoading(false);
    }

    loadMoedas();
  },[])

  if(loading){
    return(
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#101213'}}>
        <ActivityIndicator color='#FFF' size='large' />
      </View>
    )
  }else{
    return (
      <View style={styles.container}>
        <View style={styles.areaMoeda}>
          <Text style={styles.titulo}>Selecione sua moeda</Text>

          <PickerItem
            moedas={moedas}
            moedaSelecionada={moedaSelecionada}
            onChange={(moeda) => setMoedaSelecionada(moeda)}
          />

        </View>

        <View style={styles.areaValor}>
          <Text style={styles.titulo}>Digite um valor para converter em (R$)</Text>
          <TextInput
            placeholder="EX: 1.50"
            style={styles.input}
            keyboardType='numeric'
          />
        </View>

        <TouchableOpacity style={styles.btnArea}>
          <Text style={styles.btnText}>Converter</Text>
        </TouchableOpacity>

        <StatusBar style="auto" />
      </View>
    );
  }

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    paddingTop: 40
  },
  areaMoeda:{
    backgroundColor: "#f9f9f9",
    width: '90%',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    padding: 8,
    marginBottom: 2
  },
  titulo:{
    fontSize: 16,
    color: '#000',
    fontWeight: '500',
    paddingLeft: 5,
    paddingTop: 5
  },
  areaValor:{
    width: '90%',
    backgroundColor: "#f9f9f9",
    paddingTop: 8,
    paddingBottom: 8,
  },
  input: {
    width: '100%',
    padding: 8,
    fontSize: 18,
    color: "#000"
  },
  btnArea:{
    width: '90%',
    height: 45,
    backgroundColor: "#fb4b57",
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    marginTop: 2
  },
  btnText:{
    color: "#000",
    fontWeight: 'bold',
    fontSize: 16
  }
});
