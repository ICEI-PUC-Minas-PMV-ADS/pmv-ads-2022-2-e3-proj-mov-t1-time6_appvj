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
    width: 120,
    height: 120,
    //border: 1,
    //justifyContent: 'center',
  },
});

export default Logo;
