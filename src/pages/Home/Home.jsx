// src/pages/Home.jsx
import React from 'react';
import './home.css';
import Carrousel from '../../components/carrousel/Carrousel.jsx';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home-container">
            <div className="hero">
                <div className="hero-image-container">
                    <h1>MyTinerary</h1>
                    <p>Find your perfect trip, designed by insiders who know and love their cities!</p>
                    <Link to="/cities" className="btn btn-secondary">Explore Cities</Link>
                </div>
            </div>
            {/* <Carrousel /> */}
        </div>
    );
};

export default Home;
