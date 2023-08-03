import React from 'react';
import '../navbarmain/navbarmain.css';
const Footer = () => {
    return (
        <footer>
            <div>
                <p>Todos los derechos reservados &copy; {new Date().getFullYear()}</p>
            </div>
        </footer>
    );
};

export default Footer;