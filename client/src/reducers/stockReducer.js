import {
  GET_ALL_STOCKS,
  GET_ALL_STOCKS_ERROR,
  GET_USER_STOCKS,
  GET_USER_STOCKS_ERROR,
  ADD_STOCKS_ERROR,
  UPDATE_STOCK_BY_ID_ERROR,
  DELETE_STOCK_BY_ID_ERROR,
} from '../actions/types';



const INITIAL_STATE = {
  allStocks: [],
  userStocks: [],
  addStockError: '',
  getAllStockError: '',
  getUserStocksServerError: '',
  getUserStockClientError: '',
  updateStockError: '',
  deleteStockByIdError: '',
};


export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_ALL_STOCKS:
      return {...state, allStocks: action.payload, getAllStockError: '' };
    case GET_ALL_STOCKS_ERROR:
      return {...state, getAllStockError: action.payload };
    case GET_USER_STOCKS:
      return {
        ...state,
        userStocks: action.payload,
        getUserStockClientError: '',
        getUserStocksServerError: '',
        addStockError: '',
        updateStockError: '',
        deleteStockByIdError: '',
      };
    case GET_USER_STOCKS_ERROR:
      return {...state, getUserStocksServerError: action.serverError, getUserStockClientError: action.userError };
    case ADD_STOCKS_ERROR:
      return {...state, addStockError: action.payload };
    case UPDATE_STOCK_BY_ID_ERROR:
      return {...state, updateStockError: action.payload };
    case DELETE_STOCK_BY_ID_ERROR:
      return {...state, deleteStockByIdError: action.payload };
    default:
      return state;
  }
}


