import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";


export default function Header(){
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={styles.logo}>Save Flix</Text>
      </TouchableOpacity>

      {route.name === 'Favoritos' ? (
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.favoritos}>Voltar ao Catálogo</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => navigation.navigate('Favoritos')}>
          <Text style={styles.favoritos}>Meus Filmes</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    height: 60,
    backgroundColor: '#000000',
  },
  logo: {
    fontSize: 30,
    color: '#ff0000',
    fontWeight: 'bold',
    marginBottom: 6
  },
  favoritos: {
    backgroundColor: '#ff0000',
    color: '#FFF',
    paddingHorizontal: 14,
    paddingVertical: 5,
    borderRadius: 4,
    fontWeight: 'bold',
  },
});
