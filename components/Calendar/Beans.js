import React,{ useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Bean from './Bean';

const Beans = ({ data, beanModal, setBeanModal, setData }) => {
  const { contents, createdAt, gourdKinds, emotion_level, emotions } = data;
  
  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        // setBean(!bean)
        // console.log(bean)
        setData({
          emotions,
          contents,
          emotion_level
        })
        setBeanModal(!beanModal)
      }}
    >
      <Text>
        {contents}
      </Text>
      <Text>{gourdKinds ? 'positive': 'negative'}</Text>
      <Text>{emotion_level}</Text>
      <Text>{createdAt}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    // borderBottomColor: '#004',
    // borderBottomWidth: 1,
    backgroundColor: '#eeeeeeab',
  },

})

export default Beans;