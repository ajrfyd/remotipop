import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const URL = 'http://10.0.2.2:3001/'

const GET_BEANS = 'beans/REQ_BEANS';
const GET_BEANS_SUCCESS = 'beans/REQ_BEANS_SUCCESS';
const GET_BEANS_ERROR = 'beans/REQ_BEANS_ERROR';

const REQ_REGISTER_BEAN = 'beans/REQ_REGISTER_BEAN';
const REQ_REGISTER_BEAN_SUCCESS = 'beans/REQ_REGISTER_BEAN_SUCCESS';
const REQ_REGISTER_BEAN_ERROR = 'beans/REQ_REGISTER_BEAN_ERROR';


export const registerBean = bean => async dispatch => {
  dispatch({ type: REQ_REGISTER_BEAN })

  try {
    const token = await AsyncStorage.getItem('accessToken')
    // console.log(token)
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
      console.log(data, status, 'thisthisthisthisthisthisthisthisthist')
      dispatch({ type: REQ_REGISTER_BEAN_SUCCESS, payload })
  } catch(e) {
    const data = JSON.parse(JSON.stringify(e));
    // console.log(data, 'data data data data data data data data data')
    const payload = {
      error: e,
      errCode: data.status
    }
    dispatch({ type: REQ_REGISTER_BEAN_ERROR })
  }
}

export const getBeans = day => async dispatch => {
  dispatch({ type: GET_BEANS })
  const token = await AsyncStorage.getItem('accessToken');
  if(token && day) {
    try {
      const { data } = await axios.get(
        `${URL}calendar/${day}`,
        {
          headers: {
            ContentType: 'application/json',
            authorization: `Bearer ${token}`
          },
          withCredentials: true
        }
        )
      const payload = data.data;
      dispatch({ type: GET_BEANS_SUCCESS, payload })
      // console.log(data.data)
    } catch(e) {
  
    }
  } else {
    dispatch({ type: GET_BEANS_ERROR })
    return 
  }
} 


const initialState = {
  // beans: {
  //   emotions: '',
  //   emotion_level: '',
  //   contents: '',
  //   gourdKinds: ''
  // }
  beans: null,
  bean: {
    code: null,
    error: null,
    loading: false,
    beans: null
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
          beans: null
        }
      }
    case REQ_REGISTER_BEAN_SUCCESS:
      return {
        ...state,
        bean: {
          code: action.payload.status,
          error: null,
          loading: false,
          beans: action.payload.data,
        }
      }
    case REQ_REGISTER_BEAN_ERROR:
      return {
        ...state,
        bean: {
          code: null,
          error: null,
          loading: false,
          beans: null,
        }
      }
    case GET_BEANS:
      return {
        ...state,
      }
    case GET_BEANS_SUCCESS:
      return {
        ...state,
        beans: action.payload,
        bean: {
          code: null,
          error: null,
          loading: false,
          beans: action.payload,
        }
      }
    case GET_BEANS_ERROR:
      return {
        ...state,
      }
    default:
      return state
  }
}

export default beansReducer;