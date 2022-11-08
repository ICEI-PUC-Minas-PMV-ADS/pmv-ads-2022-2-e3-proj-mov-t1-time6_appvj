import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Appbar } from 'react-native-paper';

const Header = ({ title }) => {
  return (
    <Appbar.Header style={styles.cabecalho}>
      <Appbar.Content style={styles.cabecalho2} title={title} />
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({

  cabecalho:{
     flex: 0.5,
    alignContent: 'center',    
    width: '100%',
    opacity : 0.9,
    backgroundColor: '#488F51',
    color: 'white',   
    fontSize: 17,    
    padding: 30,
    
  },

  cabecalho2:{
    flex: 1,
    alignContent: 'center',    
    width: '100%',
    opacity : 0.9,
    backgroundColor: '#488F51',           
    fontSize: 17,    
    padding: 30,
    
  }


});

export default Header;