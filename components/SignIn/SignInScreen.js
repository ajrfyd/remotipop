import React, { useState, useCallback } from 'react';
import { 
  View, StyleSheet, Text, Keyboard, 
  Platform, KeyboardAvoidingView, SafeAreaView, Alert
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../../modules/user';
import SignButtons from './SignButtons';
import SignForm from './SignForm';
import { signInF, signUp } from '../../lib/auth';
import axios from 'axios';

const SignInScreen = ({ width, navigation, route }) => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  })

  const [loading, setLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  // const user = useSelector(state => state.user.signIn);
  const dispatch = useDispatch();

  // console.log(isSignUp)
  const onChangeTextHandler = name => value => {
    setForm({
      ...form,
      [name]: value
    })
  }

  const onSubmit = async() => {
    Keyboard.dismiss();
    const { email, password, confirmPassword } = form;
    if(isSignUp && password !== confirmPassword) {
      Alert.alert('비밀번호가 일치하지 않습니다!')
      return;
    }

    const info = { email, password };
    setLoading(true);
    dispatch(signIn(info))
    // try{
    //   const { data } = await axios.post(
    //     'http://ec2-13-209-98-187.ap-northeast-2.compute.amazonaws.com:8080/users/signin', 
    //     info,
    //     { 
    //       headers: {
    //         'Content-Type': 'application/json'
    //       },
    //       withCredentials: true
    //     }
    //     )
    //     console.log(data.userinfo.email)
    //     if(data.userinfo) setLoading(false)
    //     return
    // } catch(e) {
    //   console.log(e)
    // }
    

    // try {
    //   const { user } = isSignUp ? await signUp(info) : await signInF(info);
    //   console.log(user);
    // } catch(e) {
    //   Alert.alert('실패');
    //   console.log(e);
    // } finally {
    //   setLoading(false);
    // }
    setLoading(false)
  }

  // console.log(user);

  return (
    <KeyboardAvoidingView 
      style={{ width: width, flex: 1 }}
      behavior={Platform.select({ ios: 'padding' })}
    >
      <SafeAreaView style={[styles.container, { flex: 1 }]}>
        <Text style={styles.text}>{isSignUp ? 'SignUp' : 'SignIn'}</Text>
        <View style={styles.form}>
          <SignForm 
            form={form}
            onChangeTextHandler={onChangeTextHandler}
            onSubmit={onSubmit}
            isSignUp={isSignUp}
            blurOnSubmit={false}
          />
          <SignButtons 
            onSubmit={onSubmit}
            isSignUp={isSignUp}
            loading={loading}
            setIsSignUp={setIsSignUp}
            setForm={setForm}
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
    fontWeight: 'bold',
    color: 'black'
  },
  form: {
    marginTop: 64,
    width: '80%',
    // paddingHorizontal: 30,
  },
})

export default SignInScreen;