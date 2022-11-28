import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Main from './assets/navigation/Main';

const App = () => {
  return (
    <NavigationContainer translucent={true}>
      <Main />
    </NavigationContainer>
  );
};

export default App;
