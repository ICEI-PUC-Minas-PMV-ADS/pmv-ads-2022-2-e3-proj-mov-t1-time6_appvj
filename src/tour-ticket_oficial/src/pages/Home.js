import * as React from 'react';
import { BottomNavigation} from 'react-native-paper';



import Login from './login'
import Cadastro from './Cadastro'
import Viagens from './Viagens'
import Vitrine from './Vitrine'
import Destinos from './Destinos'
import Duvidas from './duvidas'


const Home = () => {
  const [index, setIndex,] = React.useState(0);
  const [routes] = React.useState ([
    { key: 'Vitrine', title: 'Vitrine', icon: 'airplane'},
    { key: 'Destinos', title: 'Destinos', icon: 'map-search-outline'},
    { key: 'Login', title: 'Login', icon: 'login' },   
    { key: 'Cadastro', title:'Cadastro', icon:'account-supervisor' },    
    { key: 'Viagens', title: 'Viagens', icon: 'wallet-travel'},
    { key: 'Duvidas', title: 'Duvidas', icon: 'map-marker-question'},
    
     
  ]);

  const renderScene = BottomNavigation.SceneMap ({
    Login: Login,
    Cadastro: Cadastro,     
    Vitrine: Vitrine,
    Viagens: Viagens,
    Duvidas: Duvidas,
    Destinos: Destinos,
    
  });

  return (
  
    
    <BottomNavigation 
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      // Para trocar a cor do rodapé 
      barStyle={{backgroundColor: '#488F51'}}              
    />
  );
};

 


export default Home;

