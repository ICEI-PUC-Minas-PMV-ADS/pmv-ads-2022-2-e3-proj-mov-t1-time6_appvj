import React from 'react';
import {StyleSheet,  Button} from 'react-native'
import { FAB } from 'react-native-paper';


const Button_add = (props) => {
  return(    
  <Button icon="login" style={styles.button_add} {...props} 
  
  /> 
  
  );
};


const styles = StyleSheet.create({
  button_add: {
    width: '15%',
    backgroundColor: '#488F51',
    opacity : 0.8,
    color: 'white',    
    height: 45,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 4,
    marginTop: 6,
    borderRadius: 8,
    fontSize: 20,
    icon: "login", 
  },
});

export default Button_add;