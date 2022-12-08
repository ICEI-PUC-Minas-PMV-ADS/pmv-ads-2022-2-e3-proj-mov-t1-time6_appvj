import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import UserProvider from './assets/contexts/UserContexts'
import Route from './assets/navigation/Route'



const App = () => {

  return( 
  <UserProvider>
    <NavigationContainer translucent={true}>      
      <Route/>
    </NavigationContainer>
  </UserProvider>
  )
  
};


export default App;
