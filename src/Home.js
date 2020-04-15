import React, { Component } from "react";
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

class Home extends Component 
{
  render() {
    return (    
        <div className="GreetingPanel">
            <h1>System do monitorowania parametrów mikroklimatu w Centrum Historii Zajezdnia.</h1>
            <Link to='/Centrum-Historii-Zajezdnia-Web-Page/login'>
              <Button className="btn" variant="dark">Zaloguj</Button>
            </Link>
        </div>
    );
  }
}
 
export default Home;