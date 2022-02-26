import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import CustomButton from './CustomButton';

const ErrorModal = ({ errCode, setIsSignUp }) => {
  const dispatch = useDispatch();
  const errorMessage = {
    401: '비밀번호 혹은 이메일 주소를 확인해 주세요.',
    409: '이미 존재하는 메일 주소 입니다.',
    201: '성공적으로 가입되었습니다.'
  }
  
  
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>알    림</Text>
        <Text style={styles.content}>
          { errorMessage[errCode] }
        </Text>
        <View style={{ width: '50%' }}>
          <CustomButton 
            title='확인'
            // theme='Secondary'
            onPress={() => {
              dispatch({ type: 'user/SIGN_UP' })
              if(errCode === 201) {
                setIsSignUp(false)
              }
            }}
          />
        </View>
      </View>
      <View 
        style={{ width: '80%', height: '80%', backgroundColor: '#eee', borderTopLeftRadius: 120,
          borderBottomRightRadius: 100, zIndex: -1, left: 10, bottom: '39%', opacity: .2
        }}>

      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '70%', 
    height: '40%',
    backgroundColor: '#fffef2',
    borderRadius: 50,
    shadowColor: "yellow",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 10,
    zIndex: 1,
    top: '40%',
    padding: 30
  },
  title: {
    color: '#6200ee',
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 50,
  },
  content: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 30
  }
})

export default ErrorModal;