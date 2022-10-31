import React from 'react';
import { Appbar } from 'react-native-paper';
import { Text, StyleSheet, View, Image, TextInput, TouchableOpacity, SafeAreaView, SectionList, StatusBar} from 'react-native';

const DATA = [
  {
    data: ["Poços de Caldas", "Aparecida do Norte", "Beto Carrero Word"],
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Image
        style={styles.imagem}
        source={require('./image/Turismo-Pocos-de-Caldas.jpg')}
    />
    <Text 
      style={styles.title}>{title}
    </Text>
  </View>
);


export default function App() {

  const _goBack = () => console.log('Voltar tela anterior');

  const _handleSearch = () => console.log('Buscando');

  const _handleMore = () => console.log('Mostre mais');

  return (
    <View style={styles.background}>
      <Appbar.Header style={styles.barra_superior}>
        <Appbar.BackAction onPress={_goBack} />
        <Appbar.Content title="TourTicket" />
        <Appbar.Action icon="magnify" onPress={_handleSearch} />
        <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
      </Appbar.Header>
      
      <SafeAreaView style={styles.container}>
        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => <Item title={item} />}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.header}>{title}</Text>
          )}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  barra_superior: {
    backgroundColor: '#488F51',
  },

  imagem: {
    borderRadius: 5,
    width: 250,
    height: 150,
    marginBottom: 15,
    textAlign: 'center',
    justifyContent: 'center',
  },

  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16
  },

  item: {
    borderRadius: 5,
    backgroundColor: "#f2f2f2",
    padding: 20,
    marginVertical: 8,
    alignItems: 'center'
  },

  header: {
    fontSize: 32,
    backgroundColor: "#fff"
  },
  
  title: {
    fontSize: 24
  }

});
