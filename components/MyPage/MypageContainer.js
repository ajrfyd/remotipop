import React, { useState } from 'react';
import { 
  View, Text, SafeAreaView, ImageBackground, Platform, 
  KeyboardAvoidingView, StyleSheet, Keyboard, TouchableWithoutFeedback
} from 'react-native';
import CustomButton from '../SignIn/CustomButton';
import MyPageForm from './MyPageForm';
import MyPageButtonForm from './MyPageButtonForm';
import { useSelector, useDispatch } from 'react-redux';
import { signOut } from '../../modules/user';


const MypageContainer = () => {
  const userInfo = useSelector(state => state.user.signIn.user);
  const dispatch = useDispatch();
  const { username, email } = userInfo;
  // console.log(username, email)
  const [ user, setUser ] = useState({
    email: username || '',
    userName: username || '',
    password: '',
    confirmPassword: ''
  })
  console.log(user)

  const signOutHandler = () => {
    dispatch(signOut())
  }

  const onSubmit = () => {
    Keyboard.dismiss();
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