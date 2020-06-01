import React, { Component } from "react";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {Container, Row, Col, Button} from 'react-bootstrap';
import './Measurement.css';
import UsersManagement from './UsersManagement';
import Server from './Server';
import NavAdmin from './NavAdmin';
import Sensors from './Sensors';
import userIcon from './images/userIcon.png';
import './AdminMainPanel.css';

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