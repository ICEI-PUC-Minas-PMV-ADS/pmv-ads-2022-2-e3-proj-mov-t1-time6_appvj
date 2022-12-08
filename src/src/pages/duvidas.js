import React from "react";
import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar } from "react-native";
import {useNavigation} from '@react-navigation/native'
import { Appbar } from 'react-native-paper';
import Header from '../Components/Header'



const DATA = [
  {
    
    data: ["PERGUNTAS FREQUENTES"]
  },
  {
    title: "O site é Seguro?",
    data: ["Sim, sua compra é protegida e com total confiabilidade."]
  },
  {
    title: "Posso cancelar a compra?",
    data: ["Caso se arrependa da compra, devolveremos seu dinheiro dentro do prazo de garantia."]
  },
  {
    title: "A partir de qual idade é cobrada a passagem das crianças?",
    data: ["A partir dos seis anos, crianças com até 5 anos de idade não pagam, desde que não seja ocupada nenhuma poltrona."]
  }
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);



const Duvidas = () => {
  
const navigation = useNavigation();

return(

  <SafeAreaView style={styles.container}>
    <Header 
    title={'Dúvidas'}
    goBack={() => navigation.goBack()} >  
    <Appbar.Action icon="dots-vertical" onPress={()=>{}} />
  </Header>
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <Item title={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
  </SafeAreaView>

);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,    
    
  },
  item: {
    backgroundColor: '#9DC2A1',
    padding: 20,
    marginVertical: 8,
    justifyContent: 'center',
    borderRadius: 10,
    fontSize: 40,
  },
  header: {
    fontSize: 20,
    backgroundColor: "#fff",
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    justifyContent: 'center',

    
  }
})

export default Duvidas;