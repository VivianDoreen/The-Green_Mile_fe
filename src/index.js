import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../src/containers/App';
import './styles/index.scss';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();
ReactDom.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('app')
);
