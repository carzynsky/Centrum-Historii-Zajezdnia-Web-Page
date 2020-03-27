import React, { Component } from "react";
import {Navbar, Nav} from 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from 'react-router-dom';
import './NavApp.css';
class NavApp extends Component
{
    render(){
        return(
                <div className="header">
                <Navbar expand ="lg" variant="dark" style={{marginTop: "50px"}}>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto" style={{marginRight: "50px"}}>
                            <NavLink exact activeStyle={{ borderBottom: '1px solid #ffffff' }} className="Nav-Link" to= '/Centrum-Historii-Zajezdnia-Web-Page/' >Strona główna</NavLink>
                            <NavLink activeStyle={{ borderBottom: '1px solid #ffffff' }} className="Nav-Link" to="/Centrum-Historii-Zajezdnia-Web-Page/about">O nas</NavLink>
                            <NavLink activeStyle={{ borderBottom: '1px solid #ffffff' }} className="Nav-Link" to= '/Centrum-Historii-Zajezdnia-Web-Page/contact'>Kontakt</NavLink>
                        </Nav>
                     </Navbar.Collapse>
                </Navbar>
                </div>
          );
    }
}

export default NavApp;