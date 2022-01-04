import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Stacks from './components/Stacks';

const App = () => {
  return (
    <NavigationContainer>
      <Stacks />
    </NavigationContainer>
  )
}

export default App;