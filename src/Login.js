import React, { Component } from "react";
import {Form} from 'react-bootstrap';
import {Redirect, Link} from 'react-router-dom';
import './Login.css';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      UserLogin: '',
      UserPassword: '',
      Message: 'Zaloguj'
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
    fetch('https://localhost:44340/api/login',{
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
      if(result.status == 'Error'){
        this.setState({
          Message: 'Nie udało się zalogować!'
        })
        console.log('xd');
      }
      if(result.status == 'Success'){
        this.setState({redirect: true});
      }
    })
    .catch((err) => {
      console.log(err);
    })
  }


  render() {
    if (this.state.redirect){
      return <Redirect push to='/Centrum-Historii-Zajezdnia-Web-Page/measurement'/>
    }
    return (
        <div className="LoginPanel">
            <Form>
              <Form.Group className="formLogin">
                <Form.Control className="My-Input" onChange={this.UserLogin} type="text" placeholder="Login" />
                <Form.Text className="text-muted">
                  {this.state.Message}
                </Form.Text>
              </Form.Group>

              <Form.Group className="formPassword">
                <Form.Control className="My-Input" onChange={this.UserPassword} type="password" placeholder="*****" />
              </Form.Group>
              <Form.Label  className="Login-Button" onClick={this.login} variant="primary" >
                  Zaloguj
              </Form.Label>
              <Link to='/Centrum-Historii-Zajezdnia-Web-Page/measurement'>
                <Form.Label  className="Login-Button2">
                  Wejdz i tak
                </Form.Label>
              </Link>
            </Form>
         </div>
    );
  }
}
 
export default Login;