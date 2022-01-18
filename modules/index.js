import { combineReducers } from "redux";
import user from "./user";
import btnPage from "./btnPage";

export const rootReducer = combineReducers({
  user,
  btnPage
})