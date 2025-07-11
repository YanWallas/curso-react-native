import { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';

import api from './src/services/api';
import Filmes from './src/Filmes';

export default function App() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function loadFilmes(){
      const response = await api.get(`movie/now_playing?api_key=10336075e69e824f4134ca90376b9ed8&language=pt-BR`);
      //console.log(response.data);
      setFilmes(response.data.results);
      setLoading(false);
    }

    loadFilmes();

  }, [])
  
  if(loading){
    return(
      <View style={{ alignItems:'center', justifyContent:'center', flex:1}}>
        <ActivityIndicator color='#121212' size={45}/>
      </View>
    )
  }else{
    return (
      <View style={styles.container}>
        
        <FlatList
          data={filmes}
          keyExtractor={item => String(item.id) }
          renderItem={({item}) => <Filmes data={item}/> }
        />

        <StatusBar backgroundColor="#1c1c1c" barStyle="light-content" />

      </View>
    );
  }
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});
