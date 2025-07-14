import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ToastAndroid } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Detalhes(props){

  async function salvarFilme(){
    const chave = '@saveflix';
    try{
      const lista = await AsyncStorage.getItem(chave);
      let filmesSalvos = JSON.parse(lista) || [];

      const hasFilme =filmesSalvos.some(item => item.id === props.filme.id);
      if(hasFilme) {
        ToastAndroid.show("Esse filme já está salvo!", ToastAndroid.SHORT);
        return;
      }

      filmesSalvos.push(props.filme);
      await AsyncStorage.setItem(chave, JSON.stringify(filmesSalvos));
      ToastAndroid.show("Filme salvo com sucesso!", ToastAndroid.SHORT);

    }catch (err){
      console.log("Erro ao salvar filme:", err);
      ToastAndroid.show("Erro ao salvar filme!", ToastAndroid.SHORT);
    }
  }

  return(
    <View style={styles.container}>

      <View style={styles.modalContainer}>

        <View style={styles.conteudo}>
          <Text style={styles.titulo}>{props.filme.title}</Text>

          <Image
            source={{ uri: `https://image.tmdb.org/t/p/original/${props.filme.backdrop_path}` }}
            style={styles.capa}
          />

          <Text style={styles.sinopse}>Sinopse:</Text>
          <Text style={styles.descricao}>{props.filme.overview}</Text>

          <Text style={styles.avaliacao}>Avaliação: {props.filme.vote_average ? props.filme.vote_average.toFixed(1) : 'N/A'} / 10</Text>
        </View>

        <View style={styles.areaBotao}>
          <TouchableOpacity style={styles.btnSalvar} onPress={salvarFilme}>
            <Text style={{ color: '#FFF', fontSize: 16 }}>Salvar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnVoltar} onPress={props.voltar}>
            <Text style={{ color: '#FFF', fontSize: 16 }}>Voltar</Text>
          </TouchableOpacity>
        </View>

      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    marginLeft:10,
    marginRight: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalContainer:{
    width: '98%',
    height: '97%',
    backgroundColor: '#121212',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    flex: 1,
    justifyContent: 'space-between',
  },
  conteudo:{
    paddingBottom: 10
  },
  areaBotao:{
    alignItems: 'center'
  },
  btnSalvar:{
    backgroundColor: '#288b11',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch'
  },
  btnVoltar:{
    backgroundColor: '#e52246',
    padding: 10,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch'
  },
  titulo:{
    textAlign: 'center',
    color: '#FF0000',
    padding: 10,
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10
  },
   capa:{
    height: 150,
    margin: 8
  },
  sinopse:{
    color: '#FFF',
    fontSize: 16,
    marginTop: 8,
    marginBottom: 8,
    marginLeft: 10,
    fontWeight: 'bold'
  },
  descricao:{
    color: '#FFF',
    marginLeft: 10,
    marginRight: 10,
    lineHeight: 18,
    textAlign: 'justify'
  },
  avaliacao:{
    color: '#FFF',
    marginTop: 16,
    marginLeft: 10,
    marginRight: 10,
    fontWeight: 'bold',
    fontSize: 16 
  }
});