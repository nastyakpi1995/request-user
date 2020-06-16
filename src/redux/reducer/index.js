import { combineReducers } from 'redux';
import getUser from './userRedusers';
import cardReducer from './card';

export default combineReducers({
  getUser,
  cardReducer
});
