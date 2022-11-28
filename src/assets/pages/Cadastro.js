import React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet, Text } from 'react-native';

//Para chamar os componentes
import Container from '../Components/Container';
import Body from '../Components/Body';
import Input from '../Components/Input';
import Logo from '../Components/Logo';
import Button from '../Components/Button';
import Header from '../Components/Header';

//usando o hook para retornar uma função
import { useNavigation } from '@react-navigation/native';

const Cadastro = ({ route }) => {
  const navigation = useNavigation();
  const { item } = route.params ? route.params : {};

  const [nome, setNome] = useState(null);
  const [senha, setSenha] = useState(null);
  const [email, setEmail] = useState(null);
  const [endereco, setEndereco] = useState(null);

  useEffect(() => {
    if (item) {
      setNome(item.nome);
      setSenha(item.senha);
      setEmail(item.email);
      setEndereco(item.endereco);
    }
  }, [item]);

  const handleSalvar = () => {
    if (item) {
      updateCadastros({
        nome: nome,
        senha: senha,
        email: email,
        endereco: endereco,
        id: item.id,
      }).then();
    } else {
      insertCadastros({
        nome: nome,
        senha: senha,
        email: email,
        endereco: endereco,
      }).then();
    }

    navigation.goBack();
  };

  const handleExcluir = () => {
    deleteGasto(item.id).then();
    navigation.goBack();
  };

  return (
    <Container>
      <Header title={'Cadastro'} goBack={() => navigation.goBack()}>
        <Appbar.Action icon="check" onPress={handleSalvar} />
        {item && <Appbar.Action icon="trash-can" onPress={handleExcluir} />}
      </Header>

      <Body>
        <Logo />
        <Input
          label="Nome"
          value={nome}
          placeholder="Nome"
          onChangeText={(text) => setNome(text)}
        />
        <Input
          label="Senha"
          value={senha}
          placeholder="Senha"
          secureTextEntry
          onChangeText={(text) => setSenha(text)}
        />
        <Input
          label="Email"
          value={email}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          label="Endereço"
          value={endereco}
          placeholder="Endereço"
          onChangeText={(text) => setEndereco(text)}
        />

        <Button>
          <Text style={styles.text} onPress={item}>
            {' '}
            Criar conta gratuita{' '}
          </Text>
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

export default Cadastro;
