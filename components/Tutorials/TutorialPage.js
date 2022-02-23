import React, { useState } from 'react';
import { 
  View, StyleSheet, ScrollView, useWindowDimensions, ImageBackground, SafeAreaView
} from 'react-native';
import CircleBtn from './CircleBtn';
import { useSelector } from 'react-redux';
import TutorialPage1 from './TutorialPage1';
import TutorialPage2 from './TutorialPage2';
import TutorialPage3 from './TutorialPage3';
import TutorialPage4 from './TutorialPage4';
import SignInScreen from '../SignIn/SignInScreen';


const TutorialPage = () => {
  const { width } = useWindowDimensions();
  // const { pages } = useSelector(state => state.btnPage);
  // const [pageInfo, setPageInfo] = useState(pages)
  // console.log(pages)


  return (
      <ImageBackground
        source={require('../../assets/background.jpeg')}
        style={{width: width, height: '100%'}}
      >
        <ScrollView 
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <TutorialPage1 width={width}/>
          <TutorialPage2 width={width}/>
          <TutorialPage3 width={width}/>
          <TutorialPage4 width={width}/>
          <SignInScreen width={width}/>
          {/* <CircleBtn /> */}
        </ScrollView>
      </ImageBackground>
  )
}
// 조그만 버튼 만들어 밑에 배치 한  뒤 온프레스? 

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
  }
})

export default TutorialPage;