import React from 'react';
import '../App.css';
import Img from '../assorted-colors-paper-cutouts-closeup-photo-796607.jpg';
import { Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home-wrapper">
      <section class="hero" style={{ backgroundImage: `url(${Img})` }}>
        <Container>
          <Row>
            <div class="hero-inner">
              <h2>MAKE YOUR EVENT AND SELL TICKETS</h2>
              <br></br>
            </div>
          </Row>
          <div className="row-home-btn">
            <Link to="/signup">
              <Button className="btn-grad">Create Event</Button>
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
