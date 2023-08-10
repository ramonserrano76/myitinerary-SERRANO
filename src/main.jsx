import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'; // Import global styles file
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
