import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'; // Import file global styles
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap
ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
