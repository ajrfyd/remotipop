import React, { useRef } from 'react';
import { StyleSheet } from 'react-native';
import InputForm from './InputForm';

const SignForm = ({ form, onChangeTextHandler, onSubmit }) => {
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  console.log(form)
  return (
    <>
      <InputForm
        hasMarginBottom
        placeholder='Email'
        value={form.email}
        autoCapitalize='none'
        autoCorrect={false}
        keyboardType='email-address'
        onChangeText={onChangeTextHandler('email')}
        onSubmitEditing={() => passwordRef.current.focus()}
      />
      <InputForm 
        placeholder='Password'
        value={form.password}
        // hasMarginBottom={isSignUp}
        onChangeText={onChangeTextHandler('password')}
        secureTextEntry
        ref={passwordRef}
        onSubmitEditing={onSubmit}
      />
    </>
  )
}

const styles = StyleSheet.create({

});

export default SignForm;