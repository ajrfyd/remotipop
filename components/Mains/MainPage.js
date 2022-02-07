import React, { useState } from 'react';
import { 
  View, StyleSheet, Pressable, SafeAreaView, Platform,
  ImageBackground, Image, Text
} from 'react-native';
import { explain, controller } from '../../dum/dummy';
import ModalContainer from './ModalContainer';

const MainPage = ({ navigation }) => {
  const [num, setNum] = useState(0);
  const [modal, setModal] = useState(false);
  const [emotion, setEmotion] = useState(null);

  const modalController = (num) => {
    setEmotion(num);
    setModal(!modal)
  }
  // console.log(modal, emotion)
  return (
    <ImageBackground
      source={require('../../assets/background.jpeg')}
      style={{
        height: '100%',
      }}
    >
      <SafeAreaView
        behavior={Platform.select({ ios: 'padding' })}
        style={{ flex: 1 }}
      >
        <View style={styles.top}/>
        <View style={styles.ropeContainer}>
          <View style={styles.rope}/>
          <View style={styles.rope}/>
        </View>
        <View style={styles.gourdsContainer}>
          <Pressable 
            style={styles.gourdContainer}
            onPress={() => modalController(1)}
          >
            <Image 
              source={require('../../assets/red.png')}
              style={[styles.gourds, { marginLeft: -10 }]}
            />
          </Pressable>
          <Pressable 
            style={styles.gourdContainer}
            onPress={() => modalController(0)}
          >
            <Image 
              source={require('../../assets/yellow.png')}
              style={[styles.gourds, { marginLeft: 10}]}
            />
          </Pressable>
        </View>
        <View style={styles.speechBubbleContainer}
        >
          <View style={styles.speechBubble}>
            <Text
              style={styles.text}
            >
              {explain[num]}
            </Text>
          </View>
          <View style={
            [ styles.speechBubbleVertex, 
            { transform: [{ rotate: '45deg' }]}
          ]}/>
        </View>
        <Pressable 
          style={styles.girlContainer}
          onPress={() => {
            const result = controller(num);
            setNum(result)
          }}  
        >
          <Image 
            source={require('../../assets/girl.png')}
            resizeMode='contain'
            style={styles.girl}
          />
        </Pressable>
      </SafeAreaView>
      {
        modal 
        ? <ModalContainer 
            modal={modal}
            setModal={setModal}
            emotion={emotion}
          /> 
        : null
      }
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  top: {
    width: '100%',
    height: 15,
    backgroundColor: '#6296A9'
  },
  ropeContainer: {
    width: '100%',
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  rope: {
    width: 4,
    height: '100%',
    backgroundColor: '#6296A9'
  },
  gourdsContainer: {
    width: '100%',
    height: 150,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  gourdContainer: {
    width: 150,
    height: 150
  },
  gourds: {
    width: '100%',
    height: '100%'
  },
  speechBubbleContainer: {
    width: '100%',
    marginTop: 20,
    alignItems: 'center',
  },
  speechBubble: {
    width: '80%',
    height: 100,
    backgroundColor: 'transparent',
    borderRadius: 10,
    borderColor: '#fff',
    borderWidth: 1,
    marginLeft: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  speechBubbleVertex: {
    width: 5,
    height: 5,
    top: -2,
    borderWidth: 1,
    borderRightColor: '#fff',
    borderBottomColor: '#fff',
    borderTopColor: 'transparent',
    borderLeftColor: 'transparent',
    right: 100
  },
  girlContainer: {
    flex: 1, 
    width: '50%', 
    // backgroundColor: 'red',
    marginLeft: 10
  },
  girl: {
    width: '50%',
    height: '100%'
  },
  text: {
    color: '#6200ee',
    fontSize: 18
  }
})

export default MainPage;




{/* <View
          style={{
            width: '100%',
            height: 110,
          }}
        >
          <Image
            source={require('../../assets/speechbubble111.png')}
            resizeMode='contain'
            style={{ 
              width: 200, 
              height: '100%', 
              alignContent: 'stretch',
              left: 150,
              top: 50
            }}
          />
          <Text>zzz</Text>
        </View> */}