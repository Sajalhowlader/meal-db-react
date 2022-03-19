import React from 'react';
import { Container, Nav, Navbar, } from 'react-bootstrap';
import './Menubar.css'

const Menubar = () => {
    return (
        <div>
            <Navbar className='top-nav' expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <h1 className='text-white'>MEAL DB</h1>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <div className='items-style d-flex '>
                                <Nav.Link href="#home">HOME</Nav.Link>
                                <Nav.Link href="#link">ABOUT</Nav.Link>
                                <Nav.Link href="#home">PRODUCTS</Nav.Link>
                                <Nav.Link href="#link">CART</Nav.Link>
                                <Nav.Link href="#link">CONTACTS</Nav.Link>
                            </div>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Menubar;