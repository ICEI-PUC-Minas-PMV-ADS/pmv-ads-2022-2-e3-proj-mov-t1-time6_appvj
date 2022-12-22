import * as React from 'react';
import { BottomNavigation } from 'react-native-paper';

import Login from './login';
import Cadastro from './Cadastro';
import Viagem from './Viagem';
import Destino from './Destinos';
import Duvidas from './Duvidas';
import Vitrine from './Vitrine';

const Home = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'Vitrine', title: 'Vitrine', icon: 'airplane' },
    { key: 'Login', title: 'Login', icon: 'login' },
    { key: 'Cadastro', title: 'Cadastro', icon: 'account-supervisor' },
    { key: 'Duvidas', title: 'Duvidas', icon: 'map-marker-question' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    Login: Login,
    Cadastro: Cadastro,
    Vitrine: Vitrine,
    Duvidas: Duvidas,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      // Para trocar a cor do rodapé
      barStyle={{ backgroundColor: '#488F51' }}
    />
  );
};

export default Home;
