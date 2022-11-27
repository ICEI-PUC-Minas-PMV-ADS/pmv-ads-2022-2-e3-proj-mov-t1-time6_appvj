import React, {useEffect, useState} from 'react';
import{StyleSheet, Text} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import { Appbar } from 'react-native-paper';


import Container from '../Components/Container'
import Body from '../Components/Body'
import Input from '../Components/Input'
import Button from '../Components/Button'
import Logo from '../Components/Logo'
import Header from '../Components/Header'


import { 
  updateCadastros,  
  getCadastros,
} from '../services/usuariosDB';



const Login = ({ route }) => {

 
  const navigation = useNavigation();

  const[cadastros, setCadastros] = useState([]);

  useEffect(() =>{
      getCadastros().then((dados)=>{
        setCadastros(dados);  
        console.log(dados);
    }),

    console.log('iniciando a tela!');
    console.log(cadastros);    
   
  },[item]);


  const { item } = route.params ? route.params : {};

     

  const handleSalvar = () => {
    if (item) {
      updateCadastros({        
        senha: senha,
        email: email,        
        id: item.id,
      }).then();
    } else {
      getCadastros({       
        senha: senha,
        email: email,        
      }).then();
    }

    navigation.goBack();
  };

  const handleExcluir = () => {
    deleteGasto(item.id).then();
    navigation.goBack();
  };


  const [email, setEmail] = useState(email);
  const [senha, setSenha] = useState(senha);

  return (
 
  <Container> 
  <Header 
    title={'Login'} goBack={() => navigation.goBack()}>
      <Appbar.Action icon="check" onPress={handleSalvar} />
      {item && <Appbar.Action icon="trash-can" onPress={handleExcluir} />}
  </Header>
    <Body>
      <Logo/>
      <Input              
        label="Email"
        value={email}
        placeholder="Email"
        onChangeText={(text)=> setEmail(text)}        
      />
      <Input             
        label="Senha"
        value={senha}
        placeholder="Senha"
        secureTextEntry
        onChangeText={(text)=> setSenha(text)}        
      />        
     <Button onPress={() => navigation.navigate('Pressed')}>
        <Text style={styles.text}> Acessar </Text>
      </Button>
      <Button onPress={() => navigation.navigate('Cadastro')}>             
        <Text style={styles.text}> Cadastre-se </Text>
         
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

export default Login;