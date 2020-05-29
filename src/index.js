import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './redux/index';
import UserList from './components/index';
import {GlobalStyle} from './view/styled/index';

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <GlobalStyle/>
      <UserList/>
    </Provider>
  </Router>,
  document.getElementById('root'),
);
