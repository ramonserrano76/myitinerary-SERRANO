import React from "react";
import { Link } from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
const Cards = ({ item }) => {
    return (
        <div className="col-md-6 col-lg-3 mb-4 mt-4" id={item._id}>
            <div className="card p-3 d-flex align-items-stretch">
                <a to={`/cities/${item._id}`} >
                    <img 
                        className="card-img-top h-75 shadow" style={{ height: '300px', maxHeight: '200px' }}
                    src={ item.imageUrl }
                    alt="" 
                    />                    
                </a>
                <div className="card-body">
                    <h5 className="card-title mb-0 text-uppercase">{item.title}</h5>
                    <p className="card-text text-decoration-none fs-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-map-pin">
                            <path d="M6.5 0C3.47 0 1 2.5 1 5.5c0 2.4 3.4 5.75 4.5 6.75 1.1-1 4.5-4.35 4.5-6.75 0-3-2.47-5.5-5.5-5.5zm0 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                        </svg>
                        {item.location}
                    </p>
                </div>
                <div className="card-footer d-flex justify-content-between">
                    {/* <small className="text-muted align-self-center fw-bold">Price: $${item.price}</small> */}
                    <div className="d-flex px-1 py-1 justify-content-end">
                        <Link  to={`/cities/${item._id}`} className="btn btn-sm btn-outline-secondary justify-content-end shadow">
                            Details
                        </Link>                        
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Cards;