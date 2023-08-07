import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NavbarMain from './components/navbarmain/NavbarMain.jsx';
import Carrousel from './components/carrousel/Carrousel.jsx';
import Footer from './components/footer/Footer.jsx';
import Home from './pages/Home/Home.jsx';
import Cities from './pages/Cities/Cities.jsx';
const App = () => {
  return (
    <div className='app-container bg-dark'>
      <Router>
        <NavbarMain />
        <Routes>
          {/* Route for Home page */}
          <Route path="/home" element={<Home />} />
          {/* main Route for redirect '/' to '/home' */}
          <Route path="/" element={<Navigate to="/home" />} />
          {/* Route for Cities component */}
          <Route path="/cities" element={<Cities />} />
          {/* ...other routes to include here */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
