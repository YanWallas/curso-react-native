import React, {useState} from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from "react-native";

import Detalhes from "../Detalhes";

export default function Filmes({ data }){
  const [visibleModal, setVisibleModal] = useState(false);

  return(
    <View>

      <View style={styles.card}>
        <Text style={styles.titulo}>{data.title}</Text>

        <Image
          source={{ uri: `https://image.tmdb.org/t/p/original/${data.poster_path}` }}
          style={styles.capa}
        />

        <View style={styles.areaBotao}>
          <TouchableOpacity style={styles.botao} onPress={() => setVisibleModal(true)}>
            <Text style={styles.botaoTexto}>LEIA MAIS</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modal transparent={true} animationType="slide" visible={visibleModal}>
        <Detalhes filme={data} voltar={() => setVisibleModal(false)}/>
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  card:{
    backgroundColor: '#3b3b3b',
    margin: 15,
    elevation: 2,
    marginTop: 30
  },
  titulo:{
    padding: 15,
    fontSize: 18,
    color: '#ff0000',
    fontWeight: 'bold',
  },
  capa:{
    height: 250,
    zIndex: 2
  },
  areaBotao:{
    alignItems: 'flex-end',
    marginTop: -40,
    zIndex: 9
  },
  botao:{
    width: 100,
    backgroundColor: '#ff0000',
    opacity: 1,
    padding: 8,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5
  },
  botaoTexto:{
    color: '#FFF',
    textAlign: 'center'
  }
});