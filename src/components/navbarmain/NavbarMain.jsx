// Importa los módulos necesarios
import React from 'react';
import '../navbarmain/navbarmain.css';
import { Navbar, Nav } from 'react-bootstrap';
// Define el componente NavbarMain

const NavbarMain = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Logo</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#feature">Feature1</Nav.Link>
                <Nav.Link href="#feature2">Feature2</Nav.Link>
                <Nav.Link href="#feature3">Feature3</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
            </Nav>
        </Navbar>
    );
};

export default NavbarMain;
