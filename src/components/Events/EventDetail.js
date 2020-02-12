import React from 'react';
import { Col, Row, Button, Container } from 'react-bootstrap';

export default function EventDetail(props) {
  return (
    <React.Fragment>
      <Container
        fluid
        style={{ backgroundColor: '#dbdae2', height: '400px' }}
        className="event-info"
      >
        <Row className="row-w row-badge-event">
          <Col md={9} className="col-left">
            <img
              src={props.event.image}
              style={{ width: '100%', height: '350px' }}
            />
          </Col>
          <Col md={3} className="col-right">
            <p>{props.event.start_date}</p>
            <p>{props.event.name}</p>
            <p>€{props.event.time}</p>
          </Col>
        </Row>
        <Row className="row-w row-badge-bottom">
          <Col md={9}></Col>
          <Col md={3}>
            <Button
              style={{
                width: '100%',
                background: '#4ee0b0',
                borderColor: 'transparent'
              }}
            >
              Buy tickets
            </Button>
          </Col>
        </Row>
        <article>
          <Row className="row-w row-content">
            <Col md={12} className="full">
              <h6>About this event</h6>
              <p>{props.event.description}</p>
              <h6>Information</h6>
              <p style={{ fontWeight: 'bold', fontSize: '15px' }}>
                {props.event.name}
              </p>
              <span> In </span>
              <span style={{ fontWeight: 'bold' }}> {props.event.price} </span>
              <span> on the </span>
              <span style={{ fontWeight: 'bold' }}>
                {props.event.start_date}
              </span>
              <span> at </span>
              <span style={{ fontWeight: 'bold' }}>
                {' '}
                {props.event.location}
              </span>
            </Col>
          </Row>
        </article>
      </Container>

      <Container>
        <div className="wrapper event-detail">
          <Row></Row>
        </div>
      </Container>
    </React.Fragment>
  );
}
