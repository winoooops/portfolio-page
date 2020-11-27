import { AppBar } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { DataProvider } from './hooks/DataProvider'



ReactDOM.render(
  <DataProvider>
    <App />
  </DataProvider>,

  document.getElementById('root')
);
