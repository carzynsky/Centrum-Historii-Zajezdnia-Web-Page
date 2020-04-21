import React, { Component } from "react";
import {Form, Button} from 'react-bootstrap';
import {Redirect} from 'react-router-dom';
import './Login.css';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      UserLogin: '',
      UserPassword: '',
      Message: '',
    }

    this.UserLogin = this.UserLogin.bind(this);
    this.UserPassword = this.UserPassword.bind(this);
    this.login = this.login.bind(this);
    }
    UserLogin(event){
      this.setState({
        UserLogin: event.target.value
      })
    }

    UserPassword(event){
      this.setState({
        UserPassword: event.target.value
      })
    }

  login(event){
    event.preventDefault();
    try{
      fetch('https://localhost:44340/api/users',{
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({

        login: this.state.UserLogin,
        password: this.state.UserPassword
      })
    })
    .then((response) => response.json())
    .then((result) => {
      if(result.status === 'Error'){
        this.setState({
          Message: 'Nie udało się zalogować!'
        })
      }
      else if(result.status === 'Success'){
        this.setState({redirect: result.function});
      }
      else
      {
        this.setState({
          Message: 'Nie udało się zalogować!'
        });
      }
    })
    .catch((err) => {
      console.log(err);
    })

    }
    catch(error){
      console.log('error');
      this.setState({
        Message: 'Nie udało się zalogować!'
      });
    }  
  }

  render() {
    if (this.state.redirect === 'admin'){
      return <Redirect push to='/Centrum-Historii-Zajezdnia-Web-Page/admin-panel'/>
    }
    if (this.state.redirect === 'technician'){
      return <Redirect push to='/Centrum-Historii-Zajezdnia-Web-Page/technicianpanel'/>
    }
    if (this.state.redirect === 'employee'){
      return <Redirect push to='/Centrum-Historii-Zajezdnia-Web-Page/employeepanel'/>
    }
    return (
        <div className="LoginPanel">
            <Form>
              <Form.Group className="formLogin">
                <Form.Label>Podaj login</Form.Label>
                <Form.Control className="My-Input" onChange={this.UserLogin} type="text" placeholder="Login" />
                <Form.Text className="text-muted">
                  {this.state.Message}
                </Form.Text>
              </Form.Group>

              <Form.Group className="formPassword">
                <Form.Label>Podaj hasło</Form.Label>
                <Form.Control className="My-Input" onChange={this.UserPassword} type="password" placeholder="*****" />
              </Form.Group>
              {/* <Link to='/Centrum-Historii-Zajezdnia-Web-Page/measurement'> */}
                {/* <Button  className="Login-Button" onClick={this.login} variant="primary" >
                    Zaloguj
                </Button> */}
                <Button  className="Login-Button" onClick={this.login} variant="primary" >
                    Zaloguj
                </Button>
              {/* </Link> */}
            </Form>
         </div>
    );
  }
}
 
export default Login;