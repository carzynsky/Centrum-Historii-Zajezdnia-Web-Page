import React, { Component } from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import './Measurement.css';
import MeasurementPanel from "./MeasurementPanel";
import UsersManagement from './UsersManagement';
import Server from './Server';
import NavAdmin from './NavAdmin';

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
          <Route path='/Centrum-Historii-Zajezdnia-Web-Page/admin-panel' exact component={MeasurementPanel}></Route>
          <Route path='/Centrum-Historii-Zajezdnia-Web-Page/admin-panel/users-management' component={UsersManagement}></Route>
          <Route path='/Centrum-Historii-Zajezdnia-Web-Page/admin-panel/server' component={Server}></Route>
        </Switch>
                        
      </Router>
      </div>
    );
  }
}
 
export default AdminPanel;