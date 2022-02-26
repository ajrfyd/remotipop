import React, { useState, useCallback, useEffect } from 'react';
import { 
  View, StyleSheet, Text, Keyboard, 
  Platform, KeyboardAvoidingView, Alert
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { signIn, signUp } from '../../modules/user';
import SignButtons from './SignButtons';
import SignForm from './SignForm';
// import { signInF, signUp } from '../../lib/auth';
import axios from 'axios';
import { validEmail, validPass } from '../../utils/sign';
import ErrorModal from './ErrorModal';

// 회원가입 로그인 스크린 페이지 
const SignInScreen = ({ width, navigation, route }) => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    username: ''
  })
  const dispatch = useDispatch();
  
  const [loading, setLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const { errCode } = useSelector(state => state.user.signIn);
  const [code, setCode] = useState(null);
  // if(errCode) {
  //   console.log(errCode,'qweqweqweqweqw')
  //   // setCode(errCode)
  // }
  // console.log(code, 'qweqweqweqweqweqw')
  const onChangeTextHandler = name => value => {
    setForm({
      ...form,
      [name]: value
    })
  }
  const onSubmit = async () => {
    Keyboard.dismiss();
    const { email, password, confirmPassword, username } = form;

    if(
      isSignUp ?
      !email || !password || !confirmPassword :
      !email || !password
      ) {
      Alert.alert('알림', '모든 입력은 필수입니다.')
      return;
    }

    if(!validEmail(email)) {
      Alert.alert('알림', '잘못된 형식의 이메일 주소 입니다')
      return;
    }


    if(isSignUp) {
      if(password !== confirmPassword) {
        Alert.alert('알림', '비밀번호를 확인해 주세요')
        return;
      }
      if(!validPass(password)) {
        Alert.alert('알림', '비밀번호는 영문,숫자,특수문자($@^!%*#?&)를 모두 포함하여 8자 이상 입력해야합니다')
        return;
      }
      const info = {
          email,
          password,
          username
        }
      dispatch(signUp(info))
      if(errCode === 409) {
        // Alert.alert('알림', '이미 존재하는 메일 입니다!')
        // setCode(409)
        return;
      }
      if(errCode === 201) {
        // setCode(errCode)
        // Alert.alert('알림', '성공적으로 가입되었습니다. 로그인 해 주세요!')
        return;
      }
    } else {
      const info = { email, password };
      setLoading(true);
      try{
        dispatch(signIn(info))
        setLoading(false)
      } catch(e) {
        setLoading(false)
      }
      if(errCode === 401) {
        Alert.alert('알림', '비밀번호 혹은 이메일을 확인해 주세요')
        return
      }
    }
  }


  return (
    <KeyboardAvoidingView 
      style={{ width: width, flex: 1 }}
      behavior={Platform.select({ ios: 'padding' })}
    >
      <SafeAreaView style={[styles.container, { flex: 1 }]}>
        {
          errCode ? <ErrorModal errCode={errCode} setIsSignUp={setIsSignUp}/>: (
            
              <>
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
                    // blurOnSubmit={false}
                  />
                </View>
              </>
          )
        }
        {/* <Text style={styles.text}>{isSignUp ? 'SignUp' : 'SignIn'}</Text>
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
            // blurOnSubmit={false}
          />
        </View> */}
        {/* <ErrorModal setCode={setCode}/> */}
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