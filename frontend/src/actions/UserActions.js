import * as Util from '../utils/util.js';
import { RECEIVE_USERS } from "./actionTypes";
import { DELETE_USER } from "./actionTypes";

//action creators that we can dispatch into our reducers
export const receiveUsers = users => {
  return { type: RECEIVE_USERS, users }
}

export const deleteUser = id => {
  return { type: DELETE_USER, id };
};

export const getUsers = () => dispatch => {
  return Util.getAllUsers().then(users => {
    return dispatch(receiveUsers(users.data.users))
  })
}

export const deleteUserBackend = (id) => dispatch => {
  Util.deleteUser(id).then(()=> {
    dispatch(deleteUser(id))
  })
}

export const addUserBackend = (body) => dispatch => {
  debugger;
  Util.addUser(body).then(() => {
    dispatch(getUsers())
  })
}
