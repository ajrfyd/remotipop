import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { useSelector } from 'react-redux';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainPage from './MainPage';
// import Test from './Test';
import Modal from './ModalContainer';
import ThrowAni from './ThrowAni';

// 메인 스택 네비게이션 페이지(감정 선택, 게시글 작성, 콩주머니 던지기)
const MainPageStack = () => {
  const Stack = createNativeStackNavigator();
  // const userInfo = useSelector(state => state.user.signIn);
  // console.log(userInfo)

  return (
        <Stack.Navigator
            screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen 
            name='Main'
            component={MainPage}
          />
          <Stack.Screen 
            name='Throw'
            component={ThrowAni}
          />
        </Stack.Navigator>
  )
}

export default MainPageStack;