// Layoutmain.jsx
import React from 'react';
import NavbarMain from '../../components/navbarmain/NavbarMain.jsx';
import Footer from '../../components/footer/Footer.jsx';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles
import '../Layoutmain/layoutmain.css';
import { Outlet } from "react-router-dom";


const LayoutMain = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <NavbarMain />
            <main className="flex-grow-1 mt-auto">
                <Outlet />
            </main>
            <Footer className="fixed-bottom flex-grow-1 mt-auto style={{position: absolute; bottom: 0;}}" />
        </div>
    );
};

export default LayoutMain;