import { combineReducers } from 'redux';
import { buttonOneClickReducer } from './container-buttons';


export const rootReducer = combineReducers({
  // здесь будут reducers
  button_one: buttonOneClickReducer
});