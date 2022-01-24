import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const InputForm = ({ hasMarginBottom, ...val }, ref) => {
  return (
    <TextInput 
      style={[styles.input, hasMarginBottom && styles.margin]}
      {...val}
      ref={ref}
    />
  )
}

const styles = StyleSheet.create({
  input: {
    borderColor: '#dbdbdb',
    borderWidth: 1,
    paddingHorizontal: 16,
    borderRadius: 4,
    height: 48,
    backgroundColor: '#fff'
  },
  margin: {
    marginBottom: 16
  }
})

export default React.forwardRef(InputForm);