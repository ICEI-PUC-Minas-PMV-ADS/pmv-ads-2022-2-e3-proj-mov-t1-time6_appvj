import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native'


import Home from '../pages/Home';
import Cadastro from '../pages/Cadastro';
import Vitrine from '../pages/Vitrine'
import Login from '../pages/login'


const Stack = createNativeStackNavigator();

const Main = () => {
  return (    
      <Stack.Navigator initialRouteName= "Home">
        <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{
        //some o header da propriedade
        header:() =>null
        }}
        />

        <Stack.Screen 
        name="Cadastro" 
        component={Cadastro} 
        options={{
        //some o header da propriedade
        header:() =>null
        }}
        />

        <Stack.Screen 
        name="Vitrine" 
        component={Vitrine} 
        options={{
        //some o header da propriedade
        header:() =>null
        }}
        />

        <Stack.Screen 
        name="Login" 
        component={Login} 
        options={{
        //some o header da propriedade
        header:() =>null
        }}
        />    

      </Stack.Navigator>    
  );
};

export default Main;
