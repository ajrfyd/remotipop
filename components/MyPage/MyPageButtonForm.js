import React from 'react';
import { StyleSheet, View } from 'react-native';
import CustomButton from '../SignIn/CustomButton';

// 마이페이지의 버튼 양식
const MyPageButtonForm = ({ onPress, onSubmit }) => {

  return (
    <View style={styles.container}>
      <CustomButton 
        hasMarginBottom
        title='정 보 수 정'
        onPress={onSubmit}
      />
      <CustomButton 
        theme='secondary'
        title='로 그 아 웃'
        onPress={onPress}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  }
})

export default MyPageButtonForm;