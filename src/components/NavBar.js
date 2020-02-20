import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../App.css';

export class NavBar extends Component {
  render() {
    const { jwt } = this.props.user;

    const userLinks = (
      <Link to="/signup">
        <Button className="button-signup-nav">Log out</Button>
      </Link>
    );

    const guestLinks = (
      <Link to="/signup">
        <Button className="button-signup-nav">Sign Up</Button>
      </Link>
    );

    return (
      <div className="navigation">
        <Navbar collapseOnSelect expand="lg" className="bg">
          <Link to="/">
            <Navbar.Brand>Rocketevents</Navbar.Brand>
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
              {jwt ? userLinks : guestLinks}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.users
  };
};

export default connect(mapStateToProps)(NavBar);
