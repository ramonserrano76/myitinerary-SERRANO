import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store'; // Import tu store Redux
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import App from './App.jsx';
import './index.css'; // Import global styles file
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
ReactDOM.createRoot(document.getElementById('root')).render(

  <Provider store={store}>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_ID} >
      <App />
      <ToastContainer
        position="top-left"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        theme="dark"
      />
    </GoogleOAuthProvider>
  </Provider>

);
