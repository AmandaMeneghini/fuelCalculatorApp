import React, {Component} from 'react';
import {
        View,
        Text, 
        Button,
      StyleSheet} from 'react-native';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {

    };   
  }

  render() {
    return (
      <View style={styles.container}>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default App;
