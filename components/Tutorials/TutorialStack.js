import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TutorialPage from './TutorialPage';
import AnimationPage from './AnimationPage';

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
        ) : <Stack.Screen 
              name='TutorialPage'
              component={TutorialPage}
            />
      }
    </Stack.Navigator>
  )
}

export default TutorialStack;