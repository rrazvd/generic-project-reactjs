import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import './assets/css/default.css';
import 'typeface-roboto';
import { Theme } from './constants/styles';
// eslint-disable-next-line import/order
import { MuiThemeProvider } from '@material-ui/core';

ReactDOM.render(
  <MuiThemeProvider theme={Theme}>
    <Routes />
  </MuiThemeProvider>,
  document.getElementById('root')
);
