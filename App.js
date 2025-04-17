import React, {Component} from 'react';
import {
        View,
        Text, 
        Button,
        Image,
        TextInput,
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
        <Image source={require('./src/images/logo.png')} />
        <Text>Qual melhor opção?</Text>

        <View>
          <Text>Álcool (preço por litro):</Text>
          <TextInput 
          keyboardType="numeric"/>
        </View>

        <View>
          <Text>Gasolina (preço por litro):</Text>
          <TextInput 
          keyboardType="numeric"/>
        </View>

        <Button title='Calcular' />

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
