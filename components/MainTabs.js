import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const MainTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen />
      <Tab.Screen />
      <Tab.Screen />
    </Tab.Navigator>
  )
}

export default MainTabs;