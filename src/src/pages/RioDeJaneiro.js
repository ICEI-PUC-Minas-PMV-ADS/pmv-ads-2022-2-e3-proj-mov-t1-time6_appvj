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
import Container from '../Components/Container';

const Rio = () => {
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
          source={require('../img/Rio_de_janeiro.jpg')}
          resizeMode="cover"
        />

        <View>
          <View opacity={0.8}>
            <Text style={[styles.title, { fontSize: 30 }]}>Rio de Janeiro</Text>
            <View>
              <Text style={[styles.title, { fontSize: 24 }]}> R$:1800,00 </Text>
            </View>
          </View>

          <View style={styles.textContent}>
            <Text style={styles.textTitle}> SOBRE O PACOTE DE VIAGEM: </Text>
          </View>
          <View opacity={0.8}>
            <Text style={styles.textContent}>
              Cidade Maravilhosa, exaltada em canções por suas belezas naturais,
              o Rio de Janeiro tem atrações mundialmente famosas e que atraem
              milhões de turistas do Brasil e do exterior. A bela combinação de
              serra, mar e cidade é um dos encantos locais e que fazem o visual
              único do Rio. Conheça as belas praias de Copacabana e Ipanema,
              além da Baía de Guanabara.
            </Text>
            <Text style={styles.textContent}>
              Na lista de pontos turísticos que não podem faltar em seu pacote
              de viagem para o Rio de Janeiro estão o Cristo Redentor, Pão de
              Açúcar, Jardim Botânico, Pedra da Gávea Estádio do Maracanã,
              Cidade do Samba e Lagoa Rodrigo de Freitas. Aprecie a gastronomia
              dos restaurantes e bares, divirta-se em teatros, casas de shows e
              visite museus muito interessantes e o Centro Histórico, com seus
              edifícios preservados.
            </Text>
            <View style={styles.textContent}>
              <Text style={styles.textTitle}> ESSE PACOTE INCLUI: </Text>
            </View>
            <View opacity={0.8}>
              <Text style={styles.textContent}>
                Voo - Operado por LATAM Airlines Group
              </Text>
            </View>
            <View opacity={0.8}>
              <Text style={styles.textContent}>
                HOSPEDAGEM - 5 noites Passeio de barco em Arraial do Cabo
                TRANSFER COMPARTILHADO - Ida e volta do aeroporto ao hotel
              </Text>
            </View>
            <View opacity={0.8}>
              <Text style={styles.textContent}>
                Passeio de barco em Arraial do Cabo TRANSFER COMPARTILHADO - Ida
                e volta do aeroporto ao hotel
              </Text>
            </View>
            <View opacity={0.8}>
              <Text style={styles.textContent}>
                TRANSFER COMPARTILHADO - Ida e volta do aeroporto ao hotel
              </Text>
            </View>
          </View>
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

export default Rio;
