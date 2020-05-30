import React, { Component } from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Container, Row, Col, Button} from 'react-bootstrap';
import './Measurement.css';
import GenerateCode from './GenerateCode';
import SensorsTechnician from './SensorsTechnician';
import NavTechnician from './NavTechnician';
import userIcon from './images/userIcon.png';
import './TechnicianPanel.css';

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
              <a href='/Centrum-Historii-Zajezdnia-Web-Page/login'>
                <Button  className="Login-Button2" variant='primary'>Wyloguj</Button>
              </a>
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