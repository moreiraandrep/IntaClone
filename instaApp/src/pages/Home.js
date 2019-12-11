import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.texto}>Bem vindo a Home</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7159c1',
  },
  texto: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ddd',
  },
});
