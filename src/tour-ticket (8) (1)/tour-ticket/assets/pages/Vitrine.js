import React, {useState} from 'react';
import{StyleSheet, Text, Image, View, TouchableOpacity} from 'react-native'
import { Appbar } from 'react-native-paper';
import {StatusBar} from 'expo-status-bar'



import Container from '../Components/Container'
import Body from '../Components/Body'
import Logo from '../Components/Logo'
import Header from '../Components/Header'
import Input from '../Components/Input'
import Button from '../Components/Button'

const Vitrine = () => {

  return(




    <TouchableOpacity style={styles.contentor}>
      <Image
        style={styles.imagem}
          source={require('../img/pocos_de_caldas.jpg')}/>
      <Text style={styles.text}>
          Poços de Caldas
      </Text>
      <View>
        <Text style={styles.text}> R$: 799,00 </Text>
      </View>

    </TouchableOpacity>

   
   


 
  )};

const styles = StyleSheet.create({
   contentor:{
      paddingVertical: '2%',
   },
   text:{
      fontSize: 16
   },
});




export default Vitrine;