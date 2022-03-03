import React,{ useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Bean from './Bean';
import Level from './Level';

// Flat List 안의 개별 게시글의 틀
const Beans = ({ data, beanModal, setBeanModal, setData }) => {
  const { contents, createdAt, gourdKinds, emotion_level, emotions } = data;
  const date = new Date(createdAt).toTimeString().split(' ')[0];

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
      {/* <Text>{gourdKinds ? 'positive': 'negative'}</Text> */}
      <View style={styles.header}>
        <Text style={[styles.headerText, gourdKinds ? { color: 'red'} : { color: 'blue' }]}>{emotions}한 날</Text>
      </View>
      <View style={styles.levelContainer}>
        <Text style={styles.levelText}>Level : </Text>
        <Level level={emotion_level} gourdKinds={gourdKinds} style={{flex: 1 }}/>
      </View>
      <View>
        <Text style={styles.content} numberOfLines={1}>
          {contents}
        </Text>
      </View>
      <View style={{ alignItems: "flex-end", marginRight: 5 }}>
        <Text>{date}</Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 120,
    // borderBottomColor: '#004',
    // borderBottomWidth: 1,
    backgroundColor: '#eeeeeeab',
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    paddingHorizontal: 5,
    marginTop: 5,
  },
  header: {
    marginHorizontal: 10,
    alignItems: 'center'
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  levelContainer : {
    flexDirection: 'row'
  },
  levelText: {
    marginLeft: 10,
    fontSize: 15,
    fontWeight: 'bold'
  },
  content: {
    padding: 15,
    marginBottom: -10
  }
})

export default Beans;