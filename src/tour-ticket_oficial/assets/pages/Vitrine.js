import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Viagens from '../Components/Viagens';
import Button from '../Components/Button';
import Destinos from './Destinos'

const Vitrine = (props) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.cabecalho}>
        <Image style={styles.imagem} source={require('../img/Cruzeiro.jpg')} />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.text}>BUSQUE POR UM DESTINO</Text>
      </View>
      <ScrollView>
      
        <View>
          <Button
            style={styles.button}
            icon="login"
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.textButton}> Acesse sua conta </Text>
          </Button>

          <Button
            style={styles.button}
            icon="Duvidas"
            onPress={() => navigation.navigate('duvidas')}>
            <Text style={styles.textButton}> Dúvidas? </Text>
          </Button>
        </View>
        <View style={styles.line} />

      <TouchableOpacity onPress={props.onClick}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Viagens img={require('../img/Paraty.jpg')} cost="R$:1000" onClick={()=> alert('Clicou')}>
            Paraty
          </Viagens>
          <Viagens img={require('../img/Rio_de_janeiro.jpg')} cost="R$:1800" onClick={() => navigation.navigate('RioDeJaneiro')}> 
            Rio de Janeiro
          </Viagens>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Viagens img={require('../img/Aparecida.jpg')} cost="R$:800" onClick={() => navigation.navigate('Destinos')}>
            Aparecida do Norte
          </Viagens>
          <Viagens img={require('../img/pocos_de_caldas.jpg')} cost="R$:1500" onClick={()=> alert('Clicou')}>
            Poços de Caldas
          </Viagens>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }} onClick={()=> alert('Clicou')}>
          <Viagens img={require('../img/franca.jpg')} cost="R$:3000">
            França
          </Viagens>
          <Viagens img={require('../img/sao_paulo.jpg')} cost="R$:1200" onClick={()=> alert('Clicou')}>
            São Paulo
          </Viagens>
        </View>

        </TouchableOpacity>
      </ScrollView>
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'FFF',
  },
  textContainer: {
    align: 'center',
    flexDirection: 'row',
    marginTop: '3%',
    marginHeight: '5%',
    marginRight: '5%',
    marginBottom: '2%',
  },
  cabecalho: {
    width: '100%',
  },
  imagem: {
    width: '100%',
    height: 150,
  },

  text: {
    align: 'center',
    fontFamily: 'Anton_40',
    fontSize: 20,
    color: '#488F51',
    marginLeft: 70,
  },
  line: {
    borderColor: '#488F51',
    borderBottomColor: 2,
  },
  button: {
    width: 250,
    height: 35,
    marginBottom: 8,
    marginTop: 6,
    marginRight: 50,
    marginLeft: 70,
    backgroundColor: '#488F51',
    opacity: 0.8,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    fontSize: 20,
  },
  textButton: {
    color: 'white',
    fontSize: 17,
    opacity: 0.9,
    alignContent: 'center',
  },
});

export default Vitrine;
