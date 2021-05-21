import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
 import stocksReducer from './stockReducer';
import authReducer from './authReducer';
 import { ADD_STOCK } from '../actions/types';
 import profileReducer from './profileReducer';
import filteredReducer from './filteredReducer';
 
  
 
 
//  import resultReducer from './resultReducer'
 
 
export default combineReducers({
  // result: resultReducer,
  auth: authReducer,
  stocks: stocksReducer,
  currentUser: profileReducer,
  filteredUsers: filteredReducer,
   form: formReducer
  .plugin({
    'addTodo': (state, action) => {
      switch(action.type) {
        case ADD_STOCK:
          return undefined;
        default:
          return state;
      }
    }
  })
});
