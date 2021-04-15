import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { reportWebVitals } from './reportWebVitals';
import { rootReducer } from './app/reducer';
import { App } from './app/App';
import { GlobalState } from './app/shared/GlobalState/GlobalState';
import { GlobalStyle } from './index.css';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
    <GlobalState />
    <GlobalStyle />
  </Provider>,
  document.querySelector('#root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
