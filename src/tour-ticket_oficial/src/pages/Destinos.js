import React, { useState } from 'react';
import {
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,  
  View,
  Text,
} from 'react-native';

import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Header from '../Components/Header';
import Button from '../Components/Button';
import Container from '../Components/Container'


const Destino = () => {
  const navigation = useNavigation();

  return (
  <Container>
    <ScrollView style={styles.container}>
      <Header title={'Destino'} goBack={() => navigation.goBack()}>
        {'item' && (
          <Appbar.Action
            icon="shopping"
            onPress={() => console.log('Destinos')}
          />
        )}
      </Header>
      <Image
        style={styles.image}
        source={require('../img/Aparecida.jpg')}
        resizeMode="cover"
      />

      <View>
        
        <View opacity={0.8}>
          <Text style={[styles.title, { fontSize: 30 }]}>       
            Aparecida do Norte{' '}
          </Text>
          <View>
          <Text style={[styles.title, { fontSize: 24 }]}> R$:800,00 </Text>
        </View>
        </View>

        <View style={styles.textContent}>
          <Text style={styles.textTitle}> SOBRE O PACOTE DE VIAGEM:  </Text>
        </View>
        <View opacity={0.8}>
          <Text style={styles.textContent}>
            
            Pacote de Viagem Santuário Nacional de Nossa  Senhora Aparecida.
            Origem: Belo Horizonte / MG Destino: Aparecida / SP Santuário
            Nacional de Nossa Senhora Aparecida. Maior templo religioso católico
            brasileiro, possui infraestrutura de ambulatório médico, centro de
            apoio ao romeiro, fraldário, achados e perdidos, acessibilidade com
            rampas e elevadores etc.
          </Text>
        </View>
        

      </View>
      <View style={styles.textContent}>
          <Text style={styles.textTitle}> ESSE PACOTE INCLUI:  </Text>
      </View>
      <View opacity={0.8}>
              <Text style={styles.textContent}>
                HOSPEDAGEM - 5 noites com café da manhã                
              </Text>
            </View>
            <View opacity={0.8}>
              <Text style={styles.textContent}>
                Passeio pelas basílicas                
              </Text>
            </View>
            <View opacity={0.8}>
              <Text style={styles.textContent}>
                TRANSFER COMPARTILHADO - Ida e volta do aeroporto ao hotel
              </Text>
            </View>
    </ScrollView>
  </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFF',
    
  },
  image: {
    width: '100%',
    height: 250,
  },
  title: {
    fontFamily: 'Anton_400Regular',
    paddingHorizontal: '2%',
    marginVertical: '2%',
    textAlign: 'center',
    justifyContent: 'center',
    color: '#488F51',
    
  },
  textContent: {
    fontSize: 16,
    lineHeight: 25,
    marginVertical: '2%',
    paddingHorizontal: '2%',
    textAlign: 'justify',
    justifyContent: 'center',
  },
   textTitle: {
    fontSize: 22,
    lineHeight: 25,
    marginVertical: '2%',
    paddingHorizontal: '2%',
    
     textAlign: 'center',    
  },


});

export default Destino;
