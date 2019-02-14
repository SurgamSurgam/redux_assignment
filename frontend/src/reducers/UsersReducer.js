import { RECEIVE_USERS } from "../actions/actionTypes";
import { DELETE_USER } from "../actions/actionTypes";
import merge from 'lodash/merge';


const normalizeData = arr => {
  let obj = {};
  arr.forEach(item => {
    obj[item.id] = item;
  });
  return obj
}

const UsersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_USERS:
      return normalizeData(action.users)
    case DELETE_USER:
      let newState = merge({}, oldState);
      delete newState[action.id]
      return newState
    default:
      return oldState

  }
}

export default UsersReducer;
