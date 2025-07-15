import React, {useEffect, useState} from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert, Modal } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Header from "../../components/Header";
import Detalhes from "../../components/Detalhes";

export default function Favoritos(){
  const [filmes, setFilmes] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [filmeSelecionado, setFilmeSelecionado] = useState(null);
  const chave = '@saveflix';

  useEffect(() => {
    async function loadFilmes(){
      const response = await AsyncStorage.getItem(chave);
      setFilmes(JSON.parse(response) || []);
    }
    loadFilmes();
  }, []);

  async function excluirFilme(id){
    let novaLista = filmes.filter(item => item.id !== id);
    setFilmes(novaLista);
    await AsyncStorage.setItem(chave, JSON.stringify(novaLista));
    Alert.alert("Filme removido!");
  }

  function abrirDetalhes(filme){
    setFilmeSelecionado(filme);
    setModalVisible(true);
  }

  return(
    <View style={styles.container}>
      <Header/>
      <Text style={styles.text}>Meus Filmes</Text>

      {filmes.length === 0 && <Text style={styles.empty}>Você não possui nenhum filme salvo.</Text>}

      <FlatList
        data={filmes}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.nome}>{item.title}</Text>

            <View style={styles.actions}>
              <TouchableOpacity onPress={() => abrirDetalhes(item)}>
                <Text style={styles.link}>Ver Detalhes</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => excluirFilme(item.id)}>
                <Text style={styles.excluir}>Excluir</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        {filmeSelecionado && (
          <Detalhes filme={filmeSelecionado} voltar={() => setModalVisible(false)}/>
        )}
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 10
  },
  text:{
    color: '#FFF',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: '#FFF',
    borderRadius: 6,
    marginBottom: 20,
    marginTop:20
  },
  title:{
    color: '#FFF',
    fontSize: 24,
    marginBottom: 20,
  },
  empty:{
    color: '#aaa'
  },
  item: {
    marginBottom: 10,
    backgroundColor: '#202020',
    borderRadius: 6,
  },
  nome:{
    fontSize: 18,
    color: '#fff',
    padding: 4,
    marginLeft: 4
  },
  actions:{
    flexDirection: 'row',
    gap: 20,
    padding: 4,
    marginLeft: 4
  },
  link:{
    color: '#0af',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#0af",
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  excluir:{
    color: '#f00',
    borderWidth: 1,
    borderColor: "#f00",
    paddingVertical: 4,
    paddingHorizontal: 8,
  }
});