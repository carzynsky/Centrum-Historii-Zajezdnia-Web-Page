import React, { Component } from "react";
import {Navbar, Nav} from 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
class NavApp extends Component
{
    render(){
        return(
                <div className="header">
                <Navbar expand ="lg" variant="dark" style={{marginTop: "50px"}}>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto" style={{marginRight: "50px"}}>
                            <Link exact activeStyle={{ borderBottom: '1px solid #ffffff' }} className="Nav-Link" to= '/' >Strona główna</Link>
                            <Link activeStyle={{ borderBottom: '1px solid #ffffff' }} className="Nav-Link" to="/about">O nas</Link>
                            <Link activeStyle={{ borderBottom: '1px solid #ffffff' }} className="Nav-Link" to= '/contact'>Kontakt</Link>
                        </Nav>
                     </Navbar.Collapse>
                </Navbar>
                </div>
          );
    }
}

export default NavApp;