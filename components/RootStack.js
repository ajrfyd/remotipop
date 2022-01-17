import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TutorialHome from './Tutorials/TutorialHome';
import MainTab from './Mains/MainTab';
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator()

const RootStack = () => {
  const user = useSelector(user => user.user.signIn);

  return (
    <Stack.Navigator>
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
          <Stack.Screen 
            name='TutorialHome'
            component={TutorialHome}
          />
        )
      }
    </Stack.Navigator>
  )
}


export default RootStack;