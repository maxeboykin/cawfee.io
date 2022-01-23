import Axios from 'axios';

//action types
const SET_USERS = 'SET_USERS';
const CREATE_USER = 'CREATE_USER';
const REMOVE_USER = 'REMOVE_USER';
const UPDATE_USER = 'UPDATE_USER';

//action creators

export const setUsers = (users) => ({
  type: SET_USERS,
  users
});

export const _createUser = (user) => ({
  type: CREATE_USER,
  user
})

export const _removeUser = (user) => ({
  type: REMOVE_USER,
  user
})

export const _updateUser = (user) => ({
  type: UPDATE_USER,
  user
})

//async creators

