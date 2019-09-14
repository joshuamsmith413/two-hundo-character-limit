import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";
// import { createStore, combineReducers } from 'redux';
// import { Provider } from 'react-redux';
// import reducers from './reducers/reducers'
// import reactDeviseReducers from 'react-devise/lib/reducers';
// import { initReactDevise } from 'react-devise';


// const getConfig = initReactDevise();
// const store = createStore(
//   combineReducers({
//     ...reducers,
//     ...reactDeviseReducers
//   }), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

ReactDOM.render(
  <BrowserRouter>

      <App />
  </BrowserRouter>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
