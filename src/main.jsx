import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store'; // Import tu store Redux
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import App from './App.jsx';
import './index.css'; // Import global styles file
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <GoogleOAuthProvider clientId='112469197931-4vvujvvjl60djrev79am3r462mthgvs1.apps.googleusercontent.com'>
        <App />
      </GoogleOAuthProvider>
    </Provider>
  </React.StrictMode >
);
