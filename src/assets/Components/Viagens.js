import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const Viagens = (props) => {
  function filterDesc(desc) {
    if (desc.length < 27) {
      return desc;
    }
    return `${desc.substring(0, 24)}...`;
  }

  return (
    <TouchableOpacity style={styles.container}>
      <Image source={props.img} style={styles.viagensImg} />
      <Text style={styles.viagensText}>{filterDesc(props.children)}</Text>
      <Text style={styles.viagensCost}>R$ {props.cost}</Text>
      <Text style={styles.viagensText}>{filterDesc(props.children)}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: '2%',
    alignItems: 'center',
    justifyContent: 'center',
    //marginRight: 5,
    //marginLeft: 5,
    marginBottom: 5,
  },
  viagensImg: {
    width: '100%',
    height: 110,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  viagensText: {
    width: 275,
    textAlign: 'center',
    fontSize: 20,
  },

  viagensCost: {
    fontSize: 20,
  },
});

export default Viagens;
