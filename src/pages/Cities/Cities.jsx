import React from 'react';
import Carrousel from '../../components/carrousel/Carrousel.jsx'; // Importa el componente Carrousel
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import './cities.css'
const Cities = () => {
    return (
        <>
            <div className="cities-container">
                {/* AQUI cualquier contenido de la página de ciudades */}
                <div className="hero2">
                    <div className="hero2-image-container">
                        <h1>Welcome to the Cities page!</h1>
                        <p>Explore the cities and find your perfect trip.</p>
                        {/* <Link to="/home" className="btn btn-secondary">Home</Link> */}
                        <div className='align-items-center text-center'>
                            <div className="row justify-content-center">
                                <div className="col-md-4">
                                    <Form className="d-flex my-2">
                                        <Form.Control
                                            type="search"
                                            placeholder="Search youy city"
                                            className="me-2"
                                            aria-label="Search"
                                        />
                                        <Button variant="outline-light">Search</Button>
                                    </Form>
                                </div>
                            </div>
                        </div>
                        <div className='position-relative'></div>
                    </div>
                    
                </div>
                <Carrousel />
                {/* Renderize any component here */}
                {/* <Carrousel /> */}
            </div>
        </>
    );
};

export default Cities;