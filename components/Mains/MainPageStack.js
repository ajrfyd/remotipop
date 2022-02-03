import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { useSelector } from 'react-redux';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainPage from './MainPage';
import Test from './Test';
import Modal from './ModalContainer';

const MainPageStack = () => {
  const Stack = createNativeStackNavigator();
  const userInfo = useSelector(state => state.user.signIn);
  console.log(userInfo)

  return (
      <Test>
        <Stack.Navigator
            screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen 
            name='Main'
            component={MainPage}
          />
        </Stack.Navigator>
      </Test>
  )
}

export default MainPageStack;