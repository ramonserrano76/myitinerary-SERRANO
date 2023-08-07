import React from 'react';
import '../navbarmain/navbarmain.css';
import { Navbar, Nav, Button, Form, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavbarMain = () => {
    return (
        <Navbar expand="lg" variant="dark" className="bg-transparent">
            <Container fluid>
                {/* Logo or App name */}
                <Navbar.Brand as={Link} to="/home">MyTinerary</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    {/* <Form className="d-flex my-2">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-light">Search</Button>
                    </Form> */}
                    {/* Opciones de navegación */}
                    <Nav className="ms-auto my-1 my-lg-0 justify-content-center">
                        <Nav.Link as={Link} to="/home" className="text-white">Home</Nav.Link>
                        <Nav.Link as={Link} to="/cities" className="text-white">Cities</Nav.Link>
                        <Nav.Link href="#login" className="btn btn-primary text-white">Login{' '}
                            <div className="user-image d-inline">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm0 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 7.5c1.77 0 3.267.978 4.088 2.416-.025 1.135-2.152 1.834-4.088 1.834s-4.063-.699-4.088-1.834C4.733 11.478 6.23 10.5 8 10.5zM8 2c-.697 0-1.359.116-1.98.324a5.984 5.984 0 0 1 3.96 0C9.36 2.116 8.698 2 8 2z" />
                                </svg>
                            </div>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};


function NavScrollExample() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">Link</Nav.Link>
                        <NavDropdown title="Link" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#" disabled>
                            Link
                        </Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarMain; NavScrollExample;
