import React from 'react';
import { View, StyleSheet, Text, Modal,
  KeyboardAvoidingView, Pressable, TextInput
} from 'react-native';

// 개별 게시글 파일
const Bean = ({ beanModal, setBeanModal, setData, data }) => {
  const { emotions, contents, emotion_level } = data;
  
  return (
    <View style={styles.container} >
      <Modal
        animationType='fade'
        visible={beanModal}
        transparent={true}
      >
        <KeyboardAvoidingView
          behavior='padding'
        >
          <View style={styles.modalView}>
            <View style={styles.modalClose}>
              <Text style={styles.title}>{emotions}</Text>
              <Text style={{ fontSize: 20, color: 'red' }}>{emotion_level} Level</Text>
              <Pressable
                onPress={() => {
                  setBeanModal(!beanModal)
                  setData(null)
                }}
              >
                <Text>
                  ❌
                </Text>
              </Pressable>
            </View>
            <View style={styles.textView}>
              <TextInput 
                placeholder={contents}
                multiline
              />
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignContent: 'center',
  },
  modalView: {
    margin: 80,
    backgroundColor: "#fffef2",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    shadowColor: "red",
    height: 400,
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  modalClose: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    paddingBottom: 10
  },
  content: {
    flex: 1
  },
  textView: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Bean;