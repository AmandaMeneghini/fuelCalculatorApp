import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity} from 'react-native';

class ModalResult extends Component {
  render() {
    return (
      <View style={styles.modalContainer}>

        <Image source={require('../../images/gas.png')} />

        <Text style={styles.responseTitle}>Compensa usar {this.props.response}</Text>

        <Text style={styles.textHeaderPrice}>
            Com os preços:
        </Text>
        <Text style={styles.textPrice}>Álcool: R$ {this.props.alcoholValue}</Text>
        <Text style={styles.textPrice}>Gasolina: R$ {this.props.gasValue}</Text>

        <TouchableOpacity style={styles.btn} onPress={this.props.close}>
            <Text style={styles.btnText}>Calcular novamente</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: '#212121',
        justifyContent: 'center',
        alignItems: 'center',
    },
    responseTitle: {
        color: '#30EF5A',
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 30
    },
    textHeaderPrice: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    textPrice: {
        fontSize: 17,
        color: '#FFFFFF',
        margin: 5,
    },
    btn: {
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 40,
        paddingRight: 40,
        borderWidth: 1.5,
        borderColor: '#EF4130',
        borderRadius: 5,
        margin: 20,
    },
    btnText: {
        fontSize: 18,
        color: '#EF4130',
        fontWeight: 'bold',
    }
})

export default ModalResult;