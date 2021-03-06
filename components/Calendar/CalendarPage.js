import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import CalendarContainer from './CalendarContainer';
import BeansList from './BeansList';
import { getBeans } from '../../modules/beans';
import { format, set } from 'date-fns';
import NothingPage from './NothingPage';
import Bean from './Bean';

// 달력 페이지 && 게시글 && 모달
const CalendarPage = () => {
  const dispatch = useDispatch();
  const beansData = useSelector(state => state.beans.bean.beans)
  // const beansData2 = useSelector(state => state.beans.bean)
  // const beanData = useSelector(state => state.beans.bean.beans)
  // console.log(beanData, 'TimeLepssoust!!!!!!!')
  const [day, setDay] = useState(format(new Date(), 'yyyy-MM-dd'))
  const [beanModal, setBeanModal] = useState(false)
  const [data, setData] = useState(null)
  
  const [bean, setBean] = useState(null)

  const getDay = useCallback((pressedDay) => {
    setDay(pressedDay)
  }, [day])

  useEffect(() => {
    // console.log(day, 'qqqqqwqeqweqweqweqweqweqweqweqw')
    dispatch(getBeans(day))
    if(beansData) {
      setBean(beansData);
    }
  }, [dispatch, day])

  console.log(bean, 'BeanBeanBeanBeanBeanBeanBeanBeanBeanBeanBeanBeanBeanBean')
  return (
    <>
      <CalendarContainer 
        getDay={getDay}
      />
      {/* <BeansList 
        data={beansData}
      /> */}
      {
        beansData !== null && beansData.length !== 0
        ? <BeansList 
            data={beansData} 
            beanModal={beanModal} 
            setBeanModal={setBeanModal}
            setData={setData}
          /> 
        : <NothingPage data={beansData}/>
      }
      {
        beanModal 
        ? <Bean 
            beanModal={beanModal} 
            setBeanModal={setBeanModal}
            setData={setData}
            data={data}
          /> 
        : null
      }
    </>
  )
}

const styles = StyleSheet.create({

})

export default CalendarPage;