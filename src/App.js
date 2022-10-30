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
        placeholder="Senha "
        autoCorrect={false}
        onChangeText={() => {}}
      />

      <TextInput
        style={styles.input}
        placeholder="Telefone"
        autoCorrect={false}
        onChangeText={() => {}}
      />

      <TextInput
        style={styles.input}
        placeholder="Endereço"
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
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },

  imagem: {
    width: 280,
    height: 280,
    justifyContent: 'center',
  },

  input: {
    flex: 0.1,
    alignContent: 'center',
    justifyContent: 'space-between',
    width: '80%',
    opacity : 0.9,
    backgroundColor: '#9DC2A1',
    color: 'black',    
    marginBottom: 29,
    fontSize: 18,
    borderRadius: 9,
    padding: 5,
    placeholder: 'white',
  },

  

  btnSubmit: {
    width: '80%',
    backgroundColor: '#488F51',
    opacity : 0.9,
    color: 'white',    
    height: 40,
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
    color: 'black',
    fontSize: 20, 
    opacity : 0.9,
  }

});
