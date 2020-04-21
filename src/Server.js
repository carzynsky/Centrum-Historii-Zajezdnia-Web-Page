import React, { Component } from "react";
import {Container, Row, Col} from 'react-bootstrap';
import './Measurement.css';

class Server extends Component {
  render() {
    return (
      <Container className="myContainer">
        <Row>
            <Col>
            Sprawdzenie serwera.
            </Col>
        </Row>
      </Container>
    );
  }
}
 
export default Server;