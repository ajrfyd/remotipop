import React, { useRef } from 'react';
import { StyleSheet } from 'react-native';
import InputForm from './InputForm';

const SignForm = ({ form, onChangeTextHandler, onSubmit, isSignUp }) => {
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  // console.log(form)
  return (
    <>
      <InputForm
        hasMarginBottom
        placeholder='Email'
        value={form.email}
        autoCapitalize='none'
        autoCorrect={false}
        keyboardType='email-address'
        returnKeyType='next'
        onChangeText={onChangeTextHandler('email')}
        onSubmitEditing={() => passwordRef.current.focus()}
      />
      <InputForm 
        placeholder='Password'
        value={form.password}
        hasMarginBottom={isSignUp}
        onChangeText={onChangeTextHandler('password')}
        secureTextEntry
        ref={passwordRef}
        returnKeyType={isSignUp ? 'next' : 'done'}
        onSubmitEditing={() => {
          if(isSignUp) {
            confirmPasswordRef.current.focus();
          } else {
            onSubmit();
          }
        }}

      />
      {
        isSignUp && (
          <InputForm 
            placeholder='ConfirmPassword'
            value={form.confirmPassword}
            onChangeText={onChangeTextHandler('confirmPassword')}
            secureTextEntry
            ref={confirmPasswordRef}
            onSubmtEditing={onSubmit}
            returnKeyType='done'
          />
        )
      }
    </>
  )
}

const styles = StyleSheet.create({

});

export default SignForm;