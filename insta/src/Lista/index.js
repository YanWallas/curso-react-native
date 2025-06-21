import React, { Component } from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

class Lista extends Component{

  constructor(props){
    super(props);
    this.state = { 
      feed: this.props.data
    };
  }

  render(){
    return(
      <View style={styles.areaFeed}>
        <View style={styles.viewPerfil}>
          <Image
            source={{uri: this.state.feed.imgperfil}}
            style={styles.fotoPerfil}
          />

          <Text style={styles.nomeUsuario}>{this.state.feed.nome}</Text>
        </View>

        <Image
          resizeMode="cover"
          source={{uri: this.state.feed.imgPublicacao}}
          style={styles.fotoPublicacao}
        />

        <View style={styles.areaBtn}>
          <TouchableOpacity>
            <Image
              source={require('../img/like.png')}
              style={styles.iconLike}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnSend}>
            <Image
              source={require('../img/send.png')}
              style={styles.iconLike}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.viewRodape}>
          <Text style={styles.nomeRodape}>
            {this.state.feed.nome}
          </Text>

          <Text style={styles.descRodape}>
            {this.state.feed.descricao}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  areaFeed:{

  },
  nomeUsuario:{
    fontSize: 22,
    textAlign: 'left',
    color: '#000000'
  },
  fotoPerfil:{
    width: 40,
    height: 40,
    borderRadius: 25,
    marginRight: 6,
  },
  fotoPublicacao:{
    flex:1,
    height: 400,
    alignItems: 'center',
  },
  viewPerfil:{
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    padding: 8,
  },
  areaBtn:{
    flexDirection: 'row',
    padding: 5
  },
  iconLike:{
    width: 33,
    height: 33,
  },
  btnSend:{
    paddingLeft: 6,
  },
  viewRodape:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  descRodape:{
    paddingLeft: 5,
    fontSize: 15,
    color: '#000'
  },
  nomeRodape:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    paddingLeft: 6
  }
});

export default Lista;