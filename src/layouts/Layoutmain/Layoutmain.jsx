// Layoutmain.jsx
import React from 'react';
import NavbarMain from '../../components/navbarmain/NavbarMain.jsx';
import Footer from '../../components/footer/Footer.jsx';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles
import '../Layoutmain/layoutmain.css';
import { Outlet } from "react-router-dom";


const LayoutMain = () => {
    return (
        <div className="d-flex flex-column min-vh-100">
            <NavbarMain />
            <main className="flex-grow-1">
                <Outlet />
            </main>
            <footer>
                <Footer className="footer" style={{ position: 'absolute', bottom: 0 }} />
            </footer>
        </div>
    );
};

export default LayoutMain;