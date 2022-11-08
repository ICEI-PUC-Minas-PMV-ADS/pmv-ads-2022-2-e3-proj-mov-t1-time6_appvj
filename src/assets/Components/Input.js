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
    width: '95%',
    opacity : 0.9,
    backgroundColor: '#9DC2A1',
    color: 'white',    
    marginBottom: 15,
    marginTop: 10,
    fontSize: 17,
    borderRadius: 8,
    padding: 10,
    placeholder: 'white',     
  },
});

export default Input;
