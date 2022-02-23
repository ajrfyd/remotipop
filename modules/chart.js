import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const REQ_CHART_DATA = 'chart/REQ_CHART_DATA';
const REQ_CHART_DATA_SUCCESS = 'chart/REQ_CHART_DATA_SUCCESS';
const REQ_CHART_DATA_ERROR = 'chart/REQ_CHART_DATA_ERROR';

const URL = 'http://10.0.2.2:3001/'


const initialState = {
  loading: false,
  data: null,
  error: null
}


export const getChartData = () => async dispatch => {
  const token = await AsyncStorage.getItem('accessToken');
  if(!token) return;

  dispatch({ type: REQ_CHART_DATA });

  try {
    const { data } = await axios.get(`${URL}stats`, {
      headers: {
        ContentType: 'application/json',
        authorization: `Bearer ${token}`
      },
      withCredentials: true
    })
    // console.log(data, '34233663324324532460329085734980573249085732490')
    const { emotion, month } = data;
    const payload = {
      emotion, month
    }

    // console.log(payload, 'paapapayppaypaypapypapypaypapyappaypap')

    dispatch({ type: REQ_CHART_DATA_SUCCESS, payload: data.emotion })
  } catch(e) {
    dispatch({ type: REQ_CHART_DATA_ERROR, payload: e })
  }

}

export default function chartReducer(state = initialState, action) {
  switch(action.type) {
    case REQ_CHART_DATA:
      return {
        ...state, 

      }
    case REQ_CHART_DATA_SUCCESS:
      console.log(action.payload, '1298089510518975102895125-521-35-12-5-1235-213-51-25-')
      return {
        ...state,
        data: action.payload
      }
    case REQ_CHART_DATA_ERROR:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
}