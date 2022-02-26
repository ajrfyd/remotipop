import React from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';

// 키보드의 뷰에 가리지 않도록 
// 작동 안함
// 연구가 필요

const KeyboardDismissComponent = ({ children }) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
    >
      {children}
    </TouchableWithoutFeedback>
  )
}

export default KeyboardDismissComponent;

// TouchableWithoutFeedback 컴포넌트는 자식 뷰를 1개만 가질 수 있으므로 다음처럼 전체 공간을 채우는 뷰를 추가하여 세부 UI를 구성해 줄 필요성이 있다.