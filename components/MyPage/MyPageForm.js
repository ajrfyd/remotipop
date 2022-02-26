import React, { useRef } from 'react';
import { View, StyleSheet, Keyboard, TouchableWithoutFeedback } from 'react-native';
import InputForm from '../SignIn/InputForm';

// 마이페이지 인풋 폼
const MyPageForm = ({ user, onChangeTextHandler }) => {
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const { userName } = user;

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View>
        <InputForm 
          hasMarginBottom
          placeholder={ userName ? `여기를 눌러 닉네임을 변경할 수 있어요!` : '닉네임을 설정해 주세요'}
          autoCapitalize='none'
          autoCorrect={false}
          onChangeText={onChangeTextHandler('userName')}
          // returnKeyType='done'
        />
        <InputForm 
          hasMarginBottom
          placeholder='email'
          keyboardType='email-address'
          autoCapitalize='none'
          onChangeText={onChangeTextHandler('email')}
          />
        <InputForm 
          placeholder='password'
          hasMarginBottom
          secureTextEntry
          autoCapitalize='none'
          ref={passwordRef}
          onChangeText={onChangeTextHandler('password')}
          onSubmitEditing={() => confirmPasswordRef.current.focus()}
          blurOnSubmit={false}
          returnKeyType='next'
          />
        <InputForm 
          placeholder='confirm password'
          secureTextEntry
          autoCapitalize='none'
          ref={confirmPasswordRef}
          onChangeText={onChangeTextHandler('confirmPassword')}
          // blurOnSubmit={false}
          />
      </View>
    </TouchableWithoutFeedback>
  ) 
}

const styles = StyleSheet.create({

})


export default MyPageForm;