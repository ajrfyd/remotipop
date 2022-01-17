import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainPageStack from './MainPageStack';
import ChartContainer from '../Chart/ChartContainer';
import CalendarContainer from '../Calendar/CalendarContainer';
import MypageContainer from '../MyPage/MypageContainer';

const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false
      }}
    >
      <Tab.Screen 
        name='MainPage'
        component={MainPageStack}
        options={{
        }}
      />
      <Tab.Screen 
        name="CalendarPage"
        component={CalendarContainer}
      />
      <Tab.Screen 
        name='ChartPage'
        component={ChartContainer}
      />
      <Tab.Screen 
        name='Mypage'
        component={MypageContainer}
      />
    </Tab.Navigator>
  )
}

export default MainTab;