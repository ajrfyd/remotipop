import React, { useState } from 'react';
import { 
  View, StyleSheet, Text, Modal, Pressable, ImageBackground, 
} from 'react-native';

const ModalContainer = ({ modal, setModal, emotion }) => {
  const emotions = [
    ['슬픔', '우울', '걱정', '분노', '실망'],
    ['기쁨', '행복', '만족', '뿌듯', '설렘'],
  ]
  const RED = '../../assets/redNo.png';
  const BLUE = '../../assets/blueNo.png';
  // console.log(emotions[0])
  // const positive = ['기쁨', '행복', '만족', '뿌듯', '설렘'];
  // const negative = ['슬픔', '우울', '걱정', '분노', '실망'];

  return (
    <View 
      style={styles.modalCenterView}
    >
      <Modal
        transparent={true}
        animationType='fade'
        visible={modal}
      >
        <View style={styles.modalView}>
          <View style={styles.top}>
            <Text style={styles.title}>오늘 당신의 감정은??</Text>
            <Pressable
              onPress={() => setModal(!modal)}
            >
              <Text>❌</Text>
            </Pressable>
          </View>
          <View style={styles.emotionsContainer}>
            {
              emotions[emotion].map((pos, idx) => (
                <Pressable>
                  <ImageBackground
                    source={emotion === 1 ? require(`${RED}`): require(`${BLUE}`)}
                    key={idx}
                    style={{ width: 40, height: 40, justifyContent: 'center', alignItems: 'center' }}
                  >
                    <Text style={styles.emotionText}>{pos}</Text>
                  </ImageBackground>
                </Pressable>
              ))
            }
          </View>
          <View
            style={{
              width: '100%',
              justifyContent:'flex-start',
              marginTop: 20
            }}
          >
            <Text
              style={styles.selectLevelTitle}
            >
              감정레벨 선택
            </Text>
          </View>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  modalCenterView: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 5,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 10,
    width: '90%',
    height: '90%'
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    // boderBottomWidth: 10,
    boderBottomColor: 'black',
    borderBottomWidth: 2
    // borderColor: 'black',
    // borderWidth: 2
    // backgroundColor: 'black'
  },
  title: {
    fontSize: 18,
    color: '#6200ee',
    paddingBottom: 10
  },
  emotionsContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    marginTop: 20
  },
  emotionText: {
    fontWeight: 'bold',
    color: '#000'
  },
  selectLevelTitle: {
    fontWeight: 'bold',
    fontsize: 16,
    color: '#000'
  }
})

export default ModalContainer;