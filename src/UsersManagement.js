import React, {Component } from "react";
import {Container, Row, Col, Table, Button, Modal, Form} from 'react-bootstrap';
import './UsersManagement.css';
class UsersManagement extends Component {
  constructor(props){
    super(props);
    this.state = {
      // users: [{id: '1', login: 'admin', password: 'haslo'}, 
      // {id: '2', login: 'pracownik1', password: 'pracownik'},
      // {id: '3', login: 'technik1', password: 'technik'}]
      showModal: false,
      responseText: '',
      users: [],
      editUserData: {
        id: '',
        login: '',
        password: '',
        userFunctionId: '',
        userFunction: ''
      }
    }
    this.editUser = this.editUser.bind(this);
    this.Login = this.Login.bind(this);
    this.Password = this.Password.bind(this);
    this.UserFunctionId = this.UserFunctionId.bind(this);
    this.putFetch = this.putFetch.bind(this);
    this.deleteFetch = this.deleteFetch.bind(this);
    this.getFetch = this.getFetch.bind(this);
  }

  async getFetch(){
    const data = await fetch('https://localhost:44340/api/users');
    const response = await data.json();

    this.setState({
      users: response
    })
  }

  componentDidMount(){
    this.getFetch();
  }

Login(event){
  this.state.editUserData.login = event.target.value;
}

Password(event){
  this.state.editUserData.password = event.target.value;
}

UserFunctionId(event){
  this.state.editUserData.userFunctionId = event.target.value;
}
  editUser(id, login, password, userFunctionId, userFunction){
    this.state.editUserData = {
      id: id,
      login: login,
      password: password,
      userFunctionId: userFunctionId,
      userFunction: userFunction
    };
    this.handleShow();
  }

  handleShow = () => {
    this.setState({
      showModal: true
    });
  }

  handleClose = () => {
    this.setState({
      showModal: false
    });
  }

  deleteFetch(id){
    fetch('https://localhost:44340/api/users/'+id, {
      method: 'delete',
      header: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
  }
  putFetch()
  {
    fetch('https://localhost:44340/api/users/'+this.state.editUserData.id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        id: this.state.editUserData.id,
        login: this.state.editUserData.login,
        password: this.state.editUserData.password,
        userFunctionId: this.state.editUserData.userFunctionId
      })
    })
}
  render() {

    const {users} = this.state;
    return (
      <Container className="myContainer">
        <Row>
            <Col>
            <h4>Zarządzanie pracownikami w bazie.</h4>
            </Col>
        </Row>
        <Row>
          <Table striped bordered hover variant='dark' style={{marginTop: '20px'}}>
            <thead>
              <th>Id</th>
              <th>Login</th>
              <th>Hasło</th>
              <th>Status</th>
              <th>Operacje</th>
            </thead>
            <tbody>
              {users.map((u) => {
                return(
                <tr key={u.id}>
                  <td>{u.id}</td>
                  <td>{u.login}</td>
                  <td>{u.password}</td>
                  <td>{u.userFunction.function}</td>
                  <td>
                    <Button className="btnEdit" variant="dark" onClick={this.editUser.bind(this, u.id, u.login, u.password, u.userFunctionId, u.userFunction.function)}>Edytuj</Button>
                    {/* <Button className="btnEdit" variant="dark" onClick={this.handleShow}>Edytuj</Button> */}
                    <Button className="btnDelete" variant="dark" onClick={this.deleteFetch.bind(this, u.id)}>Usuń</Button>
                  </td>
                </tr>
                )
              })}
            </tbody>
          </Table>
        </Row>

        <Modal show={this.state.showModal} onHide={this.state.handleClose} className="myModal">
        <Modal.Header>
          <Modal.Title>Edycja danych</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Id</Form.Label>
              <Form.Control type="text" disabled defaultValue={this.state.editUserData.id}/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Login</Form.Label>
              <Form.Control type="text" defaultValue={this.state.editUserData.login} onChange={this.Login}/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Hasło</Form.Label>
              <Form.Control type="text" defaultValue={this.state.editUserData.password} onChange={this.Password}/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Funkcja</Form.Label>
              <Form.Control type="text" defaultValue={this.state.editUserData.userFunctionId} onChange={this.UserFunctionId}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Zamknij
          </Button>
          <Button variant="primary" onClick={this.putFetch}>
            Zatwierdź
          </Button>
        </Modal.Footer>
      </Modal>

      </Container>
    );
  }
}
 
export default UsersManagement;