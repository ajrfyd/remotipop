import React, { useState } from 'react';
import { 
  View, TextInput, StyleSheet, Text, Keyboard, 
  Platform, KeyboardAvoidingView, SafeAreaView
} from 'react-native';
import SignButtons from './SignButtons';
import SignForm from './SignForm';

const SignInScreen = ({ width, navigation, route }) => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  })
    console.log(route, 'params')
  // const { isSignUp } = route.params ?? {}
  // console.log(isSignUp)

  const [loading, setLoading] = useState(false);

  
  const onChangeTextHandler = name => value => {
    setForm({
      ...form,
      [name]: value
    })
  }

  const onSubmit = async() => {
    Keyboard.dismiss();
    const { email, password, confirmPassword } = form;
    if(password !== confirmPassword) {
      Alert.alert('비밀번호가 일치하지 않습니다!')
      return;
    }

    const info = { email, password };
    setLoading(true);
  }
  

  return (
    <KeyboardAvoidingView 
      style={{ width: width, flex: 1 }}
      behavior={Platform.select({ ios: 'padding' })}
    >
      <SafeAreaView style={[styles.container, { flex: 1 }]}>
        <Text style={styles.text}>SignIn</Text>
        <View style={styles.form}>
          <SignForm 
            form={form}
            onChangeTextHandler={onChangeTextHandler}
            onSubmit={onSubmit}
            // isSignUp={isSignUp}
          />
          <SignButtons 
            onSubmit={onSubmit}
            // isSignUp={isSignUp}
            loading={loading}
          />
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold'
  },
  form: {
    marginTop: 64,
    width: '80%',
    // paddingHorizontal: 30,
  },
})

export default SignInScreen;