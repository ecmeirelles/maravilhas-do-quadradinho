import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { AppWrapperSt } from './App.css';
import { getRoutes } from './routes';
import { NavBar } from './shared/NavBar/NavBar';

export const App = () => {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <AppWrapperSt>{getRoutes()}</AppWrapperSt>
      </div>
    </BrowserRouter>
  );
};
