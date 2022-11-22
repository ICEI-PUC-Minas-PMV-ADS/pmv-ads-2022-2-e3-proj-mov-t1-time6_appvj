import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native'
import { Button } from 'react-native-paper';

const MyButton = (props) => {
  return(    
  <TouchableOpacity style={styles.btnSubmit} {...props}/> 
  
  );
};



const styles = StyleSheet.create({
   btnSubmit: {
    width: '88%',
    backgroundColor: '#488F51',
    opacity : 0.9,
    color: 'white',    
    height: 35,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 2,
    marginTop: 2,
    borderRadius: 8,
    fontSize: 20, 
  },
});

export default MyButton;