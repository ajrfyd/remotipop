import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { levelMaker } from '../../utils/level';

const Level = ({ level, gourdKinds }) => {
  const levelArr = levelMaker(level)

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