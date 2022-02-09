import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const URL = 'http://10.0.2.2:3000/'

const REQ_BEANS = 'beans/REQ_BEANS';
const REQ_BEANS_SUCCESS = 'beans/REQ_BEANS_SUCCESS';
const REQ_BEANS_ERROR = 'beans/REQ_BEANS_ERROR';

const REQ_REGISTER_BEAN = 'beans/REQ_REGISTER_BEAN';
const REQ_REGISTER_BEAN_SUCCESS = 'beans/REQ_REGISTER_BEAN_SUCCESS';
const REQ_REGISTER_BEAN_ERROR = 'beans/REQ_REGISTER_BEAN_ERROR';


export const registerBean = bean => async dispatch => {
  dispatch({ type: REQ_REGISTER_BEAN })
  console.log(bean, 'This is in Modules_________')
  try {
    const token = await AsyncStorage.getItem('accessToken')
    console.log(token)
    const res = await axios.post(
      `${URL}beans`,
      bean,
      {
        headers: {
          'ContentType': 'application/json',
          authorization: `Bearer ${token}`
        },
        withCredentials: true
      }
      )
      const { data, status } = res;
      const payload = {
        data, status
      }
      console.log(data, status)
  } catch(e) {
    const data = JSON.parse(JSON.stringify(e));
    console.log(data, 'data data data data data data data data data')
    // const payload = {
    //   error: e,
    //   errCode: data.status
    // }
    dispatch({ type: REQ_REGISTER_BEAN_ERROR })
  }
}

const initialState = {
  // beans: {
  //   emotions: '',
  //   emotion_level: '',
  //   contents: '',
  //   gourdKinds: ''
  // }
  beans: [],
  bean: {
    code: null,
    error: null,
    loading: false
  }
}

const beansReducer = (state = initialState, action) => {
  switch(action.type) {
    case REQ_REGISTER_BEAN:
      return {
        ...state,
        bean: {
          code: null,
          error: null,
          loading: true,
        }
      }
    case REQ_REGISTER_BEAN_SUCCESS:
      return {
        ...state,
        bean: {
          code: null,
          error: null,
          loading: false,
        }
      }
    case REQ_REGISTER_BEAN_ERROR:
      return {
        ...state,
        bean: {
          code: null,
          error: null,
          loading: false
        }
      }
    default:
      return state
  }
}

export default beansReducer;