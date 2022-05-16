import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {ThemeProvider} from "styled-components"
import { theme } from './themes';
import GlobalStyles from './GlobalStyles';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode >
    {/* <ThemeProvider theme={theme}> */}
    <App />
    {/* <GlobalStyles/> */}
    {/* </ThemeProvider> */}
  </React.StrictMode>
);


