import React, { Component } from "react";
import {Container, Row, Col, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './Measurement.css';

class TechnicianPanel extends Component {
  render() {
    return (
      <Container className="myContainer">
        <Row>
            <Col>
                <h1>Panel technika</h1>
            </Col>
        </Row>
        <Row>
          <Col>
              <Link to='/Centrum-Historii-Zajezdnia-Web-Page/login'>
                  <Button  className="Login-Button2" variant='primary'>Wyloguj</Button>
              </Link>
          </Col>
        </Row>
        <Row>
            <Col>
            TODO
            </Col>
        </Row>
      </Container>
    );
  }
}
 
export default TechnicianPanel;