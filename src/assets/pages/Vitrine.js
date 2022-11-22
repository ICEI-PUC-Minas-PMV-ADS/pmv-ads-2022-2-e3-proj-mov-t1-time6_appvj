import React, {useState} from 'react';
import{StyleSheet, Text, Image, View, TouchableOpacity,ScrollView} from 'react-native'
import {useNavigation} from '@react-navigation/native'




import Viagens from '../Components/Viagens'
import Botao from '../Components/Botao'
import Button from '../Components/Button'


const Vitrine = () => {

  const navigation = useNavigation();

  return(

      <View style={styles.container}>          
          <View style={styles.cabecalho}>
            <Image
            style={styles.imagem}
            source={require('../img/Cruzeiro.jpg')}       
            />
          </View> 

          <View style={styles.textContainer}>
            <Text style={styles.text}>BUSQUE POR UM DESTINO</Text>         
          
       
          <Button icon="login"
          style={styles.button}          
          onPress={() => navigation.navigate('Login')}>
          </Button>
                   
                    
          </View>  
          
          <View style={styles.line}/>

      <ScrollView>

        <View style={{flexDirection: 'row', justifyContent:'space-around'}}>
          <Viagens img={require('../img/Paraty.jpg')} cost="R$:1000">
            Paraty
          </Viagens>
          <Viagens img={require('../img/Rio_de_janeiro.jpg')} cost="R$:900">
            Rio de Janeiro
          </Viagens>                   
        </View>

        <View style={{flexDirection: 'row', justifyContent:'space-around'}}>
          <Viagens img={require('../img/Aparecida.jpg')} cost="R$:800">
            Aparecida do Norte
          </Viagens>
          <Viagens img={require('../img/pocos_de_caldas.jpg')} cost="R$:1500">
            Poços de Caldas
          </Viagens>                  
        </View>

         <View style={{flexDirection: 'row', justifyContent:'space-around'}}>
          <Viagens img={require('../img/franca.jpg')} cost="R$:3000">
            França
          </Viagens>
          <Viagens img={require('../img/sao_paulo.jpg')} cost="R$:1200">
            São Paulo
          </Viagens>                  
        </View>
      </ScrollView>

      </View>

 
  )};



const styles = StyleSheet.create({
   container:{
      flex: 1,
      width: '100%',
      backgroundColor: 'FFF',    
   },
   textContainer:{
      align: 'center',
      flexDirection: 'row',
      marginTop: '5%',
      marginHeight: '5%',
      marginRight: '5%',
      marginBottom: '5%',
   },
   cabecalho: {
     width: '100%',
     
   },
   imagem:{
     width: '100%',
     height: 150,
   },

   text:{
      align: 'center',
      fontFamily: 'Anton_40',
      fontSize: 20,
      marginHorizontal: '5%',
      color: '#488F51',

   },
  line:{
    borderColor: '#488F51',
    borderBottomColor: 2,
  },
  button: {
    width: '15%',
    backgroundColor: '#488F51',
    opacity : 0.8,
    color: 'white',    
    height: 45,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 6,
    marginTop: 6,
    borderRadius: 8,
    fontSize: 20, 
    
  },
    
  

});

export default Vitrine;