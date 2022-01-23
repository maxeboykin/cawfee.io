import Axios from 'axios';

//action types

const SET_USER = 'SET_USER';

//action Creators
export const _setUser = (user) => ({
  type: SET_USER,
  user
});

export const fetchUser = (userId) => {
  return async (dispatch) => {
    const token = window.localStorage.getItem('token');
    const {data: user} = await Axios.get(`/api/users/${userId}`, {
      headers: {
        authorization: token
      }
    });
    dispatch(_setUser(user));
  }
}

//reducer
export default function(state = {}, action) {
  switch(action.type) {
    case SET_USER:
      return action.user;
    default:
      return state;
  }
}
