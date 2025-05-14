import { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      num: 0,
      botao: 'Start'
    };

    this.timer = null;

    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
  }

  start(){
    if(this.timer !== null){
      clearInterval(this.timer);
      this.timer = null;
      this.setState({botao: 'Start'});
    }else{
      // Inicia o timer
      this.timer = setInterval(() => {
      this.setState({num: this.state.num + 0.1});
      }, 100);

      this.setState({botao: 'Stop'});
    }
  }

  stop(){

  }


  render() {
    return (
      <View style={styles.container}>
        <Image 
          source={require("./src/cronometro.png")}
          style={styles.img}
        />

        <Text style={styles.timer}> {this.state.num.toFixed(1)} </Text>

        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.btn} onPress={this.start}>
            <Text style={styles.btnText}> {this.state.botao} </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={this.stop}>
            <Text style={styles.btnText}>Stop</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00aeef',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timer:{
    fontSize: 65,
    fontWeight: 'bold',
    marginTop: -160,
    color: '#FFF',
  },
  btnArea:{
    flexDirection: 'row',
    marginTop: 80,
    height: 40,
  },
  btn:{
    flex: 1,
    backgroundColor: '#FFF',
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 17,
    height: 40,
  },
  btnText:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00aeef',
  },
});

export default App;