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
        <Row>
          {props.events.map(event => (
            <Col md={4}>
              <Link to={`/event/${event.id}`}>
                <Card style={{ width: '18rem' }}>
                  <Card.Body>
                    <Card.Img variant="top" src={event.image} />
                    <div className="card-text-wrapper">
                      <Card.Text>
                        <span>{event.start_date} at </span>
                        <span>{event.location}</span>
                      </Card.Text>
                      <Card.Text>{event.name}</Card.Text>
                      <Card.Text>{event.price}</Card.Text>
                      <Card.Text>Price €{event.time}</Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
}
