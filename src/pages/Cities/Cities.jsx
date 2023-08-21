import React from 'react';
import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Form } from 'react-bootstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles
import './cities.css';
import Cards from '../../../src/components/cards/Cards.jsx';
import { read } from "../../services/cityService.js";

const Cities = () => {
    const [data, setData] = useState([]);
    // Crea las referencias para los inputs de búsqueda
    const inputRef = useRef(null);
    
    useEffect(() => {
        read().then(setData);
    }, []);
    const handleInput = () => {
        const query = inputRef.current.value;

        read(`?title=${query}&location=${query}&briefDescription=${query}`)
            .then(setData);
    };

    return (
        <div className="cities-container">
            <div className="hero2">
                <div className="hero2-image-container">
                    <h1>Welcome to the Cities page!</h1>
                    <p>Explore the cities and find your perfect trip.</p>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <div className="mb-3">
                                <label className="form-label">Find your City</label>                                
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search by title, location, or brief description"
                                    onInput={handleInput}
                                    ref={inputRef}
                                />                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex row mt-5" style={{ marginTop: '100px' }}>
                {data.map((item) => (
                    <Cards key={item._id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default Cities;