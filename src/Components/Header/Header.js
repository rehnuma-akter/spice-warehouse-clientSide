import React from 'react';
import { signOut } from "firebase/auth";
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from 'react-router-dom';
import auth from "../../firebase.init";
import "./Header.css";

const Header = () => {
    const [user] = useAuthState(auth);
    const logOut = () => {
        signOut(auth);
    };
    return (
        <div className='header'>
            <Navbar className='nav' collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">Spice Bustle</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mx-auto">
                    <Nav.Link className='p-3' as={Link} to="/">Home</Nav.Link>
                    {user &&( 
                        <div className='protected-items my-3'>
                            <Nav.Link className='items' as={Link} to="/manageInventory">Manage Items</Nav.Link>
                            <Nav.Link className='items' as={Link} to="/addItem">Add Item</Nav.Link>
                            <Nav.Link className='items' as={Link} to="/myItems">My Items</Nav.Link>
                        </div>
                    )}
                    <Nav.Link className='p-3' as={Link} to="/blog">Blog</Nav.Link>
                    <Nav.Link className='p-3' as={Link} to="/recipes">Recipes</Nav.Link>
                    <Nav.Link className='p-3' as={Link} to="/contactUs">Contact Us</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link as={Link} to="/register" eventKey={2}  className='button'>
                        Register
                    </Nav.Link>
                    {!user ? (
                    <Nav.Link as={Link} to="/login" className='button' >Log In</Nav.Link>
                    ) : (
                    <Nav.Link variant='primary' className='button' onClick={logOut}>Log Out</Nav.Link>
                    )}
                </Nav> 
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
};

export default Header;