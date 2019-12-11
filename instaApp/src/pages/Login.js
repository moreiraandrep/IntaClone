import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';

export default class Login extends Component {
  render({navigation}) {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../assets/logo.png')} />

        <TextInput
          placeholder="CNPJ"
          style={styles.input}
          placeholderTextColor="#AAA"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          placeholderTextColor="#AAA"
          keyboardType="numeric"
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={styles.botao}>
          <Text style={styles.textoBotao}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3F3F3',
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  input: {
    height: 46,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    borderColor: '#DDD',
    borderWidth: 1,
    marginTop: 5,
    borderRadius: 4,
    margin: 15,
    paddingHorizontal: 20,
  },
  botao: {
    height: 46,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    borderColor: '#DDD',
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 4,
    margin: 15,
    backgroundColor: '#7159c1',
  },
  textoBotao: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
});
