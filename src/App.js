import React, { Component } from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import NavApp from './NavApp';
import Loggin from './Loggin';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends Component
{
    render(){
        return(
            <Router>
                <div>
                    <NavApp />
                    <Switch>
                        <Route path='/' exact component={Home}></Route>
                        <Route path='/about' component={About}></Route>
                        <Route path='/contact' component={Contact}></Route>
                        <Route path='/loggin' component={Loggin}></Route>
                    </Switch>
                </div>
            </Router>
          );
    }
}

export default App;