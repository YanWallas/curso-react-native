import { Component } from "react";
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Pessoas from "./src/Pessoas";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: '1', name: 'Wallas', idade: 26, email: 'wallas@example.com' },
      ]
    };
  }

  render() {
    return (
      <View style={styles.container}> 

        <FlatList
          data={this.state.data}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => <Pessoas data={item} />}
        />
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default App;