import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainPageStack from './MainPageStack';
import ChartContainer from '../Chart/ChartContainer';
import CalendarContainer from '../Calendar/CalendarContainer';
import MypageContainer from '../MyPage/MypageContainer';
import Icon from 'react-native-vector-icons/MaterialIcons'

const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#6200ee'
      }}
    >
      <Tab.Screen 
        name='MainPage'
        component={MainPageStack}
        options={{
          tabBarIcon: ({ color }) => <Icon name='home' size={24} color={color}/>
        }}
      />
      <Tab.Screen 
        name="CalendarPage"
        component={CalendarContainer}
        options={{
          tabBarIcon: ({ color }) => <Icon name='calendar-today' size={24} color={color}/>
        }}
      />
      <Tab.Screen 
        name='ChartPage'
        component={ChartContainer}
        options={{
          tabBarIcon: ({ color }) => <Icon name='bar-chart' size={24} color={color}/>
        }}
      />
      <Tab.Screen 
        name='Mypage'
        component={MypageContainer}
        options={{
          tabBarIcon: ({ color }) => <Icon name='contact-page' size={24} color={color}/>
        }}
      />
    </Tab.Navigator>
  )
}

export default MainTab;