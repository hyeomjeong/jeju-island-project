
import React from 'react';
import ReactDOM from 'react-dom';

// import { CookiesProvider } from 'react-cookie';

import axios from 'axios';

import App from './App';

axios.defaults.baseURL = process.env.REACT_APP_BACK_END_URL;
axios.defaults.withCredentials = true;

ReactDOM.render(
  //<CookiesProvider>
      <App />,
  //</CookiesProvider>,
  document.getElementById('root')
);
