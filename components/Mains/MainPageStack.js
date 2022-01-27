import React from 'react';
import { View, Text, ImageBackground } from 'react-native';

const MainPageStack = () => {
  return (
    <ImageBackground
      source={require('../../assets/background.jpeg')}
      style={{ height: '100%' }}
    >
      <Text>
        This is Main Page!!!
      </Text>
    </ImageBackground>
  )
}

export default MainPageStack;