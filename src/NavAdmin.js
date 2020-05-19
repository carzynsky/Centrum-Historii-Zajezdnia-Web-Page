import React, { Component } from "react";
import {Navbar, Nav} from 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from 'react-router-dom';
import './NavApp.css';
class NavAdmin extends Component
{
    render(){
        return(
                <div className="header">
                <Navbar expand ="lg" variant="dark" style={{marginTop: "30px"}}>
                        <Nav className="mr-auto">
                            <NavLink exact activeStyle={{ borderBottom: '2px solid rgb(152, 52, 239)' }} className="Nav-Link" to= '/Centrum-Historii-Zajezdnia-Web-Page/admin-panel' >Serwer</NavLink>
                            <NavLink activeStyle={{ borderBottom: '2px solid rgb(152, 52, 239)' }} className="Nav-Link" to="/Centrum-Historii-Zajezdnia-Web-Page/admin-panel/users-management">Zarządzaj</NavLink>
                            <NavLink activeStyle={{ borderBottom: '2px solid rgb(152, 52, 239)' }} className="Nav-Link" to= '/Centrum-Historii-Zajezdnia-Web-Page/admin-panel/sensors'>Czujniki</NavLink>
                        </Nav>
                </Navbar>
                </div>
          );
    }
}

export default NavAdmin;