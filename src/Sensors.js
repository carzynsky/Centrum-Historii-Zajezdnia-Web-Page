import React, { Component } from "react";
import {Container, Row, Table, Button, Modal, Form} from 'react-bootstrap';
import './Measurement.css';
import './Sensors.css'
import Img from 'react-image';

class Sensors extends Component {
    constructor(props){
        super(props);
        this.state = {
            showModal: false,
            showCreateModal: false,
            sensors: [],
            sensorXY:[{
                id: '1', x:'200px', y:'200px'
            }],
            isOver: false,
            editSensorData: {
              id: '',
              sensorName: '',
              sensorIpAddress: ''
            },
            createSensorData: {
              sensorName: '',
              sensorIpAddress: ''
            }
        }
        this.getSensors = this.getSensors.bind(this);
        this.deleteSensors = this.deleteSensors.bind(this);
        this.editSensor = this.editSensor.bind(this);
        this.createSensor = this.createSensor.bind(this);
        this.editSensorData = this.editSensorData.bind(this);
        this.SensorNameNew = this.SensorNameNew.bind(this);
        this.SensorIpAddressNew = this.SensorIpAddressNew.bind(this);
        this.SensorNameEdit = this.SensorNameEdit.bind(this);
        this.SensorIpAddressEdit = this.SensorIpAddressEdit.bind(this);
        this.mouseIsOverSensor = this.mouseIsOverSensor.bind(this);
        this.mouseIsOutSensor = this.mouseIsOutSensor.bind(this);
    }

    editSensorData(id, name, ip)
    {
      this.setState({
        editSensorData: {
          id: id,
          sensorName: name,
          sensorIpAddress: ip
        }

      });
      this.handleShow();
    }

    SensorNameNew(event){
      this.state.createSensorData.sensorName = event.target.value;
    }

    SensorIpAddressNew(event){
      this.state.createSensorData.sensorIpAddress = event.target.value;
    }

    SensorNameEdit(event){
      this.state.editSensorData.sensorName = event.target.value;
    }

    SensorIpAddressEdit(event){
      this.state.editSensorData.sensorIpAddress = event.target.value;
    }

    async getSensors(){
        const data = await fetch('https://localhost:5001/api/sensors');
        const response = await data.json();

        this.setState({
            sensors: response
        })
    }
    async deleteSensors(id){
      fetch('https://localhost:5001/api/sensors/'+id, {
        method: 'delete',
        header: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
      .then(response => {
        this.getSensors();
      })
    }
    async editSensor(){  
      console.log(this.state.editSensorData) ;
      fetch('https://localhost:5001/api/sensors/'+this.state.editSensorData.id, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          id: this.state.editSensorData.id,
          sensorName: this.state.editSensorData.sensorName,
          ipAddress: this.state.editSensorData.sensorIpAddress
        })
      })
      .then(response => {
        this.getSensors();
        this.handleClose();
      })
    }

    async createSensor(){
      console.log(this.state.createSensorData);
      try{
        fetch('https://localhost:5001/api/sensors', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            sensorName: this.state.createSensorData.sensorName,
            ipAddress: this.state.createSensorData.sensorIpAddress
          })
        })
        .then(response => {
          this.getSensors();
          this.handleCreateClose();
        })
      }
      catch(error){
        console.log(error);
      }
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

    componentDidMount(){
        this.getSensors();
    }

    mouseIsOutSensor(){
        this.setState({
            isOver: false
        });
        console.log('out');
    }
    mouseIsOverSensor(){
        this.setState({
            isOver: true
        });
        console.log('over');
    }
  render() {
      const {sensors} = this.state;
      const {sensorXY} = this.state;
    return (
      <Container className="myContainer">
          <Row>
              <h3>Lista czujników</h3>
          </Row>

        <Row>
            <Button className="btnEdit" variant="dark" onClick={this.handleCreateShow}>Dodaj</Button>
        </Row>
        <Row>
        <Table striped bordered hover variant='dark' style={{marginTop: '20px'}}>
            <thead>
              <th>Id</th>
              <th>Nazwa</th>
              <th>Adres IP</th>
              <th>Operacje</th>
            </thead>
            <tbody>
              {sensors.map((s) => {
                return(
                <tr key={s.id}>
                  <td>{s.id}</td>
                  <td>{s.sensorName}</td>
                  <td>{s.ipAddress}</td>
                  <td>
                    <Button className="btnEdit" variant="dark" onClick={this.editSensorData.bind(this, s.id, s.sensorName, s.ipAddress)}>Edytuj</Button>
                    <Button className="btnDelete" variant="dark" onClick={this.deleteSensors.bind(this, s.id)} >Usuń</Button>
                  </td>
                </tr>
                )
              })}
            </tbody>
          </Table>
        </Row>
        <Row>
                <img className="mapPicture"
                src={require("./images/map.png")} />
                {/* {sensorXY.map((x) => {
                    return(
                        <img key={x.id} onMouseOver={this.mouseIsOverSensor} onMouseOut={this.mouseIsOutSensor} style={{position: 'absolute', top: x.y, left: x.x}} src={require("./images/sensorRed.png")}/>
                    )
                })} */}
        </Row>

        <Modal show={this.state.showModal} onHide={this.state.handleClose} className="myModal">
        <Modal.Header>
          <Modal.Title>Edycja danych</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Id</Form.Label>
              <Form.Control type="text" disabled defaultValue={this.state.editSensorData.id}/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Nazwa czujnika</Form.Label>
              <Form.Control type="text" defaultValue={this.state.editSensorData.sensorName} onChange={this.SensorNameEdit}/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Adres Ip czujnika</Form.Label>
              <Form.Control type="text" defaultValue={this.state.editSensorData.sensorIpAddress} onChange={this.SensorIpAddressEdit}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Zamknij
          </Button>
          <Button variant="primary" onClick={this.editSensor}>
            Zatwierdź
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={this.state.showCreateModal} onHide={this.state.handleCreateClose} className="myModal">
        <Modal.Header>
          <Modal.Title>Dodawanie sensora</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Nazwa czujnika</Form.Label>
              <Form.Control type="text" onChange={this.SensorNameNew}/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Adres Ip czujnika</Form.Label>
              <Form.Control type="text" onChange={this.SensorIpAddressNew}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleCreateClose}>
            Zamknij
          </Button>
          <Button variant="primary" onClick={this.createSensor}>
            Dodaj
          </Button>
        </Modal.Footer>
      </Modal>

      </Container>
    );
  }
}
 
export default Sensors;