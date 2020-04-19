import React, { Component } from "react";
import {Container, Row, Col,  Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './Measurement.css';
import MeasurementPanel from "./MeasurementPanel";

class AdminPanel extends Component {
  render() {
    return (
      <div>
        <Container className="myContainer">
        <Row>
            <Col>
                <h1>Panel administratora</h1>
            </Col>
        </Row>
        <Row>
          <Col>
              <Link to='/Centrum-Historii-Zajezdnia-Web-Page/login'>
                  <Button  className="Login-Button2" variant='primary'>Wyloguj</Button>
              </Link>
          </Col>
        </Row>
      </Container>
      <MeasurementPanel/>
      </div>
    );
  }
}
 
export default AdminPanel;