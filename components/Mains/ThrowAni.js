import React from 'react';
import { 
  StyleSheet, ImageBackground, Text, Pressable, View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// 감정 게시글 작성 후 나오는 애니메이션 페이지
const ThrowAni = ({ navigation, route }) => {
  // const URL = route.params ?
  //   '../../assets/positiveThrow.gif' :
  //   '../../assets/negativeThrow.gif';
  const { params } = route;
  const POS = '../../assets/positiveThrow.gif';
  const NEG = '../../assets/negativeThrow.gif';
  const closeAnimation = () => {
    setTimeout(() => {
      navigation.navigate('Main')
    }, 3000)
    return
  }

  closeAnimation()

  return (
    <View
      style={styles.container}
    >
      <ImageBackground
        source={require('../../assets/background.jpeg')}
        stlye={{ flex: 1 }}
        resizeMode='cover'
      >
        <ImageBackground 
          source={params.params ? require(`${POS}`) : require(`${NEG}`)}
          style={{ height: '100%', width: '100%' }}
        />
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default ThrowAni;