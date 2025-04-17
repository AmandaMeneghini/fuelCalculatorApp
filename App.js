import React, {Component} from 'react';
import {
        View,
        Text, 
        Button,
        Image,
        TextInput,
      StyleSheet,
      TouchableOpacity} from 'react-native';

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
        <Text style={styles.titleText}>Qual melhor opção?</Text>

      <View style={styles.form}>
        <View style={styles.inputArea}>
          <Text style={styles.labelText}>Álcool (preço por litro):</Text>
          <TextInput 
          style={styles.input}
          keyboardType="numeric"/>
        </View>

        <View style={styles.inputArea}>
          <Text style={styles.labelText}>Gasolina (preço por litro):</Text>
          <TextInput 
          style={styles.input}
          keyboardType="numeric"/>
        </View>

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Calcular</Text>
        </TouchableOpacity>
      </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212121',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  titleText:{
    fontSize: 30,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginTop: 25
  },
  labelText: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  inputArea:{
    width: '100%',
    gap: 8,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    padding: 15
  },
  btn: {
    backgroundColor:'#EF4130',
    color: '#FFFFFF',
    width: '100%',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  btnText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 25,
  },
  form:{
    width: '100%',
    gap: 18,
    marginTop: 80
  }
})

export default App;
