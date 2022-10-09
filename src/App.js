import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

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
        <Text> Acessar </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.registerText}>
        <Text> Criar conta gratuita </Text>
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
    backgroundColor: '#488F51',
    color: 'white',
    marginBottom: 15,
    fontSize: 17,
    borderRadius: 8,
    padding: 10,
  },

  btnSubmit: {
    width: '90%',
    backgroundColor: '#488F51',
    color: 'white',    
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    borderRadius: 8,
    fontSize: 20,
  },

  registerText: {
    color: '#63C771',
    fontSize: 20,
  },
});
