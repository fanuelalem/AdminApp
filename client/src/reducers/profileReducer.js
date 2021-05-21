import {
  GET_USER_DATA,
  GET_USER_DATA_ERROR,
} from '../actions/types';

const INITIAL_STATE = {
  getUserData: {},
  getServerError: '',
  getClientError: '',
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_USER_DATA:
      return { ...state, getUserData: action.payload, getCleintError: '', getServerError: '' };
    case GET_USER_DATA_ERROR:
      return { ...state, getCleintError: action.cleintError, getServerError: action.serverError };
    default:
      return state;
  }
};
