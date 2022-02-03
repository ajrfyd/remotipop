import React, { useState, useEffect } from 'react';
import { 
  View, Text, SafeAreaView, ImageBackground, Platform, 
  KeyboardAvoidingView, StyleSheet, Keyboard, TouchableWithoutFeedback, Alert
} from 'react-native';
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
  
  
  // console.log(userInfo, 'this is myPage')
  // useEffect(() => {
  //   setUser({
  //     ...user,
  //     email,
  //     userName: username
  //   })
  // }, [username, email])
  // console.log(userInfo, 'adasdasdasdasq')
  // const [ user, setUser ] = useState({
  //     email: '',
  //     userName: '',
  //     password: '',
  //     confirmPassword: ''
  //   })
  const dispatch = useDispatch();
  // console.log(username, email)
  
  // console.log(user)
  const signOutHandler = () => {
    dispatch(signOut())
  }
  console.log(user)
  const onSubmit = () => {
    Keyboard.dismiss();
    // const { email, userName, password, confirmPassword } = user;
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
    // reqChangeInfo(user).then(result => {
    //   console.log(result.data)
    //   if(result.status === 200) {
    //     Alert.alert('성공적으로 변경 되었습니다!')
    //   }
    //   return;
    // })
  }

  const onChangeTextHandler = name => value => {
    setUser({
      ...user,
      [name]: value,    
    })
  }


  return (
    <ImageBackground
      source={require('../../assets/background.jpeg')}
      style={{ height: '100%' }}
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