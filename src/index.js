import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
import { createStore, applyMiddleware, compose,combineReducers } from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { BrowserRouter} from "react-router-dom";
import userProfileReducer from './reducers/UserProfileReducer'
import adminReducer from './reducers/AdminReducer'
import postReducer from './reducers/PostReducer'
import CommentReducer from './reducers/CommentReducer'
import projectReducer from './reducers/projectReducer'
import errorReducer from './reducers/errorReducer'
import AerrorReducer from './reducers/AerrorReducer'
let allReducers= combineReducers({'adminReducer':adminReducer,'postReducer':postReducer,'CommentReducer':CommentReducer,'userProfileReducer':userProfileReducer,'projectReducer':projectReducer,'errorReducer':errorReducer,
'AerrorReducer':AerrorReducer})


let store = createStore(allReducers, 
  compose(applyMiddleware(ReduxThunk)
  ) );



store.subscribe(()=>console.log('Current State: ', store.getState()));


ReactDOM.render(
  <React.StrictMode>

     <Provider store={store}>
     <BrowserRouter>
    <App store={store}/>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
  ,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
