import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router,
} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './redux/index';
import UserList from './components';
import { GlobalStyle } from './view/styled';

ReactDOM.render(
  <Router basename=''>
    <Provider store={store}>
      <GlobalStyle/>
      <UserList/>
    </Provider>
  </Router>,
  document.getElementById('root'),
);
