import React, {useState} from 'react';
import{StyleSheet, Text, Image} from 'react-native'
import { Appbar } from 'react-native-paper';


import Container from '../Components/Container'
import Body from '../Components/Body'
import Header from '../Components/Header'
import Input from '../Components/Input'
import Button from '../Components/Button'

const Sobre = () => {

  return(
    

    <Container>
      <Header 
        title={'Cadastro de Serviços'}
        goBack={() => navigation.goBack()} >  
        <Appbar.Action icon="dots-vertical" onPress={()=>{}} />
    </Header>
      <Body>      
         <Image
          style={styles.imagem}
          source={require('../img/pocos_de_caldas.jpg')}       
        />

        <Input              
        label="Local"
        placeholder="Local"
        onChangeText={(text)=> setEmail}  
        />
        
        <Input              
        label="Tipo de Serviço"
        placeholder="Tipo de Serviço"
        onChangeText={(text)=> setEmail}        
        />  
        
        <Input              
        label="Detalhes"
        placeholder="Detalhes"
        onChangeText={(text)=> setEmail}        
        />   
         <Input              
        label="Preços"
        placeholder="Preços"
        onChangeText={(text)=> setEmail}        
        />     
        
        <Button onPress={() => navigation.navigate('Cadastro')}>             
        <Text style={styles.text}> Cadastrar Viagem </Text>   
      </Button>

      </Body>
    </Container>


  );  

};

const styles = StyleSheet.create({
   imagem: {
    borderRadius: 5,
    width: 250,
    height: 150,
    marginBottom: 15,
    textAlign: 'center',
    justifyContent: 'center',
  },
  
  text:{
    color: 'white',
    fontSize: 17, 
    opacity : 0.9,
    alignContent: 'center', 
  },  
});




export default Sobre;