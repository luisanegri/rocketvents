import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../App.css';

export class NavBar extends Component {
  render() {
    // when set this.state.user result is null
    const isLoggedIn = this.state;

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
              {isLoggedIn ? (
                <Link to="/signup">
                  <Button className="button-signup-nav">Log out</Button>
                </Link>
              ) : (
                <Link to="/signup">
                  <Button className="button-signup-nav">Sign Up</Button>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('state', state);
  return {
    user: state.users
  };
};

export default connect(mapStateToProps)(NavBar);
