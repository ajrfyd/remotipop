import React from 'react';
import { Pressable, StyleSheet, View, Text, Platform } from 'react-native';

const CustomButton = ({ title, onPress, hasMarginBottom, theme }) => {
  const isPrimary = theme === 'primary';

  return(
    <View style={[styles.overflow, hasMarginBottom && styles.margin]}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          styles.wrapper,
          isPrimary && styles.primaryWrapper,
          Platform.OS === 'ios' && pressed && { opacity: .5 }
        ]}
        android_ripple={{ color: '#fff' }}
      >
        <Text
          style={[
            styles.text,
            isPrimary ? styles.primaryText : styles.secondaryText
          ]}
        >
          {title}
        </Text>
      </Pressable>
    </View>

  )
}

CustomButton.defaultProps = {
  theme: 'primary'
}

const styles = StyleSheet.create({
  overflow: {
    borderRadius: 4,
    overflow: 'hidden'
  },
  wrapper: {
    borderRadius: 4,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#fff'
  },
  margin: {
    marginBottom: 8
  },
  primaryWrapper: {
    backgroundColor: '#6200ee',
  },
  primaryText: {
    color: '#fff'
  },
  secondaryText: {
    color: '#6200ee'
  }
})

export default CustomButton;