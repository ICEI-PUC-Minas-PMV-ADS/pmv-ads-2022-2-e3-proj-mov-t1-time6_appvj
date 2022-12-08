import React from 'react';
import {TextInput} from 'react-native-paper';
import {StyleSheet} from 'react-native';

const Input = (props) => 
{
  return(
    <TextInput style={styles.input} 
      {...props}    
      mode="outlined"   
     
    />
  );  
};

const styles = StyleSheet.create({
  input: {
    flex: 0.1,
    alignContent: 'center',
    justifyContent:'space-around' ,
    width: '90%',
    height: 35,
    opacity : 0.8,
    backgroundColor: '#CCDED3',
    color: 'white',    
    marginBottom: 10,    
    fontSize: 10,
    borderRadius: 9,
    padding:5,
    placeholder: 'white',     
  },
});

export default Input;
