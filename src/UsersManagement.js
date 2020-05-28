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
      showModalHistory: false,
      responseText: '',
      users: [],
      loginHistory: [],
      loginHistoryByUserId: [],
      userFunctions: [],
      editUserData: {
        id: '',
        login: '',
        password: '',
        userFunctionId: '',
        userFunction: '',
        loginHistories: []
      },
      createUserData: {
        login: '',
        password: '',
        userFunctionId: 1
      }
    }
    this.editUserData = this.editUserData.bind(this);
    this.editUserDataExac = this.editUserDataExac.bind(this);
    this.Login = this.Login.bind(this);
    this.Password = this.Password.bind(this);
    this.UserFunctionId = this.UserFunctionId.bind(this);
    this.LoginNew = this.LoginNew.bind(this);
    this.PasswordNew = this.PasswordNew.bind(this);
    this.UserFunctionIdNew = this.UserFunctionIdNew.bind(this);
    this.editUser = this.editUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.deleteLoginHistory = this.deleteLoginHistory.bind(this);
    this.getUsers = this.getUsers.bind(this);
    this.getLoginHistory = this.getLoginHistory.bind(this);
    this.getLoginHistoryByUserId = this.getLoginHistoryByUserId.bind(this);
    this.createUser = this.createUser.bind(this);
    this.getUserFunctions = this.getUserFunctions.bind(this);
  }

  async getLoginHistory(){
    const response = await fetch('https://localhost:5001/api/loginHistory');
    const data = await response.json();
    this.setState({
      loginHistory: data
    });
  }

  async getLoginHistoryByUserId(id, login, password, userFunctionId, userFunction, history){
    const response = await fetch ('https://localhost:5001/api/loginHistory/' + id);
    const data = await response.json();
    this.state.loginHistoryByUserId = data;
    console.log(data);
    this.editUserDataExac(id, login, password, userFunctionId, userFunction, history);
    this.handleShowHistory();
  }

  async getUsers(){
    const data = await fetch('https://localhost:5001/api/users');
    const response = await data.json();
    this.setState({
      users: response
    })
  }

  async deleteLoginHistory(){
    fetch('https://localhost:5001/api/loginHistory',{
      method: 'delete',
      header: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(response => {
      this.getLoginHistory();
    })
  }

  async getUserFunctions(){
    const data = await fetch('https://localhost:5001/api/users/functions');
    const response = await data.json();

    this.setState({
      userFunctions: response
    });
  }

  componentDidMount(){
    this.getUsers();
    this.getLoginHistory();
    this.getUserFunctions();
  }

  editUserDataExac(id, login, password, userFunctionId, userFunction, history){
    this.state.editUserData = {
      id: id,
      login: login,
      password: password,
      userFunctionId: userFunctionId,
      userFunction: userFunction,
      loginHistories: history
    };
  }

  editUserData(id, login, password, userFunctionId, userFunction, history){
    this.editUserDataExac(id, login, password, userFunctionId, userFunction, history);
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

  handleShowHistory = () => {
    this.setState({
      showModalHistory: true
    });
  }

  handleCloseHistory = () => {
    this.setState({
      showModalHistory: false
    });
  }

  async createUser(){
    console.log(this.state.createUserData);
    try{
      fetch('https://localhost:5001/api/users/', {
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
      .then(response => response.json())
      .then((result) =>{
        if(result.message === undefined){
          alert('Niepoprawne dane!');
        }
        else{
          alert(result.message);
          this.setState({
            createUserData:{
              login: '',
              password: '',
              userFunctionId: 1
            }
          })
        this.getUsers();
        this.handleCreateClose();
        }
        
      })
    }
    catch(error){
      console.log(error);
    }
  }

  async deleteUser(id){
    fetch('https://localhost:5001/api/users/'+id, {
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
    fetch('https://localhost:5001/api/users/'+this.state.editUserData.id, {
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
    const {users, loginHistory, loginHistoryByUserId} = this.state;
    return (
      <Container className="myContainer">
        <Row>
          <h3>Zarządzanie pracownikami w bazie</h3>
        </Row>
        <Row>
          <Button className="btnEdit" variant="dark" onClick={this.handleCreateShow}>Dodaj</Button>
        </Row>
        <Row>
        <Table striped bordered hover variant='dark' style={{marginTop: '30px'}}>
            <thead>
              <th>Id</th>
              <th>Login</th>
              <th>Hasło</th>
              <th>Rola</th>
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
                    <Button className="btnEdit" variant="dark" onClick={this.editUserData.bind(this, u.id, u.login, u.password, u.userFunctionId, u.userFunction.function, u.loginHistories)}>Edytuj</Button>
                    <Button className="btnDelete" variant="dark" onClick={this.deleteUser.bind(this, u.id)}>Usuń</Button>
                    <Button className="btnDelete" variant="dark" onClick={this.getLoginHistoryByUserId.bind(this, u.id, u.login, u.password, u.userFunctionId, u.userFunction.function, u.loginHistories)}>Historia</Button>
                  </td>
                </tr>
                )
              })}
            </tbody>
          </Table>
        </Row>
        <Row style={{marginTop: '20px'}}>
          <h3>Historia wszystkich logowań</h3>
        </Row>
        <Row>
          <Button className="btnDelete" variant="dark" style={{width: '130px'}} onClick={this.deleteLoginHistory}>Wyczyść historie</Button>
        </Row>
        <Row>
          <Table striped bordered hover variant='dark' style={{marginTop: '20px'}}>
            <thead>
              <th>Id logowania</th>
              <th>Godzina</th>
              <th>Id użytkownika</th>
              <th>Login użytkownika</th>
              <th>Status operacji</th>
            </thead>
            <tbody>
              {loginHistory.map((l) => {
                return(
                <tr key={l.id}>
                  <td>{l.id}</td>
                  <td>{l.dateTime}</td>
                  <td>{l.userId}</td>
                  <td>{l.users.login}</td>
                  <td>{l.success}</td>
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
              <Form.Label>Rola</Form.Label>
            </Form.Group>
            <Form.Group>
            <select
              className='createSelect'
              defaultValue={this.state.editUserData.userFunctionId}
              onChange={this.UserFunctionId}
              >
                {this.state.userFunctions.map((u) => 
                  <option key={u.id} value={u.id}>{u.function}</option>
                )}
                
              </select>
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

      <Modal show={this.state.showCreateModal}  onHide={this.state.handleCreateClose} className="myModal">
        <Modal.Header>
          <Modal.Title>Dodawanie użytkownika</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Login</Form.Label>
              <Form.Control type="text" onChange={this.LoginNew}/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Hasło</Form.Label>
              <Form.Control type="text" onChange={this.PasswordNew}/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Rola</Form.Label>
            </Form.Group>
            <Form.Group>
              <select
              className='createSelect'
              onChange={this.UserFunctionIdNew}
              >
                {this.state.userFunctions.map((u) => 
                  <option key={u.id} value={u.id}>{u.function}</option>
                )}            
              </select>
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

      <Modal show={this.state.showModalHistory} size='lg' onHide={this.state.handleCloseHistory} className="historyModal">
        <Modal.Header>
          <Modal.Title>Historia logowań użytkownika</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
                <Form.Label>Id: {this.state.editUserData.id}</Form.Label>
            </Form.Group>
            <Form.Group>
                <Form.Label>Login: {this.state.editUserData.login}</Form.Label>
            </Form.Group>
            <Form.Group>
                <Form.Label>Hasło: {this.state.editUserData.password}</Form.Label>
            </Form.Group>
            <Form.Group>
                <Form.Label>Rola: {this.state.editUserData.userFunction}</Form.Label>
            </Form.Group>
          </Form>
          <Table responsive="lg" bordered variant='white' style={{marginTop: '30px'}}>
            <thead>
              <th>Id logowania</th>
              <th>Godzina logowania</th>
              <th>Id użytkownika</th>
              <th>Podany login</th>
              <th>Podane hasło</th>
              <th>Status operacji</th>
            </thead>
            <tbody>
            {loginHistoryByUserId.map((l) => {
                return(
                <tr key={l.id}>
                  <td>{l.id}</td>
                  <td>{l.dateTime}</td>
                  <td>{l.userId}</td>
                  <td>{l.userLogin}</td>
                  <td>{l.userPassword}</td>
                  <td>{l.success}</td>
                </tr>
                )
              })}
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleCloseHistory}>
            Zamknij
          </Button>
        </Modal.Footer>
      </Modal>

      </Container>
    );
  }
}
 
export default UsersManagement;