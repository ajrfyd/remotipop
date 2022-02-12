import React from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import Beans from './Beans';

const BeansList = ({ data, ListHeaderComponent, beanModal, setBeanModal, setData }) => {
  return (
    <FlatList 
      style={styles.container}
      data={data}
      renderItem={({item}) => <Beans data={item} beanModal={beanModal} setBeanModal={setBeanModal} setData={setData}/>}
      ItemSeparatorComponent={() => <View style={styles.separator} 
      /> }
      keyExtractor={data => data.id}
      ListHeaderComponent={ListHeaderComponent}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  separator: {
    backgroundColor: '#e0e0e0',
    height: 1,
    width: '100%'
  }
})

export default BeansList;