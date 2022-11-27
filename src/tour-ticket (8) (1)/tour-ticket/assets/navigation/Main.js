import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Home from '../pages/Home';
import Cadastro from '../pages/Cadastro';


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

     

      </Stack.Navigator>    
  );
};

export default Main;
