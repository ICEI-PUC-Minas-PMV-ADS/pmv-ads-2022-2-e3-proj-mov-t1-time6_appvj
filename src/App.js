import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Main from './assets/navigation/Main';
import Auth from './assets/navigation/Auth';

import Route from './assets/navigation/Route';

import UserProvider from './assets/context/UserContext';

    //<UserProvider>
    //  <NavigationContainer translucent={true}>
    //    <Main/>
    //  </NavigationContainer>
    //</UserProvider>

const App = () => {
  return (
      <NavigationContainer translucent={true}>
        <Main/>
      </NavigationContainer>
  );
};

export default App;