import React, { Component } from "react";
import {Container, Row, Col, Button} from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './Measurement.css';
import MeasurementPanel from './MeasurementPanel';
import userIcon from './images/userIcon.png';
import './EmployeePanel';
import Server from './Server';
import NavEmployee from './NavEmployee';

class EmployeePanel extends Component {
  render() {
    return (
      <Router>
          <div>
          <Container className="myContainer">
          <Row>
              <Col>
                  <h1>Panel pracownika</h1>
              </Col>
          </Row>
          <Row style={{marginTop: '10px'}}>
                <Col xs={1}>
                    <img src={userIcon} className='userIcon' alt="userIcon"/>
                </Col>
                <Col xs={1}>
                    {localStorage.getItem('loggedUser')}
                </Col>
            </Row>
          <Row>
            <Col>
              <NavEmployee />
            </Col>
          </Row>
        </Container>
        <Switch>
            <Route path='/Centrum-Historii-Zajezdnia-Web-Page/employee-panel' exact component={Server}></Route>
            <Route path='/Centrum-Historii-Zajezdnia-Web-Page/employee-panel/measurement' component={MeasurementPanel}></Route>
        </Switch>
        </div>
      </Router>
    );
  }
}
 
export default EmployeePanel;