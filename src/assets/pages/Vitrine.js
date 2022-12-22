import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
  TextInput,
  SafeAreaView, Dimensions 
} from 'react-native';

import Carousel, { PaginationLight } from 'react-native-x-carousel';
import { Appbar, FAB } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { BASE_URL } from '../services/urls';
import Container from '../Components/Container';

const { width } = Dimensions.get('window');

const DATA = [
  {
    coverImageUri: 'https://bn1304files.storage.live.com///y4mGNIg7HLkw87NX_b3-fgfGm7yOSoPSjUxs9Ir0pEX7iipl3W1DiFlEu--PzTeS-m5z9rvLZ1KMKjT9Vemy2WkqIv7NVM-Wc4PxgqgWCgNET2mxLqt1XMy6E6ch9e6O4qFXqxMhOwnrYSk2tQA3poDM0mnN6MUSep68h-QNLCaGqMw-VMmiR4r3xEwUj77-2vo?width=1200&height=800&cropmode=none',
    cornerLabelColor: '#FFD300',
    cornerLabelText: 'PROMOÇÃO',
  },
  {
    coverImageUri: 'https://bn1304files.storage.live.com///y4m-jomjn3EZvhSh8NAc8WPpi9HzxQ6k5Bnl3hFVlQmx3PYCtPKHZ5VwJhakXPUDnAFjXETwjWpi9eTHFsmi6xi5itToYQj69GRH0yJZlbvvsiDyX12tkFrcgCL1OVB3hCsRpM6Eszl_3AJbMnR-9xkcHz7YhYeeoHhlhC7YpEmL2pbb6r1ya9lt4dB49_wM1bC?width=1200&height=720&cropmode=none',
    cornerLabelColor: '#0080ff',
    cornerLabelText: 'NOVO',
  },
  {
    coverImageUri: 'https://bn1304files.storage.live.com///y4miHCxbguun2TG97936fZFljqkHp38LwjcMzU7yEq2ptHqMk63NF_s68eCXG2Dv--mpZt9NnZzDJli-c0-b9lqA6EFh-QnMuZCDeuTgGnU6dCQbcF8Xhxmhgi_M0x7weRRu45SFF4a_jcwmzu55ivt0v5QcXAAqHEkoNh7vUV8MimYae42yzNedjx7zML99n1N?width=1200&height=800&cropmode=none',
    cornerLabelColor: '#2ECC40',
    cornerLabelText: '-13%',
  },
  {
    coverImageUri: 'https://bn1304files.storage.live.com///y4meHN4MN5JhnYzjpqoICaeY1qDVHZ34OUDV0UnS1L19rbTguV7G1Rtg7PqohgR7pmxpcZtPFxDcB-CWNNPFkt2ztjg_3aPGvB6JqjKidEEgojLqbvdgND6GkudIaGsD8ar-oxXq23tpoXZvMJ5b0mAAMTn4K799cwW6VIp-uFqqLSUAfXoFEWxaMOP6wMt9tzC?width=1200&height=801&cropmode=none',
    cornerLabelColor: '#2ECC40',
    cornerLabelText: '-20%',
  },
];


const Vitrine = ({route}) => {
  const navigation = useNavigation();
  const { item } = route.params ? route.params : {};
  const [dataSource, setDataSource] = useState([]); 
  const _handleSearch = () => console.log('Buscando');
  const _handleUser = () => navigation.navigate('Login');
  const [text, setText] = useState("");
   
  const renderItem = data => (
    <View
      key={data.coverImageUri}
      style={styles.cardContainer}
    >
      <View
        style={styles.cardWrapper}
      >
        <Image
          style={styles.card}
          source={{ uri: data.coverImageUri }}
        />
        <View
          style={[
            styles.cornerLabel,
            { backgroundColor: data.cornerLabelColor },
          ]}
        >
          <Text style={styles.cornerLabelText}>
            { data.cornerLabelText }
          </Text>
        </View>
      </View>
    </View>
  );

  useEffect(() => {  
    fetch(`${BASE_URL}/Vitrine`)
      .then((response) => response.json())  
      .then((responseJson) => {  
        setDataSource(responseJson);  
      })  
      .catch((error) => {  
        console.error(error);  
      });
  }, []);

  const ItemView = (item) => {  
    console.log(item.imagem)
    return (
      <Text  
        style={styles.itemStyle}  
        onPress={() => getItem(item)}>
        <View style={styles.viewList}>
          <Image style={styles.viagensImg}
            source={{uri: item.imagem}}
          />
          <Text style={styles.textTitulo}>{item.titulo}</Text>
          <Text style={styles.viagensCost}>R$ {item.preco}</Text>
          <Text style={styles.textPeriodo}>
            Período: {item.data_inicio}
          </Text>
        </View>
      </Text>  
    );  
  };  

  const getItem = (item) => {  
    alert('Codigo: ' + item.id + '\n\nTitulo postagem: ' + item.titulo);  
  };  

  return (
    <Container>
      <Appbar.Header style={styles.barra_superior}>
        <View>
          <TextInput style={styles.textPesquisa}
            label="Procurar"
            value={text}
            onChangeText={text => setText(text)}
          />
        </View>
        <Appbar.Action icon="magnify" onPress={_handleSearch} />
        <Appbar.Action icon="account-circle-outline" onPress={_handleUser} />
      </Appbar.Header>

      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          <ScrollView>
            <Carousel
              pagination={PaginationLight}
              renderItem={renderItem}
              data={DATA}
              loop
              autoplay
            />
            <View style={styles.listaItens}>
              {
                dataSource.map(ItemView)
              }
            </View>
          </ScrollView>
        </View>  
      </SafeAreaView>
    </Container>
  );
};  

const styles = StyleSheet.create({
  barra_superior: {
    backgroundColor: '#488F51',
  },

  container: {
    flex: 1, 
    backgroundColor: 'white',
    marginTop: 10,
  },

  cardContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width,
  },

  cardWrapper: {
    borderRadius: 8,
    overflow: 'hidden',
  },

  card: {
    width: width * 0.9,
    height: width * 0.5,
  },

  cornerLabel: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    borderTopLeftRadius: 8,
  },

  cornerLabelText: {
    fontSize: 12,
    color: '#fff',
    fontWeight: '600',
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 2,
    paddingBottom: 2,
  },

  textPesquisa: {
    marginTop: 8,
    marginBottom: 8,
    padding: 10,
    fontSize: 14,
    width: 270,
    height: 30,
    borderRadius: 18,
  },

  itemStyle: {
    width: '48%',
    backgroundColor: '#f5f5f5',
    marginLeft: 4,
    marginVertical: 2,
    marginHorizontal: 2,
    borderRadius: 8
  },

  listaItens: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
    alignContent: 'space-between',
  },

  viewList: {
    width: '100%',
    padding: 8,
  },

  viagensImg: {
    width: '100%',
    height: 120,
    marginTop: 8,
    borderRadius: 8,
  },

  textTitulo: {
    fontFamily: 'Helvetica',
    textAlign: 'left',
    fontSize: 12,
    marginTop: 10,
    marginBottom: 5
  },

  textPeriodo: {
    fontFamily: 'Helvetica',
    textAlign: 'left',
    fontSize: 10,
    marginBottom: 20
  },

  viagensCost: {
    fontFamily: 'Helvetica',
    textAlign: 'left',
    fontSize: 12,
    marginBottom: 5
  },
});  


export default Vitrine;