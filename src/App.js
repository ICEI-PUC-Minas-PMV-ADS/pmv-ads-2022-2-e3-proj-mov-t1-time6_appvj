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
        placeholder="CPF "
        autoCorrect={false}
        onChangeText={() => {}}
      />

       <TextInput
        style={styles.input}
        placeholder="Nome "
        autoCorrect={false}
        onChangeText={() => {}}

         

      />
 <TextInput
        style={styles.input}
        placeholder="Endereço "
        autoCorrect={false}
        onChangeText={() => {}}
      />

      <TextInput
        style={styles.input}
        placeholder="Telefone"
        autoCorrect={false}
        onChangeText={() => {}}
      />

      <TouchableOpacity style={styles.btnSubmit}>
        <Text style={styles.text}> Cadastre-se </Text>
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
    width: 160,
    height: 160,
    justifyContent: 'center',
  },

  input: {
    flex: 0.1,
    alignContent: 'center',
    justifyContent: 'space-between',
    width: '70%',
    opacity : 0.9,
    backgroundColor: '#488F51',
    color: 'white',    
    marginBottom: 15,
    fontSize: 18,
    borderRadius: 8,
    padding: 15,
    placeholder: 'white',
  },

  

  btnSubmit: {
    width: '90%',
    backgroundColor: '#488F51',
    opacity : 0.9,
    color: 'white',    
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 18,
    borderRadius: 8,
    fontSize: 20,
    
  },

  registerText: {
    color: '#63C771',        
  },

  text:{
    color: 'white',
    fontSize: 20, 
    opacity : 0.9,
  }

});