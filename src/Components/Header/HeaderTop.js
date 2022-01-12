import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const HeaderTop = () => {
    return (
        <>
            <div style={{backgroundColor:"#F1F2F3"}}>
                <Container>
                    <Navbar>
                        <Nav defaultActiveKey="/home" as="ul">
                            <Nav.Item as="li">
                                <Nav.Link href="https://www.facebook.com/rongtorop/" target="_blank"><i class="fab fa-facebook-f"></i></Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link href="https://twitter.com/rongtorop?s=08" target="_blank"><i class="fab fa-twitter"></i></Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link href="https://www.linkedin.com/in/rong-torop-156619219" target="_blank"><i class="fab fa-linkedin"></i></Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link href="https://www.instagram.com/rongtorop/" target="_blank"><i class="fab fa-instagram"></i></Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Nav className="ms-auto">
                            <Nav.Link href="#features"><i class="fas fa-user-alt"></i> Register</Nav.Link>
                            <Nav.Link href="#pricing"><i class="fas fa-sign-in-alt"></i> Login</Nav.Link>
                        </Nav>
                    </Navbar>
                </Container>
            </div>
        </>
    );
};

export default HeaderTop;