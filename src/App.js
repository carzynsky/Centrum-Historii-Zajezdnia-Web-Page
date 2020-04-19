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
                    <div>
                        <NavApp />
                        <Switch>
                            <Route path='/Centrum-Historii-Zajezdnia-Web-Page/' exact component={Home}></Route>
                            <Route path='/Centrum-Historii-Zajezdnia-Web-Page/about' component={About}></Route>
                            <Route path='/Centrum-Historii-Zajezdnia-Web-Page/contact' component={Contact}></Route>
                            <Route path='/Centrum-Historii-Zajezdnia-Web-Page/login' component={Login}></Route>
                            <Route path='/Centrum-Historii-Zajezdnia-Web-Page/adminpanel' component={AdminMainPanel}></Route>
                            <Route path='/Centrum-Historii-Zajezdnia-Web-Page/employeepanel' component={EmployeePanel}></Route>
                            <Route path='/Centrum-Historii-Zajezdnia-Web-Page/technicianpanel' component={TechnicianPanel}></Route>
                        </Switch>
                    </div>
                </Router>
          );
    }
}

export default App;