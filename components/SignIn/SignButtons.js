import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import CustomButton from './CustomButton';

// 버튼 양식
const SignButtons = ({ isSignUp, onSubmit, loading, setIsSignUp, setForm }) => {
  const navigation = useNavigation();

  const primaryTitle = isSignUp ? '회원가입' : '로그인';
  const secondaryTitle = isSignUp ? '로그인' : '회원가입';

  const onSecondaryButtonPress = () => {
    setIsSignUp(!isSignUp)
    setForm({
      email: '',
      password: '',
      confirmPassword: ''
    })
    // if(!isSignUp) {
    //   navigation.goBack();
    // } else {
    //   // navigation.push('SignIn', { isSignUp: true })
    // }
  }

  if(loading) {
    return (
      <View style={styles.spinnerWrapper}>
        <ActivityIndicator size={32} color='#6200ee'/>
      </View>
    )
  }

  return (
    <View style={styles.button}>
      <CustomButton 
        title={primaryTitle}
        hasMarginBottom
        onPress={onSubmit}
      />
      <CustomButton 
        title={secondaryTitle}
        theme='secondary'
        onPress={onSecondaryButtonPress}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    marginTop: 64,
  },
  spinnerWrapper: {
    marginTop: 64,
    height: 104,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default SignButtons;