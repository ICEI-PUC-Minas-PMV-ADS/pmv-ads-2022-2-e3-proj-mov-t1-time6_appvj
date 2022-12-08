import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';




const Viagens = (props) => 
{
  function filterDesc(desc){
    if(desc.length < 27){
      return desc;
    }

    return `${desc.substring(0, 24)}...`;
  }

  
  return(
    <TouchableOpacity style={styles.container} onPress={props.onClick}>
      <Image
        source={props.img}
        style={styles.viagensImg}
      />
      <Text style={styles.viagensText}>
        {filterDesc(props.children)}
      </Text>
      <Text style={styles.viagensText}>
        {props.cost}
      </Text>

    </TouchableOpacity>
    
  );  
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: '2%',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
    marginLeft: 5,
    marginBottom: 5,
       
  },
  viagensImg:{
      width: 160,
      height: 160,
      justifyContent: 'space-between',
  
  viagensText:{
    fontSize:16,
  }

      

  }
});

export default Viagens;