import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  FlatList,
  Image,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { List, Text, FAB } from 'react-native-paper';

import { useNavigation } from '@react-navigation/native';

import Header from '../Components/Header';
import Container from '../Components/Container';
import Body from '../Components/Body';

import Viagens from '../Components/Viagens';
import Button from '../Components/Button';

const DATA = [
  {
    id: 1,
    titulo: 'Paraty',
    data: '01/02/2023',
    imagem: '../img/Paraty.jpg',
    preco: 1560,
  },
  {
    id: 2,
    titulo: 'Rio de Janeiro',
    data: '15/01/2023',
    imagem: '../img/Rio_de_janeiro.jpg',
    preco: 2210,
  },
  {
    id: 3,
    titulo: 'Aparecida',
    data: '10/10/2023',
    imagem: '../img/Aparecida.jpg',
    preco: 900,
  },
  {
    id: 4,
    titulo: 'Poços de Caldas',
    data: '12/10/2023',
    imagem: '../img/pocos_de_caldas.jpg',
    preco: 1890,
  },
];


const Vitrine = () => {
  const navigation = useNavigation();

  useEffect(() => {

    
    
  }, []);

  const renderItem = ({ item }) => (
    <Image style={styles.imagem} source={require('../img/Cruzeiro.jpg')} />
    <List.Item
      
      description={item.titulo + ' km'}
      title={
        'R$' + item.preco.toFixed(2)
      }
      
      right={(props) => (
        <Text {...props} style={{ alignSelf: 'center' }}>
          {item.data}
        </Text>
      )}
      onPress={() => navigation.navigate('Viagem', { item })}
    />
  );

  return (
    <Container>
    <Header title={'Fuel Manager'} />
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <FAB
        icon="plus"
        style={styles.fab}
        small
        onPress={() => navigation.navigate('Viagem')}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 8,
    right: 0,
    bottom: 0,
  },
  imagem: {
    width: '100%',
    height: 150,
  },
});

export default Vitrine;
