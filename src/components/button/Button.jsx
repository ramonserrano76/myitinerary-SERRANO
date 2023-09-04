import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const Button = ({ variant, text }) => {
    return (
        <div className="button-container">
            <Link to="/cities" className={`button-instance ${variant}`}>
                {text}
            </Link>
        </div>
    );
};

export default Button;
