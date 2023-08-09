import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Cities from './pages/Cities/Cities.jsx';
import Layout from './layouts/Layoutmain/Layoutmain.jsx';

const App = () => {
    return (
        <div className='app-container bg-dark'>
            <Router>
                <Layout>
                    <Routes>
                        {/* Route for Home page */}
                        <Route path="/home" element={<Home />} />
                        {/* Main Route for redirect '/' to '/home' */}
                        <Route path="/" element={<Navigate to="/home" />} />
                        {/* Route for Cities component */}
                        <Route path="/cities" element={<Cities />} />
                        {/* ...other routes to include here */}
                    </Routes>
                </Layout>
            </Router>
        </div>
    );
};

export default App;
