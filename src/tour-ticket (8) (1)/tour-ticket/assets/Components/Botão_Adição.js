import React from 'react';
import {StyleSheet} from 'react-native'
import { FAB } from 'react-native-paper';

const Button_add = (props) => {
  return(
  <FAB
    style={styles.button_add}
    small
    icon="plus"
    onPress={() => consele.log('Pressed')}
  />
  );
};


const styles = StyleSheet.create({
   button_add: {
    width: '90%',
    backgroundColor: '#488F51',
    opacity : 0.9,
    color: 'white',    
    height: 45,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 8,
    marginTop: 6,
    borderRadius: 8,
    fontSize: 20, 
  },
});

export default Button_add;