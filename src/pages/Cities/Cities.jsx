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
    const inputBusqueda = useRef(null);
    const inputBusqueda2 = useRef(null);
    useEffect(() => {
        read().then(setData);
    }, []);

    const handleInput = () => {
        const title = inputBusqueda.current.value;
        const location = inputBusqueda2.current.value;
        let query = `?title=${title}&location=${location}`;
        read(query).then(setData);
    };

    return (
        <div className="cities-container">
            <div className="hero2">
                <div className="hero2-image-container">
                    {/* <h1>Welcome to the Cities page!</h1> */}
                    {/* <p>Explore the cities and find your perfect trip.</p> */}
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <div className="mb-3">
                                <label className="form-label" style={{ marginTop: '9rem', marginBottom: '5px' }}>Explore the cities and find your perfect trip.</label>
                                <input
                                    type="text"
                                    className="form-control min-w-0"
                                    placeholder="Search by Country"
                                    onInput={handleInput}
                                    ref={inputBusqueda}
                                />
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search by City"
                                    onInput={handleInput}
                                    ref={inputBusqueda2}
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