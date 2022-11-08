import React from 'react';
import { Appbar } from 'react-native-paper';
import{StyleSheet, Text} from 'react-native'

import Container from '../Components/Container'
import Body from '../Components/Body'
import Input from '../Components/Input'
import Logo from '../Components/Logo'
import Button from '../Components/Button'



const Cadastro = ({ title }) => {
 return (
  <Container>
    <Body>
    <Logo/>

    <Input              
        label="Nome"
        placeholder="Nome"
        onChangeText={(text)=> setEmail}        
    />
     <Input              
        label="Senha"
        placeholder="Senha"
        onChangeText={(text)=> setEmail}        
    />
     <Input              
        label="Email"
        placeholder="Email"
        onChangeText={(text)=> setEmail}        
    />
     <Input              
        label="Telefone"
        placeholder="Telefone"
        onChangeText={(text)=> setEmail}        
    />
     <Input              
        label="Endereço"
        placeholder="Endereço"
        onChangeText={(text)=> setEmail}        
    />
    
    <Button>
        <Text style={styles.text}> Criar conta gratuita </Text>
    </Button> 

    </Body>
  </Container>
  );
};

const styles = StyleSheet.create({ 
  text:{
    color: 'white',
    fontSize: 17, 
    opacity : 0.9,
    alignContent: 'center', 
  }  
});


export default Cadastro;