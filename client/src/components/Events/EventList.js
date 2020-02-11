import React from 'react';
import { Row, Col, Card, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default function EventList(props) {
  const empty = !props.events.length;
  if (empty) {
    return <p className="info-message">No events</p>;
  }
  return (
    <Container>
      <div className="wrapper event-list">
        <h1>Events</h1>

        {props.events.map(event => (
          <Link to={`/event/${event.id}`}>
            <Card style={{ width: '18rem' }}>
              <Row>
                <Col md={6}>
                  <Card.Img variant="top" src={event.image} />
                </Col>
                <Col md={6}>
                  <Card.Body>
                    <Card.Text>
                      <span>{event.start_date}</span>
                      <span>{event.time}</span>
                    </Card.Text>
                    <Card.Text>{event.name}</Card.Text>
                    <Card.Text>{event.location}</Card.Text>
                    <Card.Text>Price €{event.price}</Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Link>
        ))}
      </div>
    </Container>
  );
}
