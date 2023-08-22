import React, { useState, useEffect } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link, useParams } from 'react-router-dom';
import './CityDetail.css'; // Asegúrate de importar tu archivo CSS para CityDetail
import read from '../../services/cityService';

const CityDetail = () => {
    const { id } = useParams();
    const [cityData, setCityData] = useState({});

    useEffect(() => {
        read(`?_id=${id}`).then((data) => {
            const city = data.find((city) => city._id === id);
            if (city) {
                setCityData(city);
            }
        });
    }, [id]);

    return (
        <div className="city-detail-container h-100 flex-grow-1 justify-content-center align-items-center">
            <Link to="/cities" className="back-button">Back</Link>
            <div className="watermark-overlay">
                <p className="watermark-text acerca_img"><div className="under-construction">
                    <img src="https://cdn.pixabay.com/photo/2017/10/26/17/51/under-construction-2891888_1280.jpg" alt="Under Construction" />
                    <p>COME BACK LATER</p>
                </div></p>
            </div>
            <img src={cityData.imageUrl} alt={cityData.title} />
            <h2>{cityData.title}</h2>
            <p>Location: {cityData.location}</p>
            <p>{cityData.briefDescription}</p>            
        </div>
    );
};

export default CityDetail;
