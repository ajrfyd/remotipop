import React from 'react';
import { Platform, StyleSheet, ImageBackground, View, Text, Image } from 'react-native';


const TutorialPage3 = ({ width }) => {
  return (
    <View style={[styles.container, { width: width }]}>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.title}>일주일에 한번 터지는 감정박</Text>
        <Image
          source={require('../../assets/blueBean.png')}
          style={styles.bean}
        />
      </View>
      <View>
        <Text>일요일에 일주일동안 쌓인 당신의 감정이 터져요!</Text>
      </View>
      <Image
          source={require('../../assets/tutorialpop.png')}
          resizeMode='contain'
          style={styles.img}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  title: {
    marginTop: Platform.OS ==='ios' ? 70 : 50,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 20
  },
  img: {
    marginLeft: 50,
    height: '70%'
  },
  bean: {
    width: 30,
    height: 30,
    marginTop: Platform.OS ==='ios' ? 75 : 55,
    marginLeft: 10
  }
})

export default TutorialPage3;