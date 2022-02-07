import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TutorialHome from './Tutorials/TutorialPage';
import MainTab from './Mains/MainTab';
import { useSelector, useDispatch } from 'react-redux';
import TutorialStack from './Tutorials/TutorialStack';
import SignInScreen from './SignIn/SignInScreen';
import AsyncStorage from '@react-native-community/async-storage';
import { signInAgain } from '../modules/user';

const Stack = createNativeStackNavigator()

const RootStack = () => {
  const user = useSelector(user => user.user.signIn);
  const dispatch = useDispatch();
  // const [token, setToken] = useState(null);

  const getToken = async () => {
    const token = await AsyncStorage.getItem('accessToken');
    console.log(token)
    if(token) {
      dispatch(signInAgain(token))
    }
  }

  
  useEffect(() => {
    getToken()
  }, [])

  // console.log(token, 'this is rootStack area')

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      {
        user.isSignIn ? (
          <Stack.Screen 
            name='MainTab'
            component={MainTab}
            options={{
              // headerShown: false
            }}
          />
        ) : (
          <>
            <Stack.Screen 
              name='TutorialStack'
              component={TutorialStack}
            />
            <Stack.Screen 
              name='SignIn'
              component={SignInScreen}
            />
          </>
        )
      }
      
    </Stack.Navigator>
  )
}


export default RootStack;