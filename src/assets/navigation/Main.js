import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from '../pages/Home';
import Cadastro from '../pages/Cadastro';
import Login from '../pages/login';
import Duvidas from '../pages/Duvidas';
import Viagem from '../pages/Viagem';
import Vitrine from '../pages/Vitrine';

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <Stack.Navigator initialRouteName="Destinos">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          //some o header da propriedade
          header: () => null,
        }}
      />

      <Stack.Screen
        name="Cadastro"
        component={Cadastro}
        options={{
          //some o header da propriedade
          header: () => null,
        }}
      />

      <Stack.Screen
        name="Vitrine"
        component={Vitrine}
        options={{
          //some o header da propriedade
          header: () => null,
        }}
      />

      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          //some o header da propriedade
          header: () => null,
        }}
      />

      <Stack.Screen
        name="Duvidas"
        component={Duvidas}
        options={{
          //some o header da propriedade
          header: () => null,
        }}
      />
    </Stack.Navigator>
  );
};

export default Main;
