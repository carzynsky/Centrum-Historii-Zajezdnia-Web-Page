import React, { Component } from "react";
import {Form, Button} from 'react-bootstrap';
import './Loggin.css';

class Loggin extends Component {
  constructor(){
    super();
    this.state = {
      Login: '',
      Password: ''
    }

    this.Password = this.Password.bind(this);
    this.Login = this.Login.bind(this);
    this.loggin = this.loggin.bind(this);
  }

  Login(event){
    this.setState({Password: event.target.value})
  }

  Password(event){
    this.setState({Password: event.target.value})
  }

  loggin(event){
    // debugger;
    fetch('https://localhost:44340/api/login', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        Login: this.state.Login,
        Password: this.state.Password
      })
    }).then((Response) => Response.json()).then(
      (result) => {
        console.log(result);
        if(result.Status == 'Error')
        {
          console.log('Invalid user!');
        }
        if(result.Status == 'Success')
        {
          console.log('Signed in!');
        }

      })
  }
  render() {
    return (
        <div className="LogginPanel">
            {/* <h1>Tu bedzie logowanie</h1> */}
            <Form>
              <Form.Group controlId="formLogin">
                <Form.Label>Login</Form.Label>
                <Form.Control onChange={this.Login} type="text" placeholder="Wpisz login" />
                <Form.Text className="text-muted">
                  We'll never share your loginwith anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formassword">
                <Form.Label>Hasło</Form.Label>
                <Form.Control onChange={this.Password} type="password" placeholder="Wpisz hasło" />
              </Form.Group>
              <Button onClick={this.loggin} variant="primary" >
                Zaloguj
              </Button>
            </Form>
         </div>
    );
  }
}
 
export default Loggin;