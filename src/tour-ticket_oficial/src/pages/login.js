import React, { useEffect, useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Appbar } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';


//componentes
import Container from '../Components/Container';
import Body from '../Components/Body';
import Input from '../Components/Input';
import Button from '../Components/Button';
import Logo from '../Components/Logo';
import Header from '../Components/Header';

import { login } from '../services/auth.services';

import {useUser} from '../contexts/UserContexts';

const Login = () => {
  const navigation = useNavigation();
  
  const {setSigned, setNome} = useUser();

  const [email, setEmail] = useState(email);
  const [password, setPassword] = useState(password);

  const handleLogin = () => {
    login({
      email: email,
      password: password,
    }).then((res) => {
      console.log(res);

      if (res && res.user) {

        setSigned(true);
        setNome(res.user.name);
        AsyncStorage.setItem('@TOKEN_KEY', res.accessToken).then();
      } else {
        Alert.alert('Atenção', 'Usuário ou senha inválidos!');
      }
    });
  };

  return (
    <Container>
      <Header title={'Loguin'} goBack={() => navigation.goBack()}>
        <Appbar.Action icon="check" onPress={handleLogin} />
        {'item' && (
          <Appbar.Action
            icon="trash-can"
            onPress={() => console.log('Loguin realizado')}
          />
        )}
      </Header>
      <Body>
        <Logo />
        <Input
          label="Email"
          value={email}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          label="Senha"
          value={password}
          placeholder="Senha"
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />
        <Button
        onPress={handleLogin}>
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
  text: {
    color: 'white',
    fontSize: 17,
    opacity: 0.9,
    alignContent: 'center',
  },
});

export default Login;
