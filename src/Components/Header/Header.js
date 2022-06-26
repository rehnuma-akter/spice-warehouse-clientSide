import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = () => {
    return (
        <div className='header'>
            <Navbar className='nav' collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">Spice Bustle</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mx-auto">
                    <Nav.Link className='p-3' as={Link} to="/">Home</Nav.Link>
                    <Nav.Link className='p-3' as={Link} to="/manageItems">Manage Items</Nav.Link>
                    <Nav.Link className='p-3' as={Link} to="/addItem">Add Item</Nav.Link>
                    <Nav.Link className='p-3' as={Link} to="/blog">Blog</Nav.Link>
                    <Nav.Link className='p-3' as={Link} to="/myItems">My Items</Nav.Link>
                    <Nav.Link className='p-3' as={Link} to="/recipes">Recipes</Nav.Link>
                    <Nav.Link className='p-3' as={Link} to="/contactUs">Contact Us</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link as={Link} to="/logIn" className='button px-3 py-1'>Log In</Nav.Link>
                    <Nav.Link as={Link} to="/register" className='button px-3 py-1'>
                    Register
                    </Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
};

export default Header;