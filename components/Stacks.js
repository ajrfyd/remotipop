import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TutorialHome from './Tutorials/TutorialHome';

const Stack = createNativeStackNavigator()

const Stacks = () => {
  
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='TutorialHome'
        component={TutorialHome}
      />
      {/* <Stack.Screen/>
      <Stack.Screen/>
      <Stack.Screen/>
      <Stack.Screen/> */}
    </Stack.Navigator>
  )
}


export default Stacks;