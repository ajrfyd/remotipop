import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './components/RootStack';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from './modules';

const store =createStore(rootReducer);
const App = () => {
  
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </Provider>
  )
}

export default App;