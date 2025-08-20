import React, { useRef, useEffect} from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';

export default function App() {
  const larAnimada = useRef(new Animated.Value(0)).current;
  const altAnimada = useRef(new Animated.Value(50)).current;
  //const opacidadeAnimada = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // ANIMAÇÃO SEQUENCIAL (FAZ UMA, DEPOIS A OUTRA)
    // Animated.sequence([
    //   Animated.timing(larAnimada, {
    //     toValue: 300,
    //     duration: 2000,
    //     useNativeDriver: false
    //   }),
    //   Animated.timing(altAnimada, {
    //     toValue: 300,
    //     duration: 2000,
    //     useNativeDriver: false
    //   }),
    //   Animated.timing(opacidadeAnimada,{
    //     toValue: 0,
    //     duration: 1000,
    //     useNativeDriver: false
    //   })
    // ]).start();
    //********************************************************** */

    // ANIMAÇÃO PARALELA(TODO AO MESMO TEMPO)
    // Animated.parallel([// 
    //   Animated.timing(larAnimada, {
    //     toValue: 300,
    //     duration: 2000,
    //     useNativeDriver: false
    //   }),
    //   Animated.timing(altAnimada, {
    //     toValue: 300,
    //     duration: 2000,
    //     useNativeDriver: false
    //   })
    // ]).start();
    //********************************************************** */

    // // ANIMAÇÃO EM LOOP
    // // ANIMAÇÃO SEQUENCIAL E PARALELA JUNTAS:
    // // COMEÇA COM A SEQUENCIA
    // Animated.loop(
    //   Animated.sequence([
    //     Animated.timing(opacidadeAnimada, {
    //       toValue: 1,
    //       duration: 2000,
    //       useNativeDriver: false
    //     }),
    //     //DEPOIS CHAMA O BLOCO DE PARALELA
    //     Animated.parallel([
    //       Animated.timing(larAnimada, {
    //         toValue: 300,
    //         duration: 2000,
    //         useNativeDriver: false
    //       }),
    //       Animated.timing(altAnimada, {
    //         toValue: 300,
    //         duration: 2000,
    //         useNativeDriver: false
    //       }),
    //     ]),
    //     // CONTINUA A PARALELA, VOLTANDO PARA O ORIGINAL, UTILIZANDO O LOOṔ
    //     Animated.parallel([
    //       Animated.timing(larAnimada, {
    //         toValue: 150,
    //         duration: 2000,
    //         useNativeDriver: false
    //       }),
    //       Animated.timing(altAnimada, {
    //         toValue: 150,
    //         duration: 2000,
    //         useNativeDriver: false
    //       }),
    //     ])
    //   ])
    // ).start();

    Animated.timing(larAnimada, {
      toValue: 100,
      duration: 4000,
      useNativeDriver: false
    }).start();
  }, []);

  //usando interpolate para usar porcentagem de tela na largura.
  let porcentagemLargura = larAnimada.interpolate({
    inputRange: [0, 100], //Entrada, vai que quanto a quanto.
    outputRange: ['0%', '100%'] //Vai sair 0% até 100%
  })

  return (
    <View style={styles.container}>

      <Animated.View
        style={{
          width: porcentagemLargura,
          height: altAnimada,
          backgroundColor: '#4169e1',
          justifyContent: 'center',
          //opacity: opacidadeAnimada,
          borderRadius: 50
        }}
      >
        {/* <Text style={{ textAlign: 'center', fontSize: 22, color: '#FFF'}}>Carregando...</Text> */}
      </Animated.View>

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
});
