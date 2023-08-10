import React, { useState, useEffect } from 'react';
import './home.css';
import Carrousel from '../../components/carrousel/Carrousel.jsx';
import { Link } from 'react-router-dom';
import staticData from '../../components/carrousel/staticData.json';


const Home = () => {
    const [carouselData, setCarouselData] = useState([]);

    useEffect(() => {        
        setCarouselData(staticData);
    }, []);

    return (
        <div className="home-container">
            <div className="hero">
                <div className="hero-image-container">
                    <h1>MyTinerary</h1>
                    <p>Find your perfect trip, designed by insiders who know and love their cities!</p>
                    <Link to="/cities" className="btn btn-secondary">Explore Cities</Link>
                </div>
                <Carrousel data={carouselData} />
            </div>
        </div>
    );
};

export default Home;