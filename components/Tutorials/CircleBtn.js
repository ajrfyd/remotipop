import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const CircleBtn = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Pressable 
        style={styles.btn}
        onPress={() => {
          dispatch({ type: 'pages/BTN_ONE'})
          navigation.navigate('Tutorial1')
        }}
      />
      <Pressable 
        style={styles.btn}
        onPress={() => dispatch({ type: 'pages/BTN_TWO'})}
      />
      <Pressable 
        style={styles.btn}
        onPress={() => dispatch({ type: 'pages/BTN_THREE'})}
      />
      <Pressable 
        style={styles.btn}
        onPress={() => dispatch({ type: 'pages/BTN_FOUR'})}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
    height: 24,
    width: '20%',
  },
  btn: {
    width: 10,
    height: 10,
    backgroundColor: '#6200ee',
    borderRadius: 50
  }
})

export default CircleBtn;