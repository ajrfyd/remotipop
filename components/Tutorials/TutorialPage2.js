import React from 'react';
import { StyleSheet, Text, Image, View, Platform } from 'react-native';

const TutorialPage2 = ({ width }) => {
  return (
    <View style={[styles.container, { width: width }]}>
      <View>
        <Text style={styles.title}>마이캘린더</Text>
      </View>
      <View>
        <Text>마이캘린더를 통해 그동안의 기록을 볼 수 있어요</Text>
      </View>
      <Image
          source={require('../../assets/tutorialCalendar111.png')}
          style={styles.img}
          resizeMode='contain'
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
    height: '70%'
  }
})

export default TutorialPage2;