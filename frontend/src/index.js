import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material';
import { theme } from './Theme/theme';
import { BrowserRouter } from 'react-router-dom';
import Contextprovider from './Components/Context/Contextprovider';
// import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Contextprovider>
      {/* <Provider store={store} > */}
        <BrowserRouter>
          <App />
        </BrowserRouter>
      {/* </Provider> */}
      </Contextprovider>
    </ThemeProvider>
  </React.StrictMode>
);
