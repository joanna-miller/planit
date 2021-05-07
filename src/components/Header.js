import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
  return(
    <Navbar bg="dark" variant="dark" style={{display: 'flex', justifyContent: 'space-between', padding: '10px'}}>
      <Navbar.Brand to="">p l a n i t</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link to="">Sign In</Nav.Link>
        <Nav.Link to="">Sign Up</Nav.Link>
        <Nav.Link><Link to="/">Dashboard</Link></Nav.Link>
        <Nav.Link><Link to="/new">Create Trip</Link></Nav.Link>
        <Nav.Link to="">Sign Out</Nav.Link>
      </Nav>
    </Navbar>
  )
}

export default Header;