import React, {useEffect, useState} from 'react';

import { Appbar } from 'react-native-paper';
import{StyleSheet, Text, Alert} from 'react-native'

//Para chamar os componentes
import Container from '../Components/Container'
import Body from '../Components/Body'
import Input from '../Components/Input'
import Logo from '../Components/Logo'
import Button from '../Components/Button'
import Header from '../Components/Header'

import {useNavigation} from '@react-navigation/native';

import {register} from '../services/auth.services';



const Cadastro = () => {

const navigation = useNavigation();


const [nome, setNome] = useState(null);
const [senha, setSenha] = useState(null);
const [email, setEmail] = useState(null);
const [endereco, setEndereco] = useState(null);
 
const handleRegister = () => {

    register({
      nome: nome,
      senha:senha,
      email: email,
      endereco: endereco,

    }).then( res => {
      console.log(res);

      if(res){
        Alert.alert('Atenção', 'Usuário Cadastrado com sucesso!',[
          { text: "OK", onPress: () => navigation.goBack() }
        ]);

      }else{
         Alert.alert('Atenção', 'Erro no cadastro, tente mais tarde');
      }

    });
    
  }

   

 return (
  <Container>
    <Header 
    title={'Cadastro'} goBack={() => navigation.goBack()}>
      <Appbar.Action icon="check" onPress={handleRegister} />
      {'item' && <Appbar.Action icon="trash-can" onPress={() =>console.log('Conta Criada')} />}
    </Header>
    
    <Body>    
    <Logo/>
    <Input              
        label="Nome"
        value={nome}
        placeholder="Nome"
        onChangeText={(text)=> setNome(text)}        
    />
     <Input              
        label="Senha"
        value={senha}
        placeholder="Senha"
        secureTextEntry
        onChangeText={(text)=> setSenha(text)}        
    />
     <Input              
        label="Email"
        value={email}
        placeholder="Email"
        onChangeText={(text)=> setEmail(text)}        
    />     
     <Input              
        label="Endereço"
        value={endereco}
        placeholder="Endereço"
        onChangeText={(text)=> setEndereco(text)}        
    />
   
    <Button
    onPress={() => navigation.goBack()}>
        <Text style={styles.text} 
        onPress={handleRegister}> Criar conta gratuita </Text>
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