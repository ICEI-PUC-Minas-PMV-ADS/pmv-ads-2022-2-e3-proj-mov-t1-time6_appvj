import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import{StyleSheet} from 'react-native'

import Login from './login'
import Cadastro from './Cadastro'

const Home = () => {
  const [index, setIndex,] = React.useState(0);
  const [routes] = React.useState ([
    { key: 'Login', title: 'Login', icon: 'login' },   
    { key: 'Cadastro', title:'Cadastro', icon:'account-supervisor' },
     
  ]);

  const renderScene = BottomNavigation.SceneMap ({
    Login: Login,
    Cadastro: Cadastro,
  
    
  });

  return (
    <BottomNavigation 
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene} 
           
    />
  );
};


  


export default Home;