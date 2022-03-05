import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TutorialPage from './TutorialPage';
import AnimationPage from './AnimationPage';
import TutorialPage1 from './TutorialPage1';
import SignInScreen from '../SignIn/SignInScreen';
import AsyncStorage from '@react-native-community/async-storage';

const Stack = createNativeStackNavigator();

// 튜토리얼 페이지 스택 && 애니메이션 작동
const TutorialStack = () => {
  // const [animation, setAnimation] = useState(true);
  const [token, setToken] = useState(null);

  // const timer = () => {
  //   // setAnimation(true)
  //   setTimeout(() => {
  //     setAnimation(false)
  //   }, 5200)
  // }
  // const clearTimer = () => {
  //   clearInterval(timer);
  //   setAnimation(false)
  // }

  const hasToken = async () => {
    const tok = await AsyncStorage.getItem('accessToken');
    setToken(tok)
  }
  useEffect(() => {
    hasToken();
  }, [token])
  // useEffect(() => {
  //   hasToken();
  //   if(token) {
  //     clearTimer();      
  //     return;
  //   } else {
  //     timer()
  //   }
  //   // return () => clearTimer();
  // }, [animation, timer])

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >{
      !token && (
        <Stack.Screen 
          name='AnimationPage'
          component={AnimationPage}
        />    
      )
    }
      
      <Stack.Screen 
        name='TutorialPage'
        component={TutorialPage}
      />
      <Stack.Screen 
        name='SignIn'
        component={SignInScreen}
      /> 
    </Stack.Navigator>
  )
}

export default TutorialStack;



// {
//   animation ? (
//     <Stack.Screen 
//       name='AnimationPage'
//       component={AnimationPage}
//     />
//   ) : (
//     <>
//       <Stack.Screen 
//         name='TutorialPage'
//         component={TutorialPage}
//       />
//       <Stack.Screen 
//         name='SignIn'
//         component={SignInScreen}
//       />
//     </>

//   )
// }