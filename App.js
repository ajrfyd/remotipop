import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './components/RootStack';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from './modules';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const store = createStore(rootReducer, applyMiddleware(thunk, logger));
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