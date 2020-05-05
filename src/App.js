import React, { Component } from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import NavApp from './NavApp';
import Login from './Login';
import AdminMainPanel from "./AdminMainPanel";
import EmployeePanel from "./EmployeePanel";
import TechnicianPanel from './TechnicianPanel';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends Component
{
    render(){
        return(
                <Router>
                        <NavApp />
                        <Switch>
                            <Route path='/Centrum-Historii-Zajezdnia-Web-Page/' exact component={Home}></Route>
                            <Route path='/Centrum-Historii-Zajezdnia-Web-Page/about' component={About}></Route>
                            <Route path='/Centrum-Historii-Zajezdnia-Web-Page/contact' component={Contact}></Route>
                            <Route path='/Centrum-Historii-Zajezdnia-Web-Page/login' component={Login}></Route>
                            <Route path='/Centrum-Historii-Zajezdnia-Web-Page/admin-panel' component={AdminMainPanel}></Route>
                            <Route path='/Centrum-Historii-Zajezdnia-Web-Page/employee-panel' component={EmployeePanel}></Route>
                            <Route path='/Centrum-Historii-Zajezdnia-Web-Page/technician-panel' component={TechnicianPanel}></Route>
                        </Switch>                      
                </Router>
          );
    }
}

export default App;