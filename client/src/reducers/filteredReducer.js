import {
    GET_OTHER_USERS,
    GET_OTHER_USERS_ERROR,
  } from '../actions/types';
  
  const INITIAL_STATE = {
    getOtherUsers: [],
    getOtherUsersError: '',
  };
  
  export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
      case GET_OTHER_USERS:
        return { ...state, getOtherUsers: action.payload, getOtherUsersError: '' };
      case GET_OTHER_USERS_ERROR:
        return { ...state, getOtherUsersError: action.payload };
      default:
        return state;
    }
  };
  