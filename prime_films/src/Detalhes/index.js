import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function Detalhes(props){
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
    width: '95%',
    height: '95%',
    backgroundColor: '#121212',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    flex: 1,
    justifyContent: 'space-between',
  },
  conteudo:{
    paddingBottom: 20
  },
  areaBotao:{
    alignItems: 'center'
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
    marginTop: 12
  },
   capa:{
    height: 150,
    margin: 10
  },
  sinopse:{
    color: '#FFF',
    fontSize: 18,
    marginTop: 8,
    marginBottom: 8,
    marginLeft: 10,
    fontWeight: 'bold'
  },
  descricao:{
    color: '#FFF',
    marginLeft: 10,
    marginRight: 10,
    lineHeight: 20,
    textAlign: 'justify'
  },
  avaliacao:{
    color: '#FFF',
    marginTop: 25,
    marginLeft: 10,
    marginRight: 10,
    fontWeight: 'bold',
    fontSize: 16 
  }
});