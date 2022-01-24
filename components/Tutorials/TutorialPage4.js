import React from 'react';
import { Image, StyleSheet, Text, View, Platform } from 'react-native';

const TutorialPage4 = ({ width }) => {
  return (
    <View style={[styles.container, { width: width }]}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.title}>차트</Text>
          <Image 
            source={require('../../assets/redBean.png')}
            style={styles.bean}
          />
        </View>
        <View>
          <Text>그동안 누적된 당신의 감정들의 수치를 확인 할 수 있어요!</Text>
        </View>
        <Image
            source={require('../../assets/tutorialchartimg.png')}
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
    marginLeft: Platform.OS === 'ios' ? 10 : null,
    height: '70%',

  },
  bean: {
    width: 30,
    height: 30,
    marginTop: Platform.OS ==='ios' ? 75 : 55,
    marginLeft: 10
  }
})

export default TutorialPage4;