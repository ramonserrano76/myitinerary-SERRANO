import React, { useState, useEffect } from 'react';
import './home.css';
import Carrousel from '../../components/carrousel/Carrousel.jsx';
import { Link } from 'react-router-dom';
import cities from '../../../data/cities.json';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles

const Home = () => {
    const [carouselData, setCarouselData] = useState([]);

    useEffect(() => {
        setCarouselData(cities);
    }, []);

    return (
        <div className="home-container">
            <div className="hero">
                <div className="hero-image-container justify-content-center align-items-center d-flex flex-column">
                    <h1>MyTinerary</h1>
                    <p>Find your perfect trip, designed by insiders who know and love their cities!</p>
                    <Link to="/cities" className="btn btn-secondary mb-3">Explore Cities</Link>
                </div>
            </div>
            <div className='home-carousel'>
                <Carrousel data={carouselData} />
            </div>
        </div>
    );
};

export default Home;