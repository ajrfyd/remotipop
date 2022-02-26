import React, { useState } from 'react';
import { StyleSheet, Alert } from 'react-native';
import { Calendar, CalendarList } from 'react-native-calendars';
import Icons from 'react-native-vector-icons/MaterialIcons'
import {LocaleConfig} from 'react-native-calendars';

// 달력 컨테이너 페이지 & 달력 초기화(한글화)
LocaleConfig.locales['fr'] = {
  monthNames: [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월'
  ],
  monthNamesShort: ['1', '2', '3', '4', '5', '6', '7.', '8', '9.', '10', '11', '12'],
  dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
  dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
  today: "오늘"
};
LocaleConfig.defaultLocale = 'fr';

const CalendarContainer = ({ getDay }) => {
  const [markedDay, setMarkedDay] = useState(null);
  const markingFunc = (day) => {
    setMarkedDay({
      [day.dateString]: {
        selected: true,
        marked: false
      }
    })
  }
  // const marked = {
  //   '2022-02-09': {
  //       marked: true,
  //       selected: true
  //   }
  // }
  return (
    <CalendarList 
      // style={styles.calendar}
      markedDates={markedDay}
      // calendarWidth={500}
      onDayPress={day => {
        markingFunc(day)
        getDay(day.dateString)
      }}
      // onDayLongPress={day => {
      //   console.log('selected day', day);
      // }}
      // onMonthChange={month => {
      //   console.log('month changed', month);
      // }}

      // disableMonthChange={true}
      hideExtraDays={false}
      // onPressArrowLeft={a => Alert.alert(a, 'a')}
      // // disableArrowLeft={true}
      // // renderHeader={date => {
      // //   console.log(date)
      // // }}
      enableSwipeMonths={true}
      // pastScrollRange={100}
      // futureScrollRange={100}
      horizontal={true}
      pagingEnabled={true}
      theme={{
        'stylesheet.calendar.header': {
          dayTextAtIndex0: {
            color: 'red'
          },
          dayTextAtIndex6: {
            color: 'blue'
          }
        }
      }}
    />
  )
}

const styles = StyleSheet.create({
  calendar: {
    width: '80%'
  }
})

export default CalendarContainer;