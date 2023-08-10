// Layoutmain.jsx
import React from 'react';
import NavbarMain from '../../components/navbarmain/NavbarMain.jsx';
import Footer from '../../components/footer/Footer.jsx';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles
import '../Layoutmain/layoutmain.css';
const Layout = ({ children }) => {
    return (
        <div className='my-layout-container'>
            <NavbarMain />
            <main className="flex-grow-1 wrapper">{children}</main>
            <Footer />
        </div>
    );
};
export default Layout;