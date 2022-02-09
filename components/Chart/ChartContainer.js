import React from 'react';
import { View, Text, KeyboardAvoidingView, 
  SafeAreaView, ImageBackground, Pressable 
} from 'react-native';
import axios from 'axios';
import { signUp } from '../../lib/auth';

const URL = 'http://10.0.2.2:3000/'

const ChartContainer = () => {
  const onPress = async () => {
    const res = await axios.get(`${URL}beans/10`);
    console.log(res.data)
  }

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
          <Pressable
            onPress={onPress}
          >
            <Text>
              Click
            </Text>
          </Pressable>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </ImageBackground>
  )
}

export default ChartContainer;