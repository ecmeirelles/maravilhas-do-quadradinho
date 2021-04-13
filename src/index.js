import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';

import { reportWebVitals } from './reportWebVitals';
import { rootReducer } from './app/reducer';
import { getRoutes } from './app/routes';
import { NavBar } from './app/shared/NavBar/NavBar';
import { GlobalStyle } from './index.css';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <NavBar />
    <div style={{ marginTop: 64, padding: 24, width: '100%', height: '100%' }}>
      <BrowserRouter>{getRoutes()}</BrowserRouter>
    </div>
  </Provider>,
  document.querySelector('#root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
