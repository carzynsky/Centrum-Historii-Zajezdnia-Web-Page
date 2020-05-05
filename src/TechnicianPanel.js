import React, { Component } from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import './Measurement.css';
import GenerateCode from './GenerateCode';
import SensorsTechnician from './SensorsTechnician';
import NavTechnician from './NavTechnician';

class AdminPanel extends Component {
  render() {
    return (
      <div>
      <Router>
        <Container className="myContainer">
          <Row>
              <Col>
                  <h1>Panel technika</h1>
              </Col>
          </Row>
          <Row>
            <Col>
              <NavTechnician />
            </Col >
          </Row>
        </Container>
        <Switch>
          <Route path='/Centrum-Historii-Zajezdnia-Web-Page/technician-panel' exact component={GenerateCode}></Route>
          <Route path='/Centrum-Historii-Zajezdnia-Web-Page/technician-panel/sensors' component={SensorsTechnician}></Route>
        </Switch>                     
      </Router>
      </div>
    );
  }
}
 
export default AdminPanel;