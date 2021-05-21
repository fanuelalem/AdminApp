import {
  GET_USER_DATA,
  GET_USER_DATA_ERROR,
  GET_OTHER_USERS,
  GET_OTHER_USERS_ERROR,
  GET_USER_STOCKS,
  GET_USER_STOCKS_ERROR,
} from '../types';


import axios from 'axios';

export const getUserData = () => async (dispatch) => {

   try {
    const { data } = await axios.get('/api/user/profile', {
      headers: { authorization: localStorage.getItem('token') },
    });
      dispatch({ type: GET_USER_DATA, payload: data });
  } catch (e) {
    dispatch({
      type: GET_USER_DATA_ERROR,
      serverError: e,
      clientError: 'Something went wrong please refresh try again',
    });
  }
}

export const getOtherUsers = () => async (dispatch) => {
 
  try {
    const { data } = await axios.get('/api/user/profiles', {
      headers: { authorization: localStorage.getItem('token') },
    });
    dispatch({ type: GET_OTHER_USERS, payload: data });
  } catch (e) {
    dispatch({ type: GET_OTHER_USERS_ERROR, payload: e });
  }
};



// export const getUserStocks = () => async (dispatch) => {
//   try {
//     console.log('im hitting.stocks')

//     const { data } = await axios.get('http://localhost:3000/api/user/userStocks', {
//       headers: { authorization: localStorage.getItem('token') },
//     });
//     dispatch({ type: GET_USER_STOCKS, payload: data });
//   } catch (e) {
//     dispatch({ type: GET_USER_STOCKS_ERROR, payload: e });
//   }
// };
