import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TutorialHome from './Tutorials/TutorialPage';
import MainTab from './Mains/MainTab';
import { useSelector } from 'react-redux';
import TutorialStack from './Tutorials/TutorialStack';
import SignInScreen from './SignIn/SignInScreen';

const Stack = createNativeStackNavigator()

const RootStack = () => {
  const user = useSelector(user => user.user.signIn);

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