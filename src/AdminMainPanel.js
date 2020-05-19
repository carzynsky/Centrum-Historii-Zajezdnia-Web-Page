import React, { Component } from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Container, Row, Col, Button} from 'react-bootstrap';
import './Measurement.css';
import MeasurementPanel from "./MeasurementPanel";
import UsersManagement from './UsersManagement';
import Server from './Server';
import NavAdmin from './NavAdmin';
import Sensors from './Sensors';

class AdminPanel extends Component {
  render() {
    return (
      <div>
      <Router>
        <Container className="myContainer">
          <Row>
              <Col>
                  <h1>Panel administratora</h1>
              </Col>
          </Row>
          <Row>
            <Col>
              <NavAdmin />
            </Col >
          </Row>
        </Container>
        <Switch>
          <Route path='/Centrum-Historii-Zajezdnia-Web-Page/admin-panel' exact component={Server}></Route>
          <Route path='/Centrum-Historii-Zajezdnia-Web-Page/admin-panel/users-management' component={UsersManagement}></Route>
          <Route path='/Centrum-Historii-Zajezdnia-Web-Page/admin-panel/sensors' component={Sensors}></Route>
        </Switch>
                        
      </Router>
      </div>
    );
  }
}
 
export default AdminPanel;