import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route,HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';
import App from './containers/App/index';
 // import socketMiddleware from './reduxMiddlewares';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// 1st param is our reducers
// 2nd param is any preloaded state we want
// 3rd param is any middlwares we want applied to redux
const store = createStore(
  reducers,
  { auth: { authenticated: localStorage.getItem('token')}},
  composeEnhancers(applyMiddleware(reduxThunk))
  // socketMiddleware(),
);
ReactDOM.render(
  <Provider store={store}>
      <Router >
      <HashRouter>

      <App />
      </HashRouter>

    </Router>
 
  </Provider>
  ,
  document.getElementById('root')); 