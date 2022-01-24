import React from 'react';
import { StyleSheet, Image, Text, View, Platform } from 'react-native';
import TutorialPage2 from './TutorialPage2';


const TutorialPage1 = ({ width }) => {
  // console.log(width)
  return (
    <View style={[styles.container, { width: width }]}>
      <View style={{ flexDirection: 'row' }}>
        <Text style ={styles.title}>
          색다른 감정일기장
        </Text>
          <Image
            style={styles.bean} 
            source={require('../../assets/blueBean.png')}
          />
      </View>
      <View style={{ marginBottom: 10 }}>
        <Text>감정박에</Text>
        <Text>감정 콩주머니를</Text>
        <Text>던져서 당신의 감정을 기록해 보세요!</Text>
      </View>
      <Image 
        source={require('../../assets/tutorialthrow.png')}
        resizeMode='contain'
        style={styles.img}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // height: '100%',
    alignItems: 'center',
  },
  title: {
    marginTop: Platform.OS ==='ios' ? 100 : 50,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 20
  },
  bean: {
    width: 30,
    height: 30,
    marginTop: Platform.OS === 'ios' ? 100 : 55,
    marginLeft: 10
  }, 
  img: {
    height: '70%',
    marginLeft: 60,
    // flex: 1,
    // borderLeftWidth: 10,
    // borderRightWidth: 10
  }
})

export default TutorialPage1;