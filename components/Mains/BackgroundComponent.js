import React from 'react';
import { ImageBackground } from 'react-native';

// background 컴포넌트 
// 사용이 안되었구나...
const BackgroundComponent = ({ children }) => {
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