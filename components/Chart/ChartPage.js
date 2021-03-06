import React, { useState ,useEffect } from 'react';
import { View, KeyboardAvoidingView, Text,
  SafeAreaView, ImageBackground, Pressable ,
  Dimensions, StyleSheet,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getChartData } from '../../modules/chart';
import { PieChart } from 'react-native-svg-charts'
import { makeChartData } from '../../utils/chart';
import ChartTest from './ChartTest';

// 차트 컨테이너 페이지
const ChartPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getChartData())
  }, [dispatch])
  const { data } = useSelector(state => state.chart);
  
  const emotions = makeChartData(data)

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
          style={{ flex: 1}}
        >
          <View style={styles.header}>
            <Text style={styles.headText}>
              나의 감정 통계
            </Text>
          </View>
          <View style={styles.chartContainer}>
            <PieChart
              style={{ height: 200, flex: 1 }}
              outerRadius={'70%'}
              innerRadius={10}
              data={emotions}
              showGrid='false'
              numberOfTicks={30}
              // labelRadius={30}
            />
          </View>
          {/* <ChartTest /> */}
        </SafeAreaView>
      </KeyboardAvoidingView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50
  },
  headText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#6200ee'
  },
  chartContainer: {
    flex: 1
  }
})
export default ChartPage;