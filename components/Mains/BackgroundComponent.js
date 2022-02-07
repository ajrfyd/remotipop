import React from 'react';
import { ImageBackground } from 'react-native';

const BackgroundComponent = ({ children }) => {
  console.log(children)
  return (
    <ImageBackground
      source={require('../../assets/background.jpeg')}
      style={{
        height: '100%'
      }}
    >
      {children}
    </ImageBackground>
  )
}

export default BackgroundComponent;