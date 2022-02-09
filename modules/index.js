import { combineReducers } from 'redux';
import user from './user';
import beans from './beans'
import btnPage from './btnPage';

export const rootReducer = combineReducers({
  user,
  // btnPage,
  beans
})