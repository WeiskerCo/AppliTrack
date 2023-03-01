import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';

// import fs from 'fs';
// import path from 'path';

// require('dotenv').config({
//   path: path.resolve(__dirname, './.env')
// });

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <GoogleOAuthProvider clientId='29448142204-hghum62l1h5mi4b0g3rouepdlr4por8q.apps.googleusercontent.com'>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </GoogleOAuthProvider>
)