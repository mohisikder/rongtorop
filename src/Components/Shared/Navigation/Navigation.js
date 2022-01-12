import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Navigation = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" style={{background:'#581845'}} variant="dark">
                <Container>
                    <Navbar.Brand href="/"> <img src='https://rongtorop.com/assets/images/brand/logo11.png'/> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto ms=5">
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="/about">About Us</Nav.Link>
                            <Nav.Link href="/price">Price</Nav.Link>
                            <Nav.Link href="/fqa">FQA</Nav.Link>
                            <Nav.Link href="/courier">Courier Service</Nav.Link>
                            <NavDropdown title="Service" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Service One</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another Service</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Contact Us" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Service One</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another Service</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;