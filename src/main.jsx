import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';

import '@/index.css';
import App from '@/App';

ReactDOM.render(
  <React.StrictMode>
    <Helmet
      defaultTitle='Kanghyeon Zahner'
      titleTemplate='%s | Kanghyeon Zahner'
    >
      <meta charSet='utf-8' />
      <html lang='en' amp />
    </Helmet>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
