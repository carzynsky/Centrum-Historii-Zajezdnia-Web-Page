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
      showCreateModal: false,
      responseText: '',
      users: [],
      editUserData: {
        id: '',
        login: '',
        password: '',
        userFunctionId: '',
        userFunction: ''
      },
      createUserData: {
        login: '',
        password: '',
        userFunctionId: ''
      }
    }
    this.editUserData = this.editUserData.bind(this);
    this.Login = this.Login.bind(this);
    this.Password = this.Password.bind(this);
    this.UserFunctionId = this.UserFunctionId.bind(this);
    this.LoginNew = this.LoginNew.bind(this);
    this.PasswordNew = this.PasswordNew.bind(this);
    this.UserFunctionIdNew = this.UserFunctionIdNew.bind(this);
    this.editUser = this.editUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.getUsers = this.getUsers.bind(this);
    this.createUser = this.createUser.bind(this);
  }

  async getUsers(){
    const data = await fetch('https://localhost:44340/api/users');
    const response = await data.json();

    this.setState({
      users: response
    })
  }

  componentDidMount(){
    this.getUsers();
  }

  editUserData(id, login, password, userFunctionId, userFunction){
    this.state.editUserData = {
      id: id,
      login: login,
      password: password,
      userFunctionId: userFunctionId,
      userFunction: userFunction
    };
    this.handleShow();
  }

  LoginNew(event){
    this.state.createUserData.login = event.target.value;
  }

  PasswordNew(event){
    this.state.createUserData.password = event.target.value;
  }

  UserFunctionIdNew(event){
    this.state.createUserData.userFunctionId = event.target.value;
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

  handleCreateShow = () => {
    this.setState({
      showCreateModal: true
    })
  }

  handleCreateClose = () => {
    this.setState({
      showCreateModal: false
    })
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

  async createUser(){
    console.log(this.state.createUserData);
    try{
      fetch('https://localhost:44340/api/users', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          login: this.state.createUserData.login,
          password: this.state.createUserData.password,
          userFunctionId: this.state.createUserData.userFunctionId
        })
      })
      .then(response => {
        this.getUsers();
        this.handleCreateClose();
      })
    }
    catch(error){
      console.log(error);
    }
  }

  async deleteUser(id){
    fetch('https://localhost:44340/api/users/'+id, {
      method: 'delete',
      header: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(response => {
      this.getUsers();
    })
  }

  async editUser(){    
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
    .then(response => {
      this.getUsers();
      this.handleClose();
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
          <Button className="btnEdit" variant="dark" onClick={this.handleCreateShow}>Dodaj</Button>
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
                    <Button className="btnEdit" variant="dark" onClick={this.editUserData.bind(this, u.id, u.login, u.password, u.userFunctionId, u.userFunction.function)}>Edytuj</Button>
                    <Button className="btnDelete" variant="dark" onClick={this.deleteUser.bind(this, u.id)}>Usuń</Button>
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
          <Button variant="primary" onClick={this.editUser}>
            Zatwierdź
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={this.state.showCreateModal} onHide={this.state.handleCreateClose} className="myModal">
        <Modal.Header>
          <Modal.Title>Dodawanie użytkownika</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Login</Form.Label>
              <Form.Control type="text" defaultValue={this.state.createUserData.login} onChange={this.LoginNew}/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Hasło</Form.Label>
              <Form.Control type="text" defaultValue={this.state.createUserData.password} onChange={this.PasswordNew}/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Funkcja</Form.Label>
              <Form.Control type="text" defaultValue={this.state.createUserData.userFunctionId} onChange={this.UserFunctionIdNew}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleCreateClose}>
            Zamknij
          </Button>
          <Button variant="primary" onClick={this.createUser}>
            Dodaj
          </Button>
        </Modal.Footer>
      </Modal>

      </Container>
    );
  }
}
 
export default UsersManagement;