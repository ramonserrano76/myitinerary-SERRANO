import React from 'react';
import '../navbarmain/navbarmain.css';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/userSlice.js";

const NavbarMain = () => {
    const user = useSelector((store) => store.user.user);
    const dispatch = useDispatch();
    return (
        <Navbar expand="lg" variant="dark" className="bg-transparent">
            <Container fluid>
                {/* Logo or App name */}
                <Navbar.Brand as={Link} to="/home"><img alt="Logo"
                    className="img-fluid" src="../vite.png" width={160} srcSet="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav justify-content-end" >
                    <Nav className="ms-auto my-1 my-lg-0">
                        {/* Agrega la clase "me-lg-2" para empujar los elementos a la derecha */}
                        <Nav.Link as={Link} to="/home" className="btn btn-outline-primary me-lg-2">Home{' '}<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z" />
                            <polyline points="9 22 9 12 15 12 15 22" />
                        </svg></Nav.Link>
                        {/* Agrega la clase "me-lg-2" aquí también */}
                        <Nav.Link as={Link} to="/cities" className="btn btn-outline-primary me-lg-2">Cities{' '}<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-map-pin">
                            <path d="M12 0c-5.25 0-9.5 4.25-9.5 9.5 0 6 8.5 13.5 9.5 14.5 1-1 9.5-8.5 9.5-14.5 0-5.25-4.25-9.5-9.5-9.5zm0 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                        </svg></Nav.Link>
                        {user ? (
                            <button className="btn btn-primary" onClick={() => dispatch(logout())}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-box-arrow-left" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z" />
                                    <path fillRule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z" />
                                </svg>{" "}Sign Out{"  "}{
                                    user?.image && <img src={user.image} alt="Profile_Image" className="rounded-circle" style={{ width: '36px', height: '36px' }} />
                                    }
                            </button>
                                
                        ) : (
                            <>
                                {/* Agrega la clase "me-lg-2" aquí también */}
                                <Nav.Link as={Link} to="/signup" className="btn btn-outline-primary me-lg-2">Sign Up{' '}<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm0 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 7.5c1.77 0 3.267.978 4.088 2.416-.025 1.135-2.152 1.834-4.088 1.834s-4.063-.699-4.088-1.834C4.733 11.478 6.23 10.5 8 10.5zM8 2c-.697 0-1.359.116-1.98.324a5.984 5.984 0 0 1 3.96 0C9.36 2.116 8.698 2 8 2z" />
                                </svg>
                                </Nav.Link>
                                {/* Agrega la clase "me-lg-2" aquí también */}
                                <Nav.Link as={Link} to="/signin" className="btn btn-outline-primary me-lg-2">Sign In{' '}<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z" />
                                    <path fillRule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                                </svg>
                                </Nav.Link>

                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarMain;
