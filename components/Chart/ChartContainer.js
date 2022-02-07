import React from 'react';
import { View, Text, KeyboardAvoidingView, 
  SafeAreaView, ImageBackground, Pressable 
} from 'react-native';
import axios from 'axios';
import { signUp } from '../../lib/auth';

const URL = 'http://10.0.2.2:3000/'

const ChartContainer = () => {
  const onPress = async () => {
    // const res = await axios.get(`${URL}users/signup`)
    // console.log(res.data);
    // const res = await axios.post(
    //   `${URL}users/signup`,
    //   {
    //     username: 'ajrfyd',
    //     password: 'qwer1234',
    //     email: 'ajrfyd@naver.com'
    //   },
    //   {
    //     headers: {
    //       'ContentType': 'application/json',
    //     },
    //     withCredentials: true,
    //   }
    //   )

    const res = await axios.post(`${URL}users/signin`, { email: 'ajrfyd@naver.com', password: 'qwer1234' }, {
      headers: {
        'ContenType': 'application/json',
      },
      withCredentials: true
    })
    console.log(res.data);
    // try {
    //   const req = await axios.post(
    //     `${URL}users/signup`,
    //     { email, password, username },
    //     {
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       withCredentials: true,
    //     }
    //   );
    //   console.log(req)
    // } catch (err) {
    //   throw new Error(err, 'aaaaaaa');
    // }

    // const res = await axios.get('http://127.0.0.1:3000/test')
    // console.log(res.data)
    // try {
    //   const res = await axios.post(
    //     `${URL}users/signup`,
    //     {
    //       username: 'ajrfyd',
    //       email: 'ajrfyd@naver.com',
    //       password: 'qwer1234'
    //     },
    //     {
    //       headers: {
    //         'ContentType': 'application/json',
    //       },
    //       withCredentials: true
    //     }
    //     )
    //     console.log(res)
    // } catch(e) {
    //   console.log(e)
    //   throw new Error(e);
    // }
    // console.log(res.data)
    // const userInfo = {
    //   email,
    //   password
    // }
    // try {
    //   const { user } = await signUp(userInfo)
    //   console.log(user)
    // } catch(e) {
    //   throw new Error(e)
    // }

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

export default ChartContainer;