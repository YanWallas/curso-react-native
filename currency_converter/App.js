import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, TextInput, TouchableOpacity, Keyboard } from 'react-native';

import { PickerItem } from './src/Picker';
import { api } from './src/services/api';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [moedas, setMoedas] = useState([]);
  const [moedaSelecionada, setMoedaSelecionada] = useState(null);

  const [moedaBValor, setMoedaBValor] = useState('');
  const [valorMoeda, setValorMoeda] = useState(null);
  const [valorConvertido, setValorConvertido] = useState(0);


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

  async function converter(){
    const valorNumerico = parseFloat(moedaBValor);

    if(!moedaSelecionada || isNaN(valorNumerico)){
      return;
    }

    const response = await api.get(`/all/${moedaSelecionada}-BRL`);
    let cotacao = parseFloat(response.data[moedaSelecionada]?.ask);
    let cotacaoArredondada = parseFloat(cotacao.toFixed(2));

    if(isNaN(cotacao)){
      console.warn("cotação invalida");
      return;
    }

    const resultado = cotacaoArredondada * valorNumerico;

    setValorConvertido(`${resultado.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`)
    setValorMoeda(valorNumerico);
    Keyboard.dismiss();
    console.log("Cotação:", cotacao);
    console.log("Valor digitado:", valorNumerico);
    console.log("Resultado:", resultado);

  }

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
            value={moedaBValor}
            onChangeText={(valor) => setMoedaBValor(valor)}
          />
        </View>

        <TouchableOpacity style={styles.btnArea} onPress={converter}>
          <Text style={styles.btnText}>Converter</Text>
        </TouchableOpacity>

        {valorConvertido !== 0 && (
          <View style={styles.areaResultado}>
            <Text style={styles.valorConvertido}>{valorMoeda} {moedaSelecionada}</Text>
            <Text style={{ fontSize: 18, margin: 8, fontWeight: '500', color: '#000' }}> corresponde a </Text>
            <Text style={styles.valorConvertido}>{valorConvertido}</Text>
          </View>
        )}
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
  },
  areaResultado:{
    width: '90%',
    backgroundColor: '#FFF',
    marginTop: 34,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24
  },
  valorConvertido:{
    fontSize: 28,
    color: '#000',
    fontWeight: 'bold'
  }
});
