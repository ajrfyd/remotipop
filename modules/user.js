import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";
// Action type

// const URL = 'http://ec2-13-209-98-187.ap-northeast-2.compute.amazonaws.com:8080/'
const URL = 'http://10.0.2.2:3001/'

const SIGN_IN = 'user/SIGN_IN';
const SIGN_IN_SUCCESS = 'user/SIGN_IN_SUCCESS';
const SIGN_IN_ERROR = 'user/SIGN_IN_ERROR';

const SIGN_UP = 'user/SIGN_UP';
const SIGN_UP_SUCCESS = 'user/SIGN_UP_SUCCESS';
const SIGN_UP_ERROR = 'user/SIGN_UP_ERROR';

const SIGN_OUT = 'user/SIGN_OUT';

// const 

const initialState = {
  signIn: {
    loading: false,
    user: null,
    error: null,
    errCode: null,
    isSign: false
  }
}

export const signIn = userInfo => async dispatch => {
  dispatch({ type: SIGN_IN })

  try {
    const { data } = await axios.post(
      `${URL}users/signin`,
      userInfo,
      {
        header: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      }
      )
      // console.log(data,'@@@@@@@@@@@@@@@@@@@@@@@@@@@@s')
      const result = data.userinfo;
      const accessToken = result.accessToken;
      const { username, email } = result;
      const userinfo = {
        username,
        email
      }


      if(await AsyncStorage.getItem('accessToken') === null) {
        await AsyncStorage.setItem('accessToken', accessToken)
      }

    dispatch({ type: SIGN_IN_SUCCESS, userinfo })
  } catch(e) {
    // console.log(e,'1231241241241241212412412412')
    const data = JSON.parse(JSON.stringify(e));
    const payload = {
      error: e,
      errCode: data.status
    }
    dispatch({ type: SIGN_IN_ERROR, payload })
  }
};

export const signUp = userInfo => async dispatch => {
  const { email, password, username } = userInfo;
  if(!email || !password || !username) {
    return {
      message: 'invalid'
    }
  }
  dispatch({ type: SIGN_UP });
  // console.log(userInfo)
  try {
    const { data, status } = await axios.post(
      `${URL}users/signup`,
      userInfo,
      {
        headers: {
          'ContentType': 'application/json',
        },
        withCredentials: true,
      }
      )
      const { email, username } = data;
      const userinfo = { email, username };
      const payload = {
        errCode: status,
        userinfo
      }
    dispatch({ type: SIGN_UP_SUCCESS, payload })  
  } catch(e) {
    const data = JSON.parse(JSON.stringify(e));
    const payload = {
      error: e,
      errCode: data.status
    }
    // dispatch({ type: SIGN_UP_ERROR, payload: { error: e, errCode: data.status } })
    dispatch({ type: SIGN_UP_ERROR, payload })
  }
  
}

export const signOut = () => async dispatch => {
  try {
    await AsyncStorage.removeItem('accessToken');
    dispatch({ type: SIGN_OUT })
  } catch(e) {
    console.log(e)
  }
}

export const signInAgain = token => async dispatch => {
  if(!token) {
    return;
  }
  try {
    const { data } = await axios.get(
      `${URL}users/me`,
      {
        headers: {
          authorization: `Bearer ${token}`
        },
        withCredentials: true
      }
      )
      if(data.message !== 'get your information complete!') {
        return;
      }
      
      const { username, email } = data.userinfo;
      const userinfo = { username, email }
      dispatch({ type: SIGN_IN_SUCCESS, userinfo })
  } catch(e) {
    dispatch({ type: SIGN_IN_ERROR })
  }
}

export const reqChangeInfo = userInfo => async dispatch => {
  const { email, userName, password } = userInfo;
  const user = {
    email,
    username: userName,
    password
  }
  try {
    const token = await AsyncStorage.getItem('accessToken');
    console.log(token)
    const result = await axios.patch(
      `${URL}mypage`,
      user,
      {
        headers: {
          'ContentType': 'application/json',
          authorization: `Bearer ${token}`,
        },
        withCredentials: true
      }
      );
    
    if(result.status === 200) {
      const { username, email } = result.data.data;
      const userinfo = {
      username, email
      }
      // console.log('Good!')
      dispatch({ type: SIGN_IN_SUCCESS, userinfo })
      return result.status;
    }
  } catch(e) {
    throw new Error(e)
  }
}


export default userReducer = (state = initialState, action) => {
  switch(action.type) {
    case SIGN_IN:
      // console.log(action.userInfo, 'another')
      return {
        ...state,
        signIn: {
          loading: true,
          user: null,
          error: null,
          errCode: null,
          isSign: false
        }
      }
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        signIn: {
          loading: false,
          user: action.userinfo,
          error: null,
          errCode: null,
          isSign: true
        }
      }
    case SIGN_IN_ERROR:
      return {
        ...state,
        signIn: {
          loading: false,
          user: null,
          error: action.payload.error,
          errCode: action.payload.errCode,
          isSign: false
        }
      }
    case SIGN_OUT:
      return {
        ...state,
        signIn: {
          loading: false,
          user: null,
          error: null,
          errCode: null,
          isSign: false,
        }
      }
    case SIGN_UP:
      return {
        ...state
      }
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        signIn: {
          loading: false,
          user: action.payload.userinfo,
          error: null,
          errCode: action.payload.errCode,
          isSign: false
        }
      }
    case SIGN_UP_ERROR:
      return {
        ...state,
        signIn: {
          loading: false,
          user: null,
          error: action.payload.error,
          errCode: action.payload.errCode,
          isSign: false
        }
      }
    default:
      return state;
  }
}