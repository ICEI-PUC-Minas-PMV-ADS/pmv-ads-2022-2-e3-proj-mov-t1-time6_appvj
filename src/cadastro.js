import React from 'react';

import {
  Text,
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} 

from 'react-native';

export default function App() {
  return (
    <View style={styles.background}>
      <Image
        style={styles.imagem}
        source={require('./assets/tourTicket.png.png')}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        autoCorrect={false}
        onChangeText={() => {}}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        autoCorrect={false}
        onChangeText={() => {}}
      />

      <TouchableOpacity style={styles.btnSubmit}>
        <Text style={styles.text}> Acessar </Text>
      </TouchableOpacity>

      
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },

  imagem: {
    width: 150,
    height: 150,
    justifyContent: 'center',
  },

  input: {
    flex: 0.0,
    alignContent: 'center',
    justifyContent: 'space-between',
    width: '90%',
    opacity : 0.9,
    backgroundColor: '#488F51',
    color: 'white',    
    marginBottom: 13,
    fontSize: 17,
    borderRadius: 8,
    padding: 10,
    placeholder: 'white',
  },

  

  btnSubmit: {
    width: '90%',
    backgroundColor: '#488F51',
    opacity : 0.9,
    color: 'white',    
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    borderRadius: 9,
    fontSize: 20,
    
  },

  registerText: {
    color: '#63C771',        
  },

  text:{
    color: 'white',
    fontSize: 17, 
    opacity : 1.0,
  }

});