import React, {useState} from 'react';
import{StyleSheet, Text} from 'react-native'

import Container from '../Components/Container'
import Body from '../Components/Body'
import Input from '../Components/Input'
import Button from '../Components/Button'
import Logo from '../Components/Logo'

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
  <Container>    
    <Body>
      <Logo/>
      <Input              
        label="Email"
        placeholder="Email"
        onChangeText={(text)=> setEmail}        
      />
      <Input             
        label="Senha"
        placeholder="Senha"
        onChangeText={(text)=> setSenha}       
      />  
      <Button>
        <Text style={styles.text}> Acessar </Text>
      </Button>
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

export default Login;