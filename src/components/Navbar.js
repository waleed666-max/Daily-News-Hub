import React from 'react';


import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function NavScrollExample() {
  return (
    <Navbar expand="lg" className="navbar fixed-top navbar-dark bg-dark ">
      <Container fluid>
        <Navbar.Brand href="#">Daily News Hub</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/general">Home</Nav.Link>
            <Nav.Link href="/business">Business</Nav.Link>
            <Nav.Link href="/entertainment">Entertainment</Nav.Link>
            <Nav.Link href="/general">General</Nav.Link>
            <Nav.Link href="/health">Health</Nav.Link>
            <Nav.Link href="/science">Science</Nav.Link>
            <Nav.Link href="/sports">Sports</Nav.Link>
            <Nav.Link href="/technology">Technology</Nav.Link>
            <Nav.Link href="/technology">Crypto</Nav.Link>
        

          </Nav>

         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
