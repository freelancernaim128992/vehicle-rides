import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div className="container">
            <Navbar variant="light">
                <Navbar.Brand style={{fontWeight: 'bold'}} href="#home">Vehicle Rides</Navbar.Brand>
                <Nav className="w-100 d-flex justify-content-end">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/destination">Destination</Nav.Link>
                    <Nav.Link href="#pricing">Blog</Nav.Link>
                    <Nav.Link href="#pricing">Contact</Nav.Link>
                    <Nav.Link href="#pricing">
                        <button className="bg-primary text-white rounded">LogIn</button>
                    </Nav.Link>
                </Nav>
            </Navbar>
        </div>
    );
};

export default Header;