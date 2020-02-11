import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../App.css';

export default function NavBar() {
  return (
    <div className="navigation">
      <Navbar collapseOnSelect expand="lg" className="bg">
        <Link to="/">
          <Navbar.Brand>Rocketvents</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Nav.Link>
              <Link to="/event">Events</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/event/create">Create Event</Link>
            </Nav.Link>
            <Link to="/signup">
              <Button className="button-signup-nav">Sign Up</Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
