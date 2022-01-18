import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import CircleBtn from './CircleBtn';
import { useSelector } from 'react-redux';

const TutorialPage = () => {
  const { pages } = useSelector(state => state.btnPage);
  // const [pageInfo, setPageInfo] = useState(pages)
  console.log(pages)

  // const changePage = (num) => {
  //   setPageInfo({
  //     ...pageInfo,
  //     1: false,
  //     2: false,
  //     3: false,
  //     4: false,
  //     [num]: true
  //   })
  //   console.log(pageInfo)
  // }
  
  return (
    <View style={styles.block}>
      <Text>
        Tutorial Page
      </Text>
      <CircleBtn />
    </View>
  )
}
// 조그만 버튼 만들어 밑에 배치 한  뒤 온프레스? 

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  }
})

export default TutorialPage;