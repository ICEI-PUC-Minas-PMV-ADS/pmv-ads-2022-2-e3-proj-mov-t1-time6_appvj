import React from 'react';
import { StyleSheet} from 'react-native';
import { Appbar } from 'react-native-paper';

const Header = ({ title, goBack, children}) => {
  return (
    <Appbar.Header style={styles.barra_superior}>
    {
      //só vai ativar a opção voltar se for necessário
      goBack &&
      <Appbar.BackAction onPress={goBack} />
    }
      <Appbar.Content style={styles.cabecalho2} title={title} />
      {children}
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  barra_superior: {
  backgroundColor: '#488F51',
  
  

}


});

export default Header;