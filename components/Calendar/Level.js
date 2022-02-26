import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { levelMaker } from '../../utils/level';

// 개별글에 표시되는 레벨 컴포넌트
const Level = ({ level, gourdKinds }) => {
  // 레벨을 받아 배열로 변경 해 주는 함수
  const levelArr = levelMaker(level);

  return (
    <View style={[ styles.container ]}>
      {
        levelArr.map(level => <View key={level} style={[styles.level, gourdKinds ? { backgroundColor: 'red' }: { backgroundColor: 'blue' }]}/>)
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  level: {
    width: 10,
    height: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    marginTop: 5
  }
})

export default Level;