import React from 'react';
import { View, Text, KeyboardAvoidingView, 
  SafeAreaView, ImageBackground 
} from 'react-native';


const ChartContainer = () => {
  return (
    <ImageBackground
      source={require('../../assets/background.jpeg')}
      style={{
        height: '100%'
      }}
    >
      <KeyboardAvoidingView
        style={{
          flex: 1,
        }}
      >
        <SafeAreaView
          style={{ flex: 1 }}
        >
        </SafeAreaView>
      </KeyboardAvoidingView>
    </ImageBackground>
  )
}

export default ChartContainer;