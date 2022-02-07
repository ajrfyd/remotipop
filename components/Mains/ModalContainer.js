import React, { useState } from 'react';
import { 
  View, StyleSheet, Text, Modal, Pressable, ImageBackground, 
  ScrollView, TextInput, KeyboardAvoidingView, Platform,
  useWindowDimensions
} from 'react-native';
import CustomButton from '../SignIn/CustomButton';

const ModalContainer = ({ modal, setModal, emotion }) => {
  const emotions = [
    ['슬픔', '우울', '걱정', '분노', '실망'],
    ['기쁨', '행복', '만족', '뿌듯', '설렘'],
  ]
  const RED = '../../assets/redNo.png';
  const BLUE = '../../assets/blueNo.png';

  const emotionLevel = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // const [keyboard, setKeyboard] = useState(false);
  // modal size 
  const dimensions = useWindowDimensions();
  const { height } = dimensions;

  const onSubmit = () => {

  }

  return (
    <View 
      style={styles.modalCenterView}
    >
      <Modal
        transparent={true}
        animationType='fade'
        visible={modal}
      >
        <KeyboardAvoidingView
          behavior='position'
        >

        <View style={[
          styles.modalView,
          // keyboard ? 
          // { bottom: 200 } :
          // { bottom: 0 }
          {
            height: height - 100
          }
        ]}>
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
                <Pressable
                  key={idx}
                >
                  <ImageBackground
                    source={emotion === 1 ? require(`${RED}`): require(`${BLUE}`)}
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
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={styles.scroll}
            >
              {
                emotionLevel.map((emotions, idx) => (
                  <Pressable 
                    key={idx}
                    style={({ pressed })=> 
                      [
                      styles.emotionLevelContainer,
                      emotion === 1 ?
                        { backgroundColor: '#E3395C' } :
                        { backgroundColor: '#63C0D6' },
                        {
                          opacity: pressed ? .3 : 1
                        }
                    ]}
                  >
                    <Text style={[
                      styles.emotionLevelText,
                      emotion === 1 ? { color: 'yellow'} : { color: 'red' }
                    ]}
                    >{emotions}</Text>
                  </Pressable>
                ))
              }
            </ScrollView>
          </View>
          <View
            style={{
              width: '100%',
              justifyContent:'flex-start',
              marginTop: 20
            }}
          >
            <Text style={styles.selectLevelTitle}>
              감정을 기록해 보아요
              </Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput 
              style={styles.input}
              placeholder='오늘 하루는 어땠나요???'
              multiline={true}
              // onPressIn={() => setKeyboard(true)}
              // onSubmitEditing={() => setKeyboard(false)}
              />
          </View>
          <View style={{ width: '100%'}}>
            <CustomButton 
              title='던지기'
              theme='secondary'
              onPress={onSubmit}
            />

          </View>
        </View>
        </KeyboardAvoidingView>
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
    // height: 600,
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
    fontSize: 16,
    color: '#000'
  },
  scroll: {
    marginTop: 20,
    height: 80,
    width: '100%',
    paddingTop: 13,
    // borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#F5F5F6',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: .25,
    shadowRadius: 4,
    elevation: 10
  },
  emotionLevelContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    // borderWidth: 2,
    borderRadius: 25,
    // marginRight: 50
    marginHorizontal: 140,
  },
  emotionLevelText: {
    fontSize: 20,
    fontWeight: 'bold',
    // color: '#000'
    // color: '#6200ee'
  },
  inputContainer: {
    flex: 1, 
    width: '100%', 
    marginTop: 20, 
    marginBottom: 10 
  },
  input: {
    flex: 1, 
    width: '100%',
    // borderWidth: 1,
    borderRadius: 15,
    backgroundColor: '#F5F5F6',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 10,
  }
})

export default ModalContainer;