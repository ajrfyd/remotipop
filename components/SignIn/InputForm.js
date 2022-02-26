import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

// 인풋 커스텀
const InputForm = ({ hasMarginBottom, ...val }, ref) => {
  return (
    <TextInput 
      style={[styles.input, hasMarginBottom && styles.margin]}
      {...val}
      ref={ref}
      placeholderTextColor={'black'}
    />
  )
}

const styles = StyleSheet.create({
  input: {
    borderColor: '#dbdbdb',
    borderBottomWidth: 1,
    paddingHorizontal: 16,
    borderBottomColor: 'black',
    // borderRadius: 4,
    height: 48,
    // backgroundColor: '#fff'
  },
  margin: {
    marginBottom: 16
  }
})

export default React.forwardRef(InputForm);