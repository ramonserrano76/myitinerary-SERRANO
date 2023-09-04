import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store'; // Import tu store Redux

import App from './App.jsx';
import './index.css'; // Import global styles file
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
