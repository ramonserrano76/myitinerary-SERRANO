import React from 'react';
import '../navbarmain/navbarmain.css';
import '../footer/footer.css'
const Footer = () => {
    return (
        <footer className='bg-secondary text-center'>
            <div>
                <p>Todos los derechos reservados &copy; {new Date().getFullYear()}</p>
            </div>
        </footer>
    );
};

export default Footer;