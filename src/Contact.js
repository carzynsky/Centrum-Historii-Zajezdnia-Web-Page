import React, { Component } from "react";
import {Row, Col} from 'react-bootstrap';
import './Contact.css';

class Contact extends Component {
  render() {
    return (
        <div className="ContactPanel">
          <Row>
            <Col>
            <h2>Autorzy projektu</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              Arkadiusz Carzyński
            </Col>
          </Row>
          <Row>
            <Col>
              Damian Bednarz
            </Col>
          </Row>
          <Row>
            <Col>
              Piotr Kanclerz
            </Col>
          </Row>
          <Row>
            <Col>
              Paweł Sajewicz
            </Col>
          </Row>
          <Row>
            <Col>
              Dawid Trzebiński
            </Col>
          </Row>
     </div>
    );
  }
}
 
export default Contact;