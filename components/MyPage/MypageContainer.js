import React, { useState } from 'react';
import { 
  View, Text, ImageBackground, Platform, 
  KeyboardAvoidingView, StyleSheet, Keyboard, TouchableWithoutFeedback, Alert, useWindowDimensions
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MyPageForm from './MyPageForm';
import MyPageButtonForm from './MyPageButtonForm';
import { useSelector, useDispatch } from 'react-redux';
import { signOut, reqChangeInfo } from '../../modules/user';


const MypageContainer = () => {
  const userInfo = useSelector(state => state.user.signIn.user);
  const { username, email } = userInfo;

  const [ user, setUser ] = useState({
    email: email ?? '',
    userName: username ?? '',
    password: '',
    confirmPassword: ''
  })
  console.log(user)
  const dimensions = useWindowDimensions();
  const { width, height } = dimensions;
  
  const dispatch = useDispatch();
  
  const signOutHandler = () => {
    dispatch(signOut())
  }
  console.log(user)
  const onSubmit = () => {
    Keyboard.dismiss();

    if(user.email === userInfo.email && user.userName === userInfo.username && user.password === '' && user.confirmPassword === ''){
      Alert.alert('아무 정보도 수정되지 않았습니다.')
      return
    }
    if(user.password !== user.confirmPassword) {
      Alert.alert('비밀번호가 서로 일치하지 않아요!')
      return;
    }
    if(user.password === '' && user.confirmPassword === '') {
      Alert.alert('비밀번호는 필수로 입력하셔야 합니다!')
    }

    dispatch(reqChangeInfo(user)).then(result => {
      if(result === 200) {
        Alert.alert('성공적으로 변경되었습니다!')
      }
    })

  }

  const onChangeTextHandler = name => value => {
    setUser({
      ...user,
      [name]: value,    
    })
  }


  return (
    // <TouchableWithoutFeedback
    //   onPress={() => Keyboard.dismiss()}
    // >
      <ImageBackground
        source={require('../../assets/background.jpeg')}
        style={{ height, width, zIndex: -1 }}
      >
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={ Platform.select({ ios: 'padding' })}
        >
          <SafeAreaView
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <View>
              <Text style={styles.title}>
                Welcome {username || null}!!
              </Text>
            </View>
            <View style={styles.form}>
              <MyPageForm 
                user={user}
                onChangeTextHandler={onChangeTextHandler}
              />
              <MyPageButtonForm 
                onPress={signOutHandler}
                onSubmit={onSubmit}
              />
            </View>
          </SafeAreaView>
        </KeyboardAvoidingView>
      </ImageBackground>
    // {/* </TouchableWithoutFeedback> */}
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#6200ee'
  },
  form: {
    marginTop: 64,
    width: '80%'
  }
})

export default MypageContainer;