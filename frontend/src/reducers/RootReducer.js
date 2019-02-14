import { combineReducers } from 'redux';
import UsersReducer from './UsersReducer.js';

const RootReducer = combineReducers({
  users: UsersReducer
})

export default RootReducer;
