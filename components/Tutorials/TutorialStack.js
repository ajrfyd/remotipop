import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TutorialPage from './TutorialPage';
import AnimationPage from './AnimationPage';
import TutorialPage1 from './TutorialPage1';
import SignInScreen from '../SignIn/SignInScreen';

const Stack = createNativeStackNavigator();


const TutorialStack = () => {
  const [animation, setAnimation] = useState(true);
  const timer = () => {
    setTimeout(() => {
      setAnimation(false)
    }, 5200)
  }

  useEffect(() => {
    timer()
  }, [animation])

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      {
        animation ? (
          <Stack.Screen 
            name='AnimationPage'
            component={AnimationPage}
          />
        ) : (
          <>
            <Stack.Screen 
              name='TutorialPage'
              component={TutorialPage}
            />
            <Stack.Screen 
              name='SignIn'
              component={SignInScreen}
            />
          </>

        )
      }
      {/* <Stack.Screen 
        name='Tutorial1'
        component={TutorialPage1}
      /> */}
    </Stack.Navigator>
  )
}

export default TutorialStack;