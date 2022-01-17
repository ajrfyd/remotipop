

// Action type

const SIGN_IN = 'user/SIGN_IN';
const SIGN_IN_SUCCESS = 'user/SIGN_IN_SUCCESS';
const SIGN_IN_ERROR = 'user/SIGN_IN_ERROR';

const initialState = {
  signIn: {
    loading: false,
    user: null,
    error: null,
    isSignIn: false,
  }
}

export const signIn = (userInfo) => ({
  type: SIGN_IN,
  userInfo
});


export default userReducer = (state = initialState, action) => {
  switch(action.type) {
    case SIGN_IN:
      return {

      }
    case SIGN_IN_SUCCESS:
      return {

      }
    case SIGN_IN_ERROR:
      return {

      }
    default:
      return state;
  }
}