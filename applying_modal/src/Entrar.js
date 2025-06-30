import React, {Component} from "react";
import { Text, View, Button } from "react-native";

export default class App extends Component {
  render(){
    return (
      <View style={{backgroundColor: '#292929', width:'100%', height: 350, borderRadius: 15}}>
        <Text style={{paddingTop:15,margin:15, color: '#FFF', fontSize:28, textAlign: 'center'}}>Seja Bem-Vinda!</Text>
        
        <View style={{ alignItems: 'center' }}>
          <View style={{width:'90%', borderRadius: 15, overflow: 'hidden', }}>
            <Button title="Sair" onPress={ this.props.fechar } />
          </View>
        </View>
        
        
      </View>
    )
  }
}