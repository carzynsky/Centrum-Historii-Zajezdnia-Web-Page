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
            editSensorData: {
              id: '',
              sensorName: '',
              sensorIpAddress: '',
              externalIpAddress: '',
              top: '',
              left: ''
            },
            createSensorData: {
              sensorName: '',
              sensorIpAddress: '',
              externalIpAddress: '',
              top: '',
              left: ''
            },
            newX: 0,
            newY: 0,
            offsetX: '',
            offsetY: ''
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
        this.mouseDownSensor = this.mouseDownSensor.bind(this);
        this.move = this.move.bind(this);
        this.remove = this.remove.bind(this);
        this.SensorLeftEdit = this.SensorLeftEdit.bind(this);
        this.SensorTopEdit = this.SensorTopEdit.bind(this);
        this.SensorLeftNew = this.SensorLeftNew.bind(this);
        this.SensorTopNew = this.SensorTopNew.bind(this);
        this.SensorExternalIpAddressEdit = this.SensorExternalIpAddressEdit.bind(this);
        this.SensorExternalIpAddressNew = this.SensorExternalIpAddressNew.bind(this);
    }

    editSensorData(id, name, ip, top, left, external)
    {
      this.setState({
        editSensorData: {
          id: id,
          sensorName: name,
          sensorIpAddress: ip,
          top: top,
          left: left,
          externalIpAddress: external
        }

      });
      console.log(this.state.sensors);
      this.handleShow();
    }

    SensorExternalIpAddressNew(event){
      this.state.createSensorData.externalIpAddress = event.target.value;
    }

    SensorExternalIpAddressEdit(event){
      this.state.editSensorData.externalIpAddress = event.target.value;
    }

    SensorTopNew(event){
      this.state.createSensorData.top = event.target.value;
    }

    SensorLeftNew(event){
      this.state.createSensorData.left = event.target.value;
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

    SensorTopEdit(event){
      this.state.editSensorData.top = event.target.value;
    }

    SensorLeftEdit(event){
      this.state.editSensorData.left = event.target.value;
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
          ipAddress: this.state.editSensorData.sensorIpAddress,
          externalIp: this.state.editSensorData.externalIpAddress,
          top: this.state.editSensorData.top,
          left: this.state.editSensorData.left
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
            ipAddress: this.state.createSensorData.sensorIpAddress,
            externalIp: this.state.createSensorData.externalIpAddress,
            top: this.state.createSensorData.top,
            left: this.state.createSensorData.left
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

  mouseDownSensor(e){
    const el = e.target;

    this.state.offsetX=e.clientX-el.getBoundingClientRect().left;
    this.state.offsetY=e.clientY-el.getBoundingClientRect().top;

    el.addEventListener('mousemove',this.move);
  }

  move(e){
    const el = e.target;

    el.style.left = `${e.pageX - this.state.offsetX}px`;
    el.style.top = `${e.pageY - this.state.offsetY}px`;
    this.state.newX = el.style.left;
    this.state.newY = el.style.top;
  }

  remove(e){
    const el = e.target;
    el.removeEventListener("mousemove", this.move);

    this.state.newX = parseInt(this.state.newX, 10);
    this.state.newY = parseInt(this.state.newY, 10);
    this.state.sensors.map((s) => {
      if(s.id == el.id){
        this.editSensorData(s.id, s.sensorName, s.ipAddress, this.state.newY, this.state.newX, s.externalIp);
      }
    })
    console.log(this.state.editSensorData);
    
  }
  render() {
      const {sensors} = this.state;
    return (
      <Container className="myContainer">
        <Row>
                <img className="mapPicture"
                src={require("./images/map.png")} />
                {sensors.map((s) => {
                    return(
                      <div className="sensorBall" id={s.id} key={s.id} onMouseDown={this.mouseDownSensor} onMouseUp={this.remove} style={{position: 'absolute', top: s.top, left: s.left}}>{s.id}</div>
                    )
                })}
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
              <th>Zewnętrzny adres IP</th>
              <th>Operacje</th>
            </thead>
            <tbody>
              {sensors.map((s) => {
                return(
                <tr key={s.id}>
                  <td>{s.id}</td>
                  <td>{s.sensorName}</td>
                  <td>{s.ipAddress}</td>
                  <td>{s.externalIp}</td>
                  <td>
                    <Button className="btnEdit" variant="dark" onClick={this.editSensorData.bind(this, s.id, s.sensorName, s.ipAddress, s.top, s.left, s.externalIp)}>Edytuj</Button>
                    <Button className="btnDelete" variant="dark" onClick={this.deleteSensors.bind(this, s.id)} >Usuń</Button>
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
            <Form.Group>
              <Form.Label>Zewnętrzny adres ip</Form.Label>
              <Form.Control type="text" defaultValue={this.state.editSensorData.externalIpAddress} onChange={this.SensorExternalIpAddressEdit}/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Top</Form.Label>
              <Form.Control type="text" defaultValue={this.state.editSensorData.top} onChange={this.SensorTopEdit}/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Left</Form.Label>
              <Form.Control type="text" defaultValue={this.state.editSensorData.left} onChange={this.SensorLeftEdit}/>
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
            <Form.Group>
              <Form.Label>Zewnętrzny adres ip</Form.Label>
              <Form.Control type="text" onChange={this.SensorExternalIpAddressNew}/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Top</Form.Label>
              <Form.Control type="text" onChange={this.SensorTopNew}/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Left</Form.Label>
              <Form.Control type="text" onChange={this.SensorLeftNew}/>
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