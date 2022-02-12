import React from 'react';
import { View, Text, KeyboardAvoidingView, 
  SafeAreaView, ImageBackground, Pressable 
} from 'react-native';
import axios from 'axios';
import { signUp } from '../../lib/auth';
import AsyncStorage from '@react-native-community/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { getBeans } from '../../modules/beans';

const URL = 'http://10.0.2.2:3000/'

const ChartPage = () => {
  // const dispatch = useDispatch();
  // const data = useSelector(state => state.beans.beans)
  // console.log(data, '@@@@@@@@@@@@@@@@@@@@@@')
  const onPress = async () => {
    // const token = await AsyncStorage.getItem('accessToken');
    // // const res = await axios.get(`${URL}beans/10`);
    // const data = await axios.get(
    //   `${URL}calendar/2022-02-10`,
    //   {
    //     headers: {
    //       authorization: `Bearer ${token}`,
    //       ContentType: 'application/json'
    //     },
    //     withCredentials: true
    //   }
    //   )
    // console.log(data.data.data)
    // dispatch(getBeans('2022-02-10'))
  }


  return (
    <ImageBackground
      source={require('../../assets/background.jpeg')}
      style={{
        height: '100%'
      }}
    >
      <KeyboardAvoidingView
        style={{
          flex: 1,
        }}
      >
        <SafeAreaView
          style={{ flex: 1 }}
        >
          <Pressable
            onPress={onPress}
          >
            <Text>
              Click
            </Text>
          </Pressable>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </ImageBackground>
  )
}

export default ChartPage;