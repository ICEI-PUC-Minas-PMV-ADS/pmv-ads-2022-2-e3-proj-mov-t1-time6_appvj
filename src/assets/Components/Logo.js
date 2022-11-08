import React from 'react';
import {TextInput} from 'react-native-paper';
import {StyleSheet, Image} from 'react-native';

const Logo = (props) => 
{
  return(    
      <Image
        style={styles.imagemlogo}
        source={require('../img/tourTicket.png.png')}
      />
  );  
};

const styles = StyleSheet.create({
  imagemlogo: {
    width: 150,
    height: 150,
    justifyContent: 'center',
  },
});

export default Logo;
