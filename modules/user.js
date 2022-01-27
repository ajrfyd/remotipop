import axios from "axios";
// Action type

const SIGN_IN = 'user/SIGN_IN';
const SIGN_IN_SUCCESS = 'user/SIGN_IN_SUCCESS';
const SIGN_IN_ERROR = 'user/SIGN_IN_ERROR';

const SIGN_OUT = 'user/SIGN_OUT';

const initialState = {
  signIn: {
    loading: false,
    user: null,
    error: null,
    isSignIn: false,
  }
}

export const signIn = userInfo => async dispatch => {
  dispatch({ type: SIGN_IN })

  try {
    const { data } = await axios.post(
      'http://ec2-13-209-98-187.ap-northeast-2.compute.amazonaws.com:8080/users/signin',
      userInfo,
      {
        header: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      }
      )
      const userinfo = data.userinfo
      console.log(userinfo, '--------------')
    dispatch({ type: SIGN_IN_SUCCESS, userinfo })
  } catch(e) {
    dispatch({ type: SIGN_IN_ERROR, error: e })
  }
};

export const signOut = () => dispatch => {
  try {
    dispatch({ type: SIGN_OUT })
  } catch(e) {
    console.log(e)
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
          isSignIn: false
        }
      }
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        signIn: {
          loading: false,
          user: action.userinfo,
          error: null,
          isSignIn: true,
        }
      }
    case SIGN_IN_ERROR:
      return {
        ...state,
        signIn: {
          loading: false,
          user: null,
          error: action.error,
          isSignIn: false
        }
      }
    case SIGN_OUT:
      return {
        ...state,
        signIn: {
          loading: false,
          user: null,
          error: null,
          isSignIn: false
        }
      }
    default:
      return state;
  }
}