import React from 'react';
import { View, Text, KeyboardAvoidingView, Keyboard,
  SafeAreaView, ImageBackground, TouchableWithoutFeedback, Pressable
} from 'react-native';
import InputForm from '../SignIn/InputForm';


const CalendarContainer = () => {
  return (
    <ImageBackground
      source={require('../../assets/background.jpeg')}
      style={{
        height: '100%'
      }}
    >
      <TouchableWithoutFeedback
        onPress={() => Keyboard.dismiss()}
      >
        <InputForm 
          placeholder='Wirte this line'
        />  
      </TouchableWithoutFeedback>
      {/* <KeyboardAvoidingView
        style={{
          flex: 1,
        }}
      >
        <SafeAreaView
          style={{ flex: 1 }}
        >
        </SafeAreaView>
      </KeyboardAvoidingView> */}
    </ImageBackground>
  )
}

export default CalendarContainer;