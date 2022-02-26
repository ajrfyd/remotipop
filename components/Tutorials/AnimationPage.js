import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';

// 이모티팝 애니메이션 페이지
const AnimationPage = () => {
  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require('../../assets/background.jpeg')}
        resizeMode='cover'
        style={styles.image}
      >
        <ImageBackground 
        style={styles.image}
        source={require('../../assets/intro.gif')}
        />
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: '100%',
    // height: '100%',
  },
  image: {
    flex: 1
  }
})
export default AnimationPage;