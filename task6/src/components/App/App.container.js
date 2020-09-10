import React from 'react';
import App from './App.component';
import { BrowserRouter as WebRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';
import theme from '../../theme';

const AppContainer = () => (
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <WebRouter>
      <App />
    </WebRouter>
  </ThemeProvider>
);

export default AppContainer;
