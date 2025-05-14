import { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      timer: 0,
      running: false,
    };

    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
  }

  start(){

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

        <Text style={styles.timer}> {this.state.timer.toFixed(1)} </Text>

        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.btn} onPress={this.start}>
            <Text style={styles.btnText}>Start</Text>
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