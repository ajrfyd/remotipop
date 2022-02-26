import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

// 없는 데이터 표시 컴포넌트
const NothingPage = ({data}) => {
  console.log(data)
  return (
    <View style={styles.container}>
      <Text style={styles.text}>앗...데이터가 없네요...ㅠㅠ</Text>
      <Text style={styles.text2}>오늘의 감정을 등록해 보세요</Text>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#000'
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20
  },
  text2: {
    fontSize: 20,
    color: '#000'
  }
})

export default NothingPage;